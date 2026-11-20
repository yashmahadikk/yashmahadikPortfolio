"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, ChevronDown, ChevronRight, ChevronUp } from "lucide-react"

type PrdBlock =
  | { kind: "heading"; text: string; id: string; key: number }
  | { kind: "paragraph"; text: string; key: number }
  | { kind: "table"; rows: string[][]; key: number }
  | { kind: "diagram"; text: string; key: number }
  | { kind: "list"; items: string[]; ordered: boolean; key: number }

type PrdSection = {
  number: string
  title: string
  id: string
  blocks: PrdBlock[]
}

type PrdMetadata = { label: string; value: string }
type PrdDocument = { sections: PrdSection[]; metadata: PrdMetadata[]; note: string }

const sectionNumber = /^\d{1,2}(?:\.\d{1,2})*$/
const diagramLine = /[│┌┐└┘├┤┬┴┼╔╗╚╝╭╮╰╯]/
const metadataLabels = new Set(["Version", "Target Launch", "Platform", "Stakeholders"])
const sourceChrome = new Set([
  "Back to Lead Finder",
  "Expand All",
  "Collapse All",
  "Expand all",
  "Collapse all",
  "Lead Finder",
  "/",
  "PRD",
  "Email Lookup",
  "Product Requirements Document",
  "Prepared by product team",
])

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
}

function getNumberedHeading(lines: string[], index: number) {
  const line = lines[index]?.trim() ?? ""
  if (sectionNumber.test(line) && lines[index + 1]?.trim()) {
    return { number: line, title: lines[index + 1].trim(), end: index + 1 }
  }
  const inline = line.match(/^(\d{1,2}(?:\.\d{1,2})*)\.\s+(.+)$/)
  if (inline) return { number: inline[1], title: inline[2].trim(), end: index }
  return null
}

function isSectionStart(lines: string[], index: number) {
  const heading = getNumberedHeading(lines, index)
  return Boolean(heading && !heading.number.includes(".") && !lines[heading.end + 1]?.trim())
}

function isHeading(line: string, previous: string) {
  const text = line.trim()
  return text.length > 0
    && text.length <= 56
    && !text.includes("\t")
    && !/[.!?;:]$/.test(text)
    && !/^(as an?|when|if|the user|users|this |there |we |it |and |or )/i.test(text)
    && previous.trim() === ""
}

