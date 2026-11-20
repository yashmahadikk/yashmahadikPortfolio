import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

type SaleshandyPrdPageProps = {
  title: string
  content: string
}

type PrdBlock =
  | { kind: "heading"; text: string; level: 2 | 3; key: number }
  | { kind: "paragraph"; text: string; key: number }
  | { kind: "table"; rows: string[][]; key: number }
  | { kind: "diagram"; text: string; key: number }
  | { kind: "toc"; title: string; entries: string[]; key: number }

const sectionNumber = /^\d{1,2}(?:\.\d{1,2})*$/
const diagramLine = /[│┌┐└┘├┤┬┴┼╔╗╚╝╭╮╰╯]/

function isHeading(line: string, previous: string) {
  const text = line.trim()
  return text.length > 0
    && text.length <= 50
    && !text.includes("\t")
    && !/[.!?;:]$/.test(text)
    && !/^(as an?|when|if|the user|users|this |there |we |it |and |or )/i.test(text)
    && previous.trim() === ""
}

function formatPrd(content: string): PrdBlock[] {
  const lines = content.replace(/\r\n/g, "\n").split("\n")
  const blocks: PrdBlock[] = []
  let index = 0

  while (index < lines.length) {
    const line = lines[index]
    const trimmed = line.trim()
    if (!trimmed) {
      index += 1
      continue
    }

    if (trimmed === "Table of Contents") {
      const entries: string[] = []
      let cursor = index + 1
      let lastSection = 0
      while (cursor + 1 < lines.length) {
        const number = lines[cursor].trim()
        const heading = lines[cursor + 1].trim()
        if (!sectionNumber.test(number) || !heading) break
        const majorSection = Number(number.split(".")[0])
        if (!number.includes(".") && majorSection <= lastSection) break
        entries.push(`${number}. ${heading}`)
        if (!number.includes(".")) lastSection = majorSection
        cursor += 2
      }
      blocks.push({ kind: "toc", title: trimmed, entries, key: index })
      index = cursor
      continue
    }

    if (trimmed === "On this page") {
      const entries: string[] = []
      let cursor = index + 1
      while (cursor < lines.length && lines[cursor].trim() && lines[cursor].trim() !== "Email Lookup") {
        entries.push(lines[cursor].trim())
        cursor += 1
      }
      blocks.push({ kind: "toc", title: trimmed, entries, key: index })
      index = cursor
      continue
    }

    if (sectionNumber.test(trimmed) && lines[index + 1]?.trim()) {
      const number = trimmed
      const heading = lines[index + 1].trim()
      blocks.push({ kind: "heading", text: `${number}. ${heading}`, level: number.includes(".") ? 3 : 2, key: index })
      index += 2
      continue
    }

    if (line.includes("\t")) {
      const rows: string[][] = []
      while (index < lines.length && lines[index].includes("\t")) {
        rows.push(lines[index].split("\t").map((cell) => cell.trim()))
        index += 1
      }
      blocks.push({ kind: "table", rows, key: index })
      continue
    }

    if (diagramLine.test(line)) {
      const diagram: string[] = []
      while (index < lines.length && lines[index].trim() && diagramLine.test(lines[index])) {
        diagram.push(lines[index])
        index += 1
      }
      blocks.push({ kind: "diagram", text: diagram.join("\n"), key: index })
      continue
    }

    const previous = lines[index - 1] ?? "start-of-document"
    if (isHeading(line, previous)) {
      blocks.push({ kind: "heading", text: trimmed, level: 3, key: index })
    } else {
      blocks.push({ kind: "paragraph", text: trimmed, key: index })
    }
    index += 1
  }

  return blocks
}

function PrdContent({ content, title }: { content: string; title: string }) {
  const blocks = formatPrd(content)

  return (
    <div className="flex flex-col gap-3">
      {blocks.map((block) => {
        if (block.kind === "heading") {
          const Heading = block.level === 2 ? "h2" : "h3"
          return <Heading key={block.key} className={`${block.level === 2 ? "mt-8 border-b border-border pb-3 text-2xl sm:text-3xl" : "mt-4 text-lg sm:text-xl"} font-semibold leading-snug text-foreground`}>{block.text}</Heading>
        }

        if (block.kind === "toc") {
          return (
            <section key={block.key} aria-label={block.title} className="rounded-xl border border-border bg-muted/40 p-5 sm:p-6">
              <h2 className="mb-4 text-lg font-semibold text-foreground">{block.title}</h2>
              <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {block.entries.map((entry, index) => <li key={`${entry}-${index}`} className="text-sm leading-relaxed text-muted-foreground">{entry}</li>)}
              </ul>
            </section>
          )
        }

        if (block.kind === "table") {
          const [header, ...rows] = block.rows
          return (
            <div key={block.key} className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full min-w-[32rem] border-collapse text-left text-sm leading-relaxed">
                <thead className="bg-muted text-foreground">
                  <tr>{header.map((cell, index) => <th key={index} className="border-b border-border px-4 py-3 font-semibold">{cell}</th>)}</tr>
                </thead>
                <tbody>
                  {rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="odd:bg-card even:bg-muted/40">
                      {row.map((cell, cellIndex) => <td key={cellIndex} className="border-b border-border/70 px-4 py-3 align-top text-foreground/90">{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }

        if (block.kind === "diagram") {
          return <pre key={block.key} className="overflow-x-auto rounded-xl border border-border bg-muted/60 p-5 font-mono text-xs leading-relaxed text-foreground sm:text-sm">{block.text}</pre>
        }

        const isSourceControl = ["Back to Lead Finder", "Expand All", "Collapse All"].includes(block.text)
        const isMetaLabel = ["Version", "Target Launch", "Platform", "Stakeholders", "Prepared by product team"].includes(block.text)
        const isSourceTitle = block.text === title || block.text === "Product Requirements Document"
        return (
          <p key={block.key} className={`${isSourceControl ? "w-fit rounded-md border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground" : isMetaLabel ? "text-xs font-semibold uppercase tracking-wider text-muted-foreground" : isSourceTitle ? "text-sm font-semibold text-foreground" : "max-w-[78ch] text-[15px] text-foreground/90"} whitespace-pre-wrap leading-7`}>
            {block.text}
          </p>
        )
      })}
    </div>
  )
}

export function SaleshandyPrdPage({ title, content }: SaleshandyPrdPageProps) {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="px-6 pb-10 pt-32">
        <div className="mx-auto max-w-5xl">
          <Link href="/work" className="mb-8 inline-flex items-center text-primary transition-colors hover:text-primary/80">
            <ArrowLeft size={18} className="mr-2" />
            Back to Work
          </Link>
          <p className="mb-3 text-sm font-semibold tracking-wider text-primary">{title} · Product Requirements Document</p>
          <h1 className="text-balance text-4xl font-serif italic text-foreground md:text-5xl">{title}</h1>
        </div>
      </section>
      <section className="px-6 pb-20">
        <article className="mx-auto max-w-5xl rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-10">
          <PrdContent content={content} title={title} />
        </article>
      </section>
      <Footer />
    </main>
  )
}
