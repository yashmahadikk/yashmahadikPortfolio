import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowUpRight, ArrowDown, Bookmark, Globe, Search, Shuffle, X, FolderOpen, CircleAlert } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Curated Links | Yash Mahadik",
  description: "A personal collection of interesting websites, videos, resources and ideas.",
}
export const dynamic = "force-dynamic"

type DatabaseLink = {
  id: string | number
  title: string | null
  url: string | null
  description?: string | null
  category?: string | null
  order_position?: number | null
}
type Resource = {
  id: string
  title: string
  url: string
  domain: string
  description: string
  category: string
}
type Params = { q?: string | string[]; category?: string | string[]; surprise?: string | string[] }

// Preserve the exact stored category, including capitalization.
// Only null, empty or entirely whitespace categories fall back to General.
function categoryName(value?: string | null) {
  return value?.trim() ? value : "General"
}
function first(value?: string | string[]) {
  return (Array.isArray(value) ? value[0] : value) || ""
}
function safeUrl(value?: string | null) {
  const input = value?.trim() || ""
  if (!input || /[\u0000-\u001f\u007f]/.test(input)) return ""
  try {
    // Accept HTTP(S) and bare web domains, but no other schemes.
    if (/^[a-z][a-z0-9+.-]*:/i.test(input) && !/^https?:\/\//i.test(input)) return ""
    const parsed = new URL(/^https?:\/\//i.test(input) ? input : `https://${input}`)
    return parsed.hostname.includes(".") && !parsed.username && !parsed.password && ["http:", "https:"].includes(parsed.protocol) ? parsed.href : ""
  } catch { return "" }
}
function domainOf(url: string) {
  try { return new URL(url).hostname.replace(/^www\./i, "") } catch { return "" }
}
function href(category = "", query = "", surprise = "") {
  const p = new URLSearchParams()
  if (category) p.set("category", category)
  if (query) p.set("q", query)
  if (surprise) p.set("surprise", surprise)
  return `/curated-links${p.size ? `?${p.toString()}` : ""}`
}

async function loadResources(): Promise<{ resources: Resource[]; error: boolean }> {
  try {
    const supabase = await createClient()
    const rows: DatabaseLink[] = []
    const size = 200
    for (let offset = 0; ; offset += size) {
      const { data, error } = await supabase.from("curated_links")
        .select("id,title,url,description,category,order_position")
        .order("order_position", { ascending: true, nullsFirst: false })
        .order("id", { ascending: true })
        .range(offset, offset + size - 1)
      if (error) throw error
      const batch = (data || []) as DatabaseLink[]
      rows.push(...batch)
      if (batch.length < size) break
    }
    return { error: false, resources: rows.map(row => {
      const url = safeUrl(row.url)
      return {
        id: String(row.id), title: row.title?.trim() || "Untitled resource",
        url, domain: domainOf(url), description: row.description?.trim() || "",
        category: categoryName(row.category),
      }
    }) }
  } catch (error) {
    console.error("Curated links fetch failed", error)
    return { resources: [], error: true }
  }
}

function InternetIllustration() {
  return <svg viewBox="0 0 360 210" className="h-auto w-full" aria-hidden="true">
    <defs><pattern id="bookmark-dots" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r=".7" fill="currentColor" opacity=".12" /></pattern></defs>
    <rect width="360" height="210" fill="url(#bookmark-dots)" />
    <g fill="none" stroke="currentColor" strokeOpacity=".25">
      <circle cx="180" cy="100" r="75"/><circle cx="180" cy="100" r="87" strokeDasharray="2 6"/>
      <ellipse cx="180" cy="100" rx="30" ry="75"/><ellipse cx="180" cy="100" rx="55" ry="75"/>
      <path d="M105 100 H255 M115 62 H245 M115 138 H245"/>
    </g>
    <path d="M138 57 L220 43 L235 125 L158 162 Z" fill="none" stroke="#86a397" strokeDasharray="4 5"/>
    {[[138,57],[220,43],[235,125],[158,162],[180,100]].map(([x,y]) => <g key={`${x}-${y}`}><circle cx={x} cy={y} r="8" fill="#86a397" opacity=".15"/><circle cx={x} cy={y} r="3" fill="#86a397"/></g>)}
    <g transform="translate(30 56) rotate(-9)"><rect width="76" height="88" rx="4" fill="#b5a078" fillOpacity=".1" stroke="#b5a078"/><rect x="10" y="12" width="44" height="6" rx="2" fill="#b5a078"/>{[30,40,50,60,70].map(y => <path key={y} d={`M10 ${y} H65`} stroke="#b5a078" opacity=".5"/>)}</g>
    <g transform="translate(257 77) rotate(12)"><rect width="63" height="82" rx="4" fill="#86a397" fillOpacity=".15" stroke="#86a397"/><path d="M18 14 H45 V63 L31.5 53 L18 63Z" fill="#86a397"/></g>
    <text x="180" y="202" textAnchor="middle" fill="currentColor" opacity=".45" fontSize="8" letterSpacing="2" fontFamily="monospace">THE INTERESTING INTERNET</text>
  </svg>
}

/* =====================================================
   AUTOMATIC RESOURCE ARTWORK
   Classification is independent of the stored category.
   No category names, URLs, or resources are hardcoded in
   the directory. These rules only choose an illustration.
===================================================== */

type VisualKind =
  | "video" | "funding" | "ai" | "design" | "research"
  | "code" | "product" | "cinema" | "science" | "culture"
  | "website" | "bookmark"

const visualStyles: Record<VisualKind, { color: string; label: string }> = {
  video: { color: "#B98282", label: "VIDEO" },
  funding: { color: "#B5A078", label: "CAPITAL & GROWTH" },
  ai: { color: "#819BB8", label: "ARTIFICIAL INTELLIGENCE" },
  design: { color: "#A395B3", label: "DESIGN" },
  research: { color: "#83A6A5", label: "KNOWLEDGE" },
  code: { color: "#829F9B", label: "TECHNOLOGY" },
  product: { color: "#B79A81", label: "PRODUCT & STRATEGY" },
  cinema: { color: "#A18DA8", label: "CINEMA" },
  science: { color: "#819BB8", label: "DISCOVERY" },
  culture: { color: "#B79D84", label: "HISTORY & CULTURE" },
  website: { color: "#86A397", label: "THE WEB" },
  bookmark: { color: "#929B98", label: "BOOKMARK" },
}

const fallbackColors = ["#86A397", "#819BB8", "#A395B3", "#B5A078", "#B98282", "#83A6A5", "#A39A8E"]

function stableHash(value: string): number {
  let hash = 2166136261
  for (let i = 0; i < value.length; i++) {
    hash = Math.imul(hash ^ value.charCodeAt(i), 16777619)
  }
  return hash >>> 0
}

function matchesDomain(domain: string, base: string) {
  return domain === base || domain.endsWith(`.${base}`)
}

function getVisualKind(resource: Resource): VisualKind {
  const { domain, title, category, url } = resource
  const categoryText = category.toLowerCase()
  const text = `${title} ${category} ${resource.description}`.toLowerCase()
  // Video hosts take priority, even for videos about AI or funding.
  if (["youtube.com", "youtu.be", "vimeo.com", "dailymotion.com"].some(host => matchesDomain(domain, host)) || /\b(youtube|videos?|video essays?|tutorial videos?)\b/i.test(categoryText)) return "video"
  if (/\b(funding|fundraising|investors?|investing|venture capital|vcs?|private equity|seed funding|pre[ -]?seed|capital markets)\b/i.test(text)) return "funding"
  if (/\b(ai|artificial intelligence|machine learning|deep learning|llms?|generative|neural|transformers?|rag|agents?)\b/i.test(text) || matchesDomain(domain, "huggingface.co")) return "ai"
  if (/\b(design|ux|ui|wireframes?|prototyping|typography|figma|iconography|usability)\b/i.test(text)) return "design"
  if (/\b(cinema|films?|movies?|filmmaking|movie reviews?|screenplays?)\b/i.test(text)) return "cinema"
  if (/\b(research|papers?|articles?|essays?|books?|reading|journals?|libraries|newsletters?|reports?)\b/i.test(text) || /\.pdf(?:$|[?#])/i.test(url) || matchesDomain(domain, "arxiv.org")) return "research"
  if (/\b(programming|coding|developer|engineering|code|software development|documentation|apis?|github|open source)\b/i.test(text) || matchesDomain(domain, "github.com")) return "code"
  if (/\b(product management|product|strategy|marketing|growth|business|startups?|branding|economics)\b/i.test(text)) return "product"
  if (/\b(science|astronomy|space|physics|biology|chemistry|mathematics)\b/i.test(text)) return "science"
  if (/\b(history|culture|architecture|heritage|philosophy|art)\b/i.test(text)) return "culture"
  if (/\b(websites?|web|internet|online|directories|directory)\b/i.test(categoryText)) return "website"
  return "bookmark"
}

function getVisualIdentity(resource: Resource) {
  const kind = getVisualKind(resource)
  const seed = stableHash(`${resource.title}\u0000${resource.url}\u0000${resource.category}`)
  const color = kind === "bookmark"
    ? fallbackColors[stableHash(resource.category) % fallbackColors.length]
    : visualStyles[kind].color
  return { kind, color, label: visualStyles[kind].label, seed }
}

function BrowserFrame({ children }: { children: ReactNode }) {
  return (
    <g>
      <rect x="26" y="19" width="168" height="104" rx="5" fill="currentColor" fillOpacity=".025" stroke="currentColor" strokeOpacity=".34" />
      <path d="M26 37 H194" stroke="currentColor" strokeOpacity=".22" />
      {[35, 43, 51].map(x => <circle key={x} cx={x} cy="28" r="2" fill="currentColor" opacity=".35" />)}
      {children}
    </g>
  )
}

function ResourceArtwork({ kind, color: c, seed }: { kind: VisualKind; color: string; seed: number }) {
  const variant = seed % 5
  switch (kind) {
    case "video":
      return <BrowserFrame>
        <rect x="35" y="43" width="150" height="60" rx="3" fill={c} fillOpacity=".13" stroke={c} strokeOpacity=".5" />
        <circle cx="110" cy="72" r="21" fill={c} fillOpacity=".22" stroke={c} />
        <path d="M104 62 L121 72 L104 82 Z" fill={c} />
        <path d="M40 113 H180" stroke="currentColor" strokeOpacity=".2" strokeWidth="2" strokeLinecap="round" />
        <path d={`M40 113 H${75 + variant * 18}`} stroke={c} strokeWidth="2.5" strokeLinecap="round" />
        <circle cx={75 + variant * 18} cy="113" r="3" fill={c} />
      </BrowserFrame>
    case "funding":
      return <g>
        <rect x="28" y="20" width="164" height="104" rx="5" fill={c} fillOpacity=".06" stroke={c} strokeOpacity=".5" />
        <path d="M43 35 V108 H179" stroke="currentColor" strokeOpacity=".3" fill="none" />
        {[0,1,2,3].map(i => { const height = 20 + i * 13 + ((seed >>> (i*3)) % 7); return <rect key={i} x={52+i*31} y={105-height} width="20" height={height} rx="3" fill={c} fillOpacity={.23+i*.13} stroke={c} strokeOpacity=".65" /> })}
        <path d="M55 70 L91 56 L120 60 L172 27 M157 27 H172 V42" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    case "ai": {
      const nodes = [[46,40],[46,78],[46,110],[110,29],[110,74],[110,118],[174,42],[174,104]]
      return <g>
        {nodes.slice(0,3).flatMap(([x,y],i) => nodes.slice(3,6).map(([a,b],j) => <path key={`${i}-${j}`} d={`M${x} ${y} L${a} ${b}`} stroke={c} strokeOpacity={(i+j+variant)%3===0 ? .65 : .24} />))}
        {nodes.slice(3,6).flatMap(([x,y],i) => nodes.slice(6).map(([a,b],j) => <path key={`out-${i}-${j}`} d={`M${x} ${y} L${a} ${b}`} stroke={c} strokeOpacity=".4" />))}
        {nodes.map(([x,y],i) => <g key={i}><circle cx={x} cy={y} r={i===4 ? 12 : 9} fill={c} fillOpacity=".16" stroke={c} strokeWidth="1.2"/><circle cx={x} cy={y} r="3" fill={c}/></g>)}
      </g>
    }
    case "design":
      return <BrowserFrame>
        <path d="M55 38 V122" stroke="currentColor" strokeOpacity=".18" />
        {[49,61,73,85].map(y => <path key={y} d={`M34 ${y} H47`} stroke={c} strokeWidth="2" strokeLinecap="round" />)}
        <rect x="65" y="47" width="74" height="66" rx="2" stroke={c} fill={c} fillOpacity=".08" />
        <rect x="71" y="53" width="62" height="19" rx="2" fill={c} fillOpacity=".28" />
        <rect x="71" y="79" width="28" height="25" rx="2" stroke={c} strokeOpacity=".7" fill="none" />
        <rect x="105" y="79" width="28" height="25" rx="2" stroke={c} strokeOpacity=".7" fill="none" />
        {[49,65,81].map(y => <rect key={y} x="149" y={y} width="31" height="8" rx="2" fill={c} fillOpacity=".25" />)}
        <path d="M138 90 L152 106 L145 106 L143 113 Z" fill={c} />
      </BrowserFrame>
    case "research":
      return <g>
        <rect x="55" y="20" width="110" height="106" rx="4" transform="rotate(7 110 73)" fill={c} fillOpacity=".06" stroke={c} strokeOpacity=".5" />
        <path d="M45 17 H151 L175 41 V126 H45 Z" fill={c} fillOpacity=".08" stroke={c} />
        <path d="M151 17 V41 H175" stroke={c} fill="none" />
        <rect x="57" y="31" width="69" height="8" rx="2" fill={c} opacity=".65" />
        {[49,58,67,76,85,94,103,112].map((y,i) => <path key={y} d={`M57 ${y} H${i%3===2 ? 115+variant*4 : 162}`} stroke="currentColor" strokeOpacity=".3" strokeWidth="1.5" strokeLinecap="round" />)}
      </g>
    case "code":
      return <BrowserFrame>
        <text x="110" y="70" textAnchor="middle" fontFamily="monospace" fontSize="29" fill={c}>{"</>"}</text>
        {[0,1,2].map(i => <g key={i}><rect x={52+i*6} y={83+i*10} width={70+((seed >>> (i*4))%30)} height="3" rx="1.5" fill={c} opacity=".5"/><rect x="151" y={83+i*10} width="18" height="3" rx="1.5" fill="currentColor" opacity=".22"/></g>)}
      </BrowserFrame>
    case "product":
      return <g>
        {[[24,53,52,40],[84,36,52,74],[144,48,52,50]].map(([x,y,w,h],i) => <g key={i}><rect x={x} y={y} width={w} height={h} rx="4" fill={c} fillOpacity={.09+i*.045} stroke={c} /><rect x={x+8} y={y+10} width={w-16} height="5" rx="2" fill={c} opacity=".65"/><path d={`M${x+8} ${y+23} h${w-16}`} stroke="currentColor" strokeOpacity=".3"/>{i===1 && <path d={`M${x+8} ${y+34} h${w-16} M${x+8} ${y+44} h${w-22}`} stroke="currentColor" strokeOpacity=".3" />}</g>)}
        <path d="M76 73 H84 M136 73 H144" stroke={c} strokeWidth="1.6" strokeDasharray="2 2" />
        <path d="M170 98 V127 H50 V93" stroke={c} strokeOpacity=".5" fill="none" strokeDasharray="3 4" />
      </g>
    case "cinema":
      return <g>
        <rect x="25" y="30" width="170" height="90" rx="5" stroke={c} fill={c} fillOpacity=".09" />
        <path d="M25 44 H195 M25 106 H195" stroke={c} />
        {[0,1,2,3,4,5,6,7].map(i => <g key={i}><rect x={33+i*20} y="34" width="10" height="6" rx="1" fill={c} opacity=".55"/><rect x={33+i*20} y="110" width="10" height="6" rx="1" fill={c} opacity=".55"/></g>)}
        {[0,1,2].map(i => <rect key={i} x={35+i*51} y="51" width="47" height="48" rx="2" fill={c} fillOpacity={.12+i*.1} stroke={c} strokeOpacity=".6"/>)}
        <path d="M104 64 L122 75 L104 86 Z" fill={c} />
      </g>
    case "science":
      return <g>
        {[0,60,120].map(angle => <ellipse key={angle} cx="110" cy="74" rx="65" ry="23" transform={`rotate(${angle+variant*5} 110 74)`} fill="none" stroke={c} strokeOpacity=".72" />)}
        <circle cx="110" cy="74" r="12" fill={c} fillOpacity=".25" stroke={c}/><circle cx="110" cy="74" r="4" fill={c}/>
        <circle cx="175" cy="74" r="4" fill={c}/><circle cx="80" cy="25" r="4" fill={c}/><circle cx="78" cy="127" r="4" fill={c}/>
      </g>
    case "culture":
      return <g fill="none" stroke={c} strokeWidth="1.3">
        <path d="M35 47 L110 18 L185 47 Z" fill={c} fillOpacity=".13"/><rect x="38" y="48" width="144" height="9" rx="1" fill={c} fillOpacity=".2"/>
        {[51,89,127,165].map(x => <g key={x}><rect x={x-5} y="61" width="14" height="55" rx="1" fill={c} fillOpacity=".13"/><path d={`M${x-1} 66 V111 M${x+5} 66 V111`} strokeOpacity=".5"/></g>)}
        <path d="M38 116 H182 V124 H38 Z M28 124 H192 V132 H28 Z" fill={c} fillOpacity=".15"/>
      </g>
    case "website":
      return <BrowserFrame>
        <g fill="none" stroke={c} strokeWidth="1.2"><circle cx="110" cy="80" r="33"/><ellipse cx="110" cy="80" rx="14" ry="33"/><path d="M77 80 H143 M83 62 H137 M83 98 H137"/></g>
        <path d="M143 79 L166 90 L156 93 L153 104 Z" fill={c}/>
      </BrowserFrame>
    default:
      return <g>
        <rect x="66" y="15" width="88" height="112" rx="5" fill={c} fillOpacity=".1" stroke={c} />
        <path d="M87 28 H133 V104 L110 88 L87 104 Z" fill={c} fillOpacity=".22" stroke={c}/>
        <path d="M49 35 H35 V51 M171 106 H185 V90" fill="none" stroke={c} strokeDasharray="3 4" />
        {Array.from({length:4},(_,i) => <circle key={i} cx={30+((seed >>> (i*5))%160)} cy={i%2===0 ? 11 : 134} r={1.5+((seed >>> (i*4))%3)} fill={c} opacity=".5" />)}
      </g>
  }
}

function ResourceVisual({ resource, className = "" }: { resource: Resource; className?: string }) {
  const { kind, color, label, seed } = getVisualIdentity(resource)
  return (
    <div
      className={`relative isolate flex aspect-[1.65/1] items-center justify-center overflow-hidden rounded-md border border-border ${className}`}
      style={{ backgroundColor: `${color}16` }}
      aria-hidden="true"
      data-visual-kind={kind}
    >
      <div className="absolute inset-0 opacity-[.10]" style={{ backgroundImage: "radial-gradient(currentColor 0.7px, transparent 0.7px)", backgroundSize: `${12+seed%5}px ${12+seed%5}px` }} />
      <svg viewBox="0 0 220 150" preserveAspectRatio="xMidYMid meet" className="relative block h-full w-full transition-transform duration-300 group-hover:scale-[1.025] motion-reduce:transform-none" fill="currentColor">
        <ResourceArtwork kind={kind} color={color} seed={seed} />
        <text x="110" y="144" textAnchor="middle" fontFamily="monospace" fontSize="6.7" letterSpacing=".9" fill="currentColor" opacity=".55">{label}</text>
      </svg>
    </div>
  )
}

/* Website favicon and automatic SVG are distinct visual elements. */
function ResourceIcon({ resource }: { resource: Resource }) {
  const domain = resource.domain === "youtu.be" ? "youtube.com" : resource.domain
  return (
    <span className="relative flex size-6 shrink-0 items-center justify-center overflow-hidden rounded border border-border bg-white" aria-hidden="true">
      <Globe size={14} className="absolute text-neutral-500" />
      {domain && (
        <img
          src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=64`}
          alt="" width={18} height={18} loading="lazy" decoding="async"
          referrerPolicy="no-referrer" className="relative size-[18px] bg-white object-contain"
        />
      )}
    </span>
  )
}

function ResourceRow({ resource }: { resource: Resource }) {
  const content = (
    <>
      <ResourceVisual resource={resource} className="w-[100px] shrink-0 self-start sm:w-[144px] xl:w-[120px] 2xl:w-[148px]" />
      <div className="min-w-0 flex-1">
        <div className="flex items-start gap-2">
          <ResourceIcon resource={resource} />
          <h3 className="min-w-0 flex-1 break-words text-sm font-semibold leading-snug transition-colors group-hover:text-primary md:text-base">
            {resource.title}
          </h3>
          {resource.url && <ArrowUpRight size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary motion-reduce:transform-none" aria-hidden="true" />}
        </div>
        {resource.description && (
          <p className="mt-2 break-words whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{resource.description}</p>
        )}
        <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Globe size={12} className="shrink-0" aria-hidden="true" />
          <span className="min-w-0 break-all">{resource.domain || "Website address unavailable"}</span>
        </p>
      </div>
    </>
  )
  const classes = "group flex min-w-0 items-start gap-3 border-b border-border px-1 py-5 transition-colors hover:bg-muted/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:gap-4 md:px-2 md:py-6"
  return resource.url ? (
    <a href={resource.url} target="_blank" rel="noopener noreferrer" className={classes} aria-label={`Open ${resource.title} in a new tab`}>
      {content}
    </a>
  ) : <article className={classes}>{content}</article>
}

function SurpriseResource({ resource, nextHref, dismissHref }: { resource: Resource; nextHref?: string; dismissHref: string }) {
  return (
    <section className="mt-5 rounded-md border border-border bg-muted/20 p-4 md:p-6">
      <div className="flex items-center justify-between gap-3">
        <p className="flex items-center gap-2 text-[10px] uppercase tracking-[.16em] text-muted-foreground"><Shuffle size={13} /> A little internet detour</p>
        <Link href={dismissHref} scroll={false} prefetch={false} aria-label="Dismiss suggested resource" className="flex size-10 items-center justify-center rounded hover:bg-muted"><X size={16} /></Link>
      </div>
      <div className="mt-4 grid items-start gap-4 sm:grid-cols-[180px_minmax(0,1fr)] md:grid-cols-[230px_minmax(0,1fr)]">
        <ResourceVisual resource={resource} className="w-full" />
        <div className="min-w-0">
          <div className="flex items-center gap-2"><ResourceIcon resource={resource}/><span className="break-words whitespace-pre-wrap text-xs text-muted-foreground">{resource.category}</span></div>
          <h2 className="mt-3 break-words font-serif text-2xl leading-tight">{resource.title}</h2>
          {resource.description && <p className="mt-2 break-words whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{resource.description}</p>}
          <p className="mt-2 break-all text-xs text-muted-foreground">{resource.domain}</p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <a href={resource.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-md bg-foreground px-4 text-xs font-medium text-background hover:opacity-85">Explore this resource <ArrowUpRight size={14}/></a>
        {nextHref && <Link href={nextHref} scroll={false} prefetch={false} className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-4 text-xs hover:bg-muted"><Shuffle size={13}/> Something else</Link>}
      </div>
    </section>
  )
}

export default async function CuratedLinksPage({ searchParams }: { searchParams: Promise<Params> }) {
  const params = await searchParams
  const { resources, error } = await loadResources()
  // No predefined categories. Each stored value becomes a collection.
  const groups = new Map<string, Resource[]>()
  for (const resource of resources) {
    if (!groups.has(resource.category)) groups.set(resource.category, [])
    groups.get(resource.category)!.push(resource)
  }
  const collections = Array.from(groups.entries())
  const query = first(params.q).trim()
  const requested = first(params.category)
  const active = groups.has(requested) ? requested : ""
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean)
  const filtered = resources.filter(r => (!active || r.category === active) && terms.every(t => [r.title,r.description,r.category,r.domain,r.url].join(" ").toLowerCase().includes(t)))
  const shownIds = new Set(filtered.map(r => r.id))
  const visible = collections.map(([name, links], index) => ({ name, index, links: links.filter(r => shownIds.has(r.id)) })).filter(g => g.links.length)
  const valid = filtered.filter(r => r.url)
  const surprise = valid.find(r => r.id === first(params.surprise))
  const alternatives = valid.filter(r => r.id !== surprise?.id)
  const pool = alternatives.length ? alternatives : valid
  const next = pool.length ? pool[Math.floor(Math.random() * pool.length)] : undefined
  const nextHref = next ? href(active, query, next.id) : undefined
  const nav = [{ name: "All resources", value: "", count: resources.length }, ...collections.map(([name,links]) => ({ name, value: name, count: links.length }))]

  return <div className="flex min-h-screen flex-col bg-background text-foreground">
    <Navigation/>
    <main className="min-w-0 flex-1">
      <div data-layout="curated-links-auto-svg-v3" className="mx-auto w-full max-w-[1600px] px-5 md:px-8 lg:px-12 2xl:px-16">
        <section className="grid items-center gap-5 pb-7 pt-24 lg:grid-cols-[1.7fr_1fr] lg:gap-16 lg:pb-9">
          <div>
            <p className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[.18em] text-muted-foreground md:text-xs"><Bookmark size={14}/> Bookmarks / The good side of the internet</p>
            <h1 className="font-serif text-[36px] font-normal leading-[1.08] tracking-[-.035em] sm:text-[46px] lg:text-[clamp(44px,4vw,62px)]">Lost in the internet.<span className="block italic text-muted-foreground">Found these.</span></h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">A collection of things worth reading, exploring, learning from or simply getting distracted by.</p>
            <div className="mt-5 flex flex-wrap items-center gap-4"><p className="text-xs tabular-nums text-muted-foreground">{resources.length} bookmarks · {collections.length} collections</p>{nextHref && <Link href={nextHref} prefetch={false} scroll={false} className="inline-flex min-h-11 items-center gap-2 rounded border border-border px-4 text-xs font-medium hover:bg-muted"><Shuffle size={14}/> Surprise me</Link>}</div>
            <a href="#collections" className="mt-3 inline-flex min-h-10 items-center gap-2 text-xs text-muted-foreground hover:text-foreground">Explore the collections <ArrowDown size={13}/></a>
          </div>
          <div className="hidden w-full max-w-sm justify-self-end lg:block"><InternetIllustration/></div>
        </section>
        <div id="collections" className="grid scroll-mt-24 gap-7 border-t border-border py-7 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12 lg:py-9 2xl:grid-cols-[260px_minmax(0,1fr)] 2xl:gap-16">
          <aside className="hidden lg:block"><div className="sticky top-28">
            <p className="mb-4 text-[10px] uppercase tracking-[.18em] text-muted-foreground">Collections</p>
            <nav aria-label="Collections" className="max-h-[60vh] space-y-1 overflow-y-auto">{nav.map(n => <Link key={n.value} href={href(n.value,query)} prefetch={false} scroll={false} aria-current={active===n.value ? "page" : undefined} className={`flex min-h-11 items-center justify-between gap-3 rounded px-3 py-2 text-sm ${active===n.value ? "bg-muted font-medium" : "text-muted-foreground hover:bg-muted/50"}`}><span className="min-w-0 break-words whitespace-pre-wrap">{n.name}</span><span className="shrink-0 font-mono text-xs opacity-60">{n.count}</span></Link>)}</nav>
            <div className="mt-7 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground"><Bookmark size={18} className="mb-3"/>Curated by a human.<br/>Not an algorithm.</div>
          </div></aside>
          <div className="min-w-0">
            <nav aria-label="Mobile collections" className="mb-3 flex gap-2 overflow-x-auto pb-2 lg:hidden">{nav.map(n => <Link key={n.value} href={href(n.value,query)} prefetch={false} scroll={false} aria-current={active===n.value ? "page" : undefined} className={`inline-flex min-h-11 shrink-0 items-center gap-2 whitespace-pre rounded border px-3 text-xs ${active===n.value ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground"}`}>{n.name}<span className="opacity-60">{n.count}</span></Link>)}</nav>
            <form action="/curated-links" method="GET" className="flex gap-2">
              {active && <input type="hidden" name="category" value={active}/>}
              <div className="relative min-w-0 flex-1"><Search size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"/><input key={query} type="search" name="q" defaultValue={query} placeholder="Find something interesting..." aria-label="Search curated links" className="h-12 w-full rounded border border-border bg-background pl-11 pr-3 text-base outline-none focus:border-primary md:text-sm"/></div>
              <button type="submit" className="rounded bg-foreground px-4 text-sm font-medium text-background hover:opacity-85">Search</button>
            </form>
            <div className="mt-4 flex items-center justify-between gap-3 border-b border-border pb-4"><div><p className="break-words whitespace-pre-wrap text-sm font-medium">{active || "All resources"}</p><p className="mt-1 text-xs text-muted-foreground">{filtered.length} {filtered.length===1 ? "resource" : "resources"}</p></div>{(active || query) && <Link href="/curated-links" prefetch={false} scroll={false} className="inline-flex min-h-10 shrink-0 items-center gap-1 text-xs text-muted-foreground"><X size={14}/> Clear filters</Link>}</div>
            {surprise && <SurpriseResource resource={surprise} nextHref={alternatives.length ? nextHref : undefined} dismissHref={href(active,query)} />}
            {visible.length ? visible.map(group => <section key={group.name} className="pb-5 pt-6"><div className="mb-3 flex items-end justify-between gap-3"><div className="min-w-0"><p className="mb-2 text-[10px] uppercase tracking-[.16em] text-muted-foreground">{String(group.index+1).padStart(2,"0")} / Collection</p><h2 className="break-words whitespace-pre-wrap font-serif text-[26px] leading-tight tracking-tight md:text-[30px]">{group.name}</h2></div><span className="shrink-0 text-xs text-muted-foreground">{group.links.length} {group.links.length===1 ? "link" : "links"}</span></div><div className="grid grid-cols-1 gap-x-8 border-t border-border xl:grid-cols-2">{group.links.map(resource => <ResourceRow key={resource.id} resource={resource}/>)}</div></section>) : <div className="py-20 text-center">{error ? <CircleAlert size={30} className="mx-auto mb-4 text-muted-foreground"/> : <FolderOpen size={30} className="mx-auto mb-4 text-muted-foreground"/>}<h2 className="font-serif text-3xl">{error ? "The collection is unavailable." : resources.length ? "Nothing quite matches." : "Nothing bookmarked yet."}</h2><p className="mt-3 text-sm text-muted-foreground">{error ? "Please try reloading the collection." : resources.length ? "Try another search or category." : "New discoveries will appear here."}</p>{(error || resources.length>0) && <Link href="/curated-links" prefetch={false} className="mt-5 inline-flex min-h-11 items-center rounded border border-border px-4 text-sm">{error ? "Reload collection" : "View all resources"}</Link>}</div>}
          </div>
        </div>
        <section className="grid items-center gap-6 border-t border-border py-10 md:py-14 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[.18em] text-muted-foreground">A note from the curator</p>
            <h2 className="font-serif text-3xl leading-tight tracking-tight md:text-[40px]">Stay curious.<span className="block italic text-muted-foreground">The internet is bigger than your feed.</span></h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">There are still remarkable ideas, independent thinkers and fascinating corners of the internet waiting to be discovered.</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href="/blog" className="inline-flex min-h-12 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background hover:opacity-85">Read my journal <ArrowUpRight size={15}/></Link>
            <Link href="/books" className="inline-flex min-h-12 items-center gap-2 rounded-md border border-border px-5 text-sm hover:bg-muted">Explore my bookshelf <ArrowUpRight size={15}/></Link>
          </div>
        </section>
        <div className="flex items-center gap-2 border-t border-border py-5 text-xs text-muted-foreground"><Bookmark size={13}/> A continuously evolving collection.</div>
      </div>
    </main>
    <Footer/>
  </div>
}