function parseDocument(content: string): PrdDocument {
  let lines = content.replace(/\r\n/g, "\n").split("\n")
  const hasNumberedSections = lines.some((_, index) => isSectionStart(lines, index))
  if (!hasNumberedSections && lines.some((line) => line.trim() === "Email Lookup")) {
    const emailSectionMarkers = [
      ["1", "Overview & Problem Statement", "Problem statement"],
      ["2", "Success Metrics", "Targets for the first 60 days after general availability"],
      ["3", "Target Users & Use Cases", "Where the lists come from decides"],
      ["4", "User Stories", "As an SDR, I want to paste my attendee emails"],
      ["5", "Entry Points", "This phase has two entry points"],
      ["6", "Matching Mechanics", "Search layer"],
      ["7", "After Search", "What the user sees once a Lead Finder search runs"],
      ["8", "Other Features That Will Get Affected", "The Email filter is a new input to an existing search"],
      ["9", "Data Validation & Edge Cases", "Each case names the expected behaviour"],
      ["10", "Error Messages", "No new error message is introduced"],
      ["11", "Notifications", "No new system notifications"],
      ["12", "Communications & GTM", "Item\tWhat changes\tOwner\tWhen"],
      ["13", "Tradeoffs", "Every email goes through the same search layer, one step at a time"],
    ] as const
    const sectionStarts = emailSectionMarkers.flatMap(([number, heading, marker]) => {
      const markerIndex = lines.findIndex((line) => line.trim().startsWith(marker))
      return markerIndex < 0 ? [] : [{ markerIndex, number, heading }]
    }).sort((left, right) => right.markerIndex - left.markerIndex)
    for (const section of sectionStarts) {
      lines.splice(section.markerIndex, 0, section.number, section.heading, "")
    }
  }
  const start = lines.findIndex((_, index) => isSectionStart(lines, index))
  const sectionStart = start < 0 ? lines.length : start
  const metadata: PrdMetadata[] = []
  const consumed = new Set<number>()

  for (let index = 0; index < sectionStart; index += 1) {
    const label = lines[index].trim()
    if (metadataLabels.has(label) && lines[index + 1]?.trim()) {
      metadata.push({ label, value: lines[index + 1].trim() })
      consumed.add(index)
      consumed.add(index + 1)
    }
  }

  const tocStart = lines.findIndex((line) => ["Table of Contents", "On this page"].includes(line.trim()))
  const noteLines = lines.slice(0, tocStart < 0 ? sectionStart : tocStart)
    .map((line, index) => ({ line: line.trim(), index }))
    .filter(({ line, index }) => line && !consumed.has(index) && !sourceChrome.has(line) && !metadataLabels.has(line))
    .filter(({ line }) => !/^(Lead Finder:.*Product Requirements Document|Search the PRD|All \(\d+\)|Lead Finder \(F\)|Data Enrichment \(E\))/.test(line))
  const note = noteLines.map(({ line }) => line).filter((line) => line.length > 55).join(" ")

  const sections: PrdSection[] = []
  let currentSection: PrdSection | undefined
  let index = sectionStart

  while (index < lines.length) {
    const line = lines[index]
    const trimmed = line.trim()
    if (!trimmed) {
      index += 1
      continue
    }

    const numbered = getNumberedHeading(lines, index)
    if (numbered && !lines[numbered.end + 1]?.trim()) {
      const id = `prd-${slugify(`${numbered.number}-${numbered.title}`)}`
      if (!numbered.number.includes(".")) {
        currentSection = { number: numbered.number, title: numbered.title, id, blocks: [] }
        sections.push(currentSection)
      } else if (currentSection) {
        currentSection.blocks.push({ kind: "heading", text: `${numbered.number} ${numbered.title}`, id, key: index })
      }
      index = numbered.end + 1
      continue
    }

    if (!currentSection) {
      index += 1
      continue
    }

    if (line.includes("\t")) {
      const rows: string[][] = []
      while (index < lines.length && lines[index].includes("\t")) {
        rows.push(lines[index].split("\t").map((cell) => cell.trim()))
        index += 1
      }
      currentSection.blocks.push({ kind: "table", rows, key: index })
      continue
    }

    if (diagramLine.test(line)) {
      const diagram: string[] = []
      while (index < lines.length && lines[index].trim() && diagramLine.test(lines[index])) {
        diagram.push(lines[index])
        index += 1
      }
      currentSection.blocks.push({ kind: "diagram", text: diagram.join("\n"), key: index })
      continue
    }

    const bullet = trimmed.match(/^(?:[-•*]\s+|\d+[.)]\s+)(.+)$/)
    if (bullet) {
      const items: string[] = []
      const ordered = /^\d+[.)]\s+/.test(trimmed)
      while (index < lines.length) {
        const item = lines[index].trim().match(/^(?:[-•*]\s+|\d+[.)]\s+)(.+)$/)
        if (item) {
          items.push(item[1])
          index += 1
        } else if (!lines[index].trim() && lines[index + 1]?.trim().match(/^(?:[-•*]\s+|\d+[.)]\s+)/)) {
          index += 1
        } else {
          break
        }
      }
      currentSection.blocks.push({ kind: "list", items, ordered, key: index })
      continue
    }

    const lastBlock = currentSection.blocks[currentSection.blocks.length - 1]
    if (lastBlock?.kind === "paragraph" && lastBlock.text.endsWith(":")) {
      const items: string[] = []
      let cursor = index
      while (cursor < lines.length) {
        const candidate = lines[cursor].trim()
        if (!candidate) {
          cursor += 1
          continue
        }
        if (candidate.includes("\t") || diagramLine.test(candidate) || /[.!?]$/.test(candidate)) break
        items.push(candidate)
        cursor += 1
      }
      if (items.length > 1) {
        currentSection.blocks.push({ kind: "list", items, ordered: false, key: index })
        index = cursor
        continue
      }
    }

    const previous = lines[index - 1] ?? ""
    if (isHeading(line, previous)) {
      currentSection.blocks.push({ kind: "heading", text: trimmed, id: slugify(`${currentSection.id}-${trimmed}`), key: index })
    } else {
      currentSection.blocks.push({ kind: "paragraph", text: trimmed, key: index })
    }
    index += 1
  }

  return { sections, metadata, note }
}

function SectionContent({ blocks }: { blocks: PrdBlock[] }) {
  return (
    <div className="flex flex-col gap-4 sm:gap-5">
      {blocks.map((block) => {
        if (block.kind === "heading") {
          return <h3 key={block.key} id={block.id} className="scroll-mt-24 pt-2 text-lg font-semibold leading-snug text-foreground sm:text-xl">{block.text}</h3>
        }
        if (block.kind === "table") {
          const [header, ...rows] = block.rows
          return (
            <div key={block.key} className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full min-w-[32rem] border-collapse text-left text-sm leading-relaxed">
                {header && <thead className="bg-muted/70 text-muted-foreground"><tr>{header.map((cell, cellIndex) => <th key={cellIndex} className="border-b border-border px-4 py-3 font-semibold">{cell}</th>)}</tr></thead>}
                <tbody>{rows.map((row, rowIndex) => <tr key={rowIndex} className="border-b border-border/70 last:border-0 even:bg-muted/30">{row.map((cell, cellIndex) => <td key={cellIndex} className="px-4 py-3 align-top text-foreground/90">{cell}</td>)}</tr>)}</tbody>
              </table>
            </div>
          )
        }
        if (block.kind === "diagram") {
          return <pre key={block.key} className="overflow-x-auto rounded-lg border border-border bg-muted/40 p-4 font-mono text-xs leading-relaxed text-foreground sm:text-sm">{block.text}</pre>
        }
        if (block.kind === "list") {
          const List = block.ordered ? "ol" : "ul"
          return <List key={block.key} className={`${block.ordered ? "list-decimal" : "list-disc"} flex flex-col gap-2 pl-6 text-[15px] leading-7 text-foreground/90`}>{block.items.map((item, itemIndex) => <li key={itemIndex} className="pl-1">{item}</li>)}</List>
        }
        return <p key={block.key} className="max-w-[82ch] whitespace-pre-wrap text-[15px] leading-7 text-foreground/90">{block.text}</p>
      })}
    </div>
  )
}

export function SaleshandyPrdViewer({ title, content }: { title: string; content: string }) {
  const { sections, metadata, note } = parseDocument(content)
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set(sections.map((section) => section.id)))
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "")
  const toc = sections.flatMap((section) => [
    { id: section.id, label: `${section.number} ${section.title}`, nested: false },
    ...section.blocks.filter((block): block is Extract<PrdBlock, { kind: "heading" }> => block.kind === "heading")
      .map((block) => ({ id: block.id, label: block.text, nested: true })),
  ])

  function toggleSection(id: string) {
    setExpanded((previous) => {
      const next = new Set(previous)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  function setAllSections(open: boolean) {
    setExpanded(open ? new Set(sections.map((section) => section.id)) : new Set())
  }

  const contents = (
    <nav aria-label="Table of contents" className="flex flex-col gap-1">
      {toc.map((entry) => (
        <a
          key={entry.id}
          href={`#${entry.id}`}
          onClick={() => setActiveId(entry.id)}
          className={`flex min-h-9 items-start gap-3 rounded-md px-2.5 py-2 text-sm leading-5 transition-colors ${entry.nested ? "pl-8 text-muted-foreground" : "font-medium"} ${activeId === entry.id ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-muted"}`}
        >
          {!entry.nested && <span className="w-5 shrink-0 font-mono text-xs text-muted-foreground">{entry.label.split(" ")[0]}</span>}
          <span>{entry.nested ? entry.label : entry.label.slice(entry.label.indexOf(" ") + 1)}</span>
        </a>
      ))}
    </nav>
  )

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur sm:px-6">
        <Link href="/work" className="inline-flex shrink-0 items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
          <ArrowLeft aria-hidden="true" className="size-4" />
          <span className="hidden sm:inline">Back to Work</span>
          <span className="sr-only sm:hidden">Back to Work</span>
        </Link>
        <p className="min-w-0 truncate px-3 text-center text-sm sm:text-base">
          <span className="font-semibold text-foreground">{title}</span>
          <span className="text-muted-foreground"> · Product Requirements Document</span>
        </p>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <button type="button" aria-label="Expand all sections" onClick={() => setAllSections(true)} className="inline-flex items-center justify-center rounded-md border border-border bg-card px-2.5 py-2 text-xs font-medium transition-colors hover:bg-muted sm:px-3 sm:text-sm">
            <ChevronDown aria-hidden="true" className="size-4 sm:hidden" />
            <span className="hidden sm:inline">Expand All</span>
            <span className="sr-only sm:hidden">Expand All</span>
          </button>
          <button type="button" aria-label="Collapse all sections" onClick={() => setAllSections(false)} className="inline-flex items-center justify-center rounded-md border border-border bg-card px-2.5 py-2 text-xs font-medium transition-colors hover:bg-muted sm:px-3 sm:text-sm">
            <ChevronUp aria-hidden="true" className="size-4 sm:hidden" />
            <span className="hidden sm:inline">Collapse All</span>
            <span className="sr-only sm:hidden">Collapse All</span>
          </button>
        </div>
      </header>

      <div className="flex min-h-[calc(100dvh-4rem)]">
        <aside className="hidden w-80 shrink-0 flex-col border-r border-border bg-background lg:flex xl:w-[22rem]">
          <div className="overflow-y-auto px-5 py-6">
            <h1 className="text-balance text-2xl font-semibold leading-tight tracking-tight">{title}</h1>
            <p className="mt-2 text-sm text-muted-foreground">Product Requirements Document</p>

            {metadata.length > 0 && (
              <dl className="mt-5 overflow-hidden rounded-lg border border-border">
                {metadata.map((item, index) => (
                  <div key={item.label} className={`grid grid-cols-[6rem_1fr] gap-3 px-3 py-2.5 text-sm ${index ? "border-t border-border" : ""}`}>
                    <dt className="font-medium text-muted-foreground">{item.label}</dt>
                    <dd className="leading-5 text-foreground">{item.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {note && <p className="mt-5 text-sm italic leading-6 text-muted-foreground">{note}</p>}

            <p className="mb-2 mt-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Table of Contents</p>
            {contents}
          </div>
        </aside>

        <main className="min-w-0 flex-1 bg-muted/30">
          <div className="mx-auto flex max-w-5xl flex-col gap-5 px-4 py-5 sm:px-8 sm:py-8">
            <section aria-labelledby="mobile-toc-heading" className="rounded-lg border border-border bg-card p-4 lg:hidden">
              <h2 id="mobile-toc-heading" className="mb-3 text-sm font-semibold">Table of Contents</h2>
              {contents}
            </section>
            {sections.map((section) => {
              const isOpen = expanded.has(section.id)
              return (
                <section key={section.id} id={section.id} className="scroll-mt-20 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                  <h2>
                    <button type="button" aria-expanded={isOpen} aria-controls={`${section.id}-content`} onClick={() => toggleSection(section.id)} className="flex w-full items-center gap-3 px-4 py-4 text-left transition-colors hover:bg-muted/40 sm:px-6">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-mono text-sm font-semibold text-primary">{section.number}</span>
                      <span className="min-w-0 flex-1 text-lg font-semibold leading-snug sm:text-xl">{section.title}</span>
                      {isOpen ? <ChevronUp aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" /> : <ChevronDown aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />}
                    </button>
                  </h2>
                  {isOpen && <div id={`${section.id}-content`} className="border-t border-border px-4 py-6 sm:px-7 sm:py-8"><SectionContent blocks={section.blocks} /></div>}
                </section>
              )
            })}
            {sections.length === 0 && <p className="rounded-lg border border-border bg-card p-6 text-sm text-muted-foreground">This document does not contain any numbered sections.</p>}
          </div>
        </main>
      </div>
    </div>
  )
}
