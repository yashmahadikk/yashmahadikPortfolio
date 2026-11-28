
import Link from "next/link"
import {
  ArrowUpRight,
  ArrowDown,
  Search,
  X,
  Layers,
  Globe,
} from "lucide-react"

import { createClient } from "@/lib/supabase/server"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Tools & Software | Yash Mahadik",
  description:
    "A personal collection of software for product management, artificial intelligence, design, development and productivity.",
}

export const dynamic = "force-dynamic"

/* =====================================================
   TYPES
===================================================== */

type Tool = {
  name: string
  description: string
  category: string
  website: string
  logo: string
  suggested?: boolean
}

type DatabaseTool = {
  id: string | number
  name: string
  description?: string | null
  category?: string | null
  order_position?: number | null
  website?: string | null
  website_url?: string | null
  url?: string | null
  logo_url?: string | null
  icon_url?: string | null
}

type SearchParams = {
  q?: string | string[]
  category?: string | string[]
}

const categories = [
  "Product Planning & Documentation",
  "Designing & Prototyping",
  "Project Management & Agile Delivery",
  "Analytics & Insights",
  "User Research & Feedback",
  "Collaboration & Communication",
  "Product Marketing & GTM",
  "AI & Language Models",
  "Development & Infrastructure",
  "Automation & AI Engineering",
]

/* =====================================================
   TOOL DIRECTORY

   Format:
   Name | Website | Logo identifier | Description

   h: Dashboard Icons
   g: SVG Logos
   s: Simple Icons

   Blank logo identifier:
   Use the product website's favicon.
===================================================== */

const directory: {
  category: string
  existing: string[]
  additions: string[]
}[] = [

  /* 01 — PRODUCT PLANNING */

  {
    category: categories[0],

    existing: [
      "Notion|notion.com|g:notion-icon|All-in-one workspace for notes, docs, wikis and project management.",
      "Confluence|atlassian.com/software/confluence|g:confluence|Team workspace for knowledge sharing and collaboration.",
      "Google Docs|docs.google.com|h:google-docs|Online word processor for collaborative document editing.",
      "Google Slides|slides.google.com|h:google-slides|Cloud-based presentation software.",
      "ChatGPT|chatgpt.com|h:chatgpt|Conversational AI for drafting, research and brainstorming.",
      "NotebookLM|notebooklm.google.com|h:notebook-lm|AI-first notebook for synthesizing complex documents.",
      "Gemini|gemini.google.com|g:google-gemini-icon|Multimodal AI assistant for text, code and planning.",
      "Claude|claude.ai|g:claude-icon|AI assistant for reasoning, writing and document analysis.",
      "Jasper AI|jasper.ai||AI writing copilot for marketing and product content.",
      "Coda|coda.io|g:coda-icon|A platform that brings words, data and teams together.",
    ],

    additions: [
      "Productboard|productboard.com|g:productboard-icon|Product discovery, prioritization and roadmapping.",
      "Aha!|aha.io|g:aha|Product strategy, roadmaps and feature planning.",
      "Craft|craft.do||Structured documents and personal knowledge management.",
      "Obsidian|obsidian.md|g:obsidian-icon|Connected notes and personal knowledge graphs.",
      "Microsoft Word|microsoft.com/microsoft-365/word|h:microsoft-word|Professional document creation and editing.",
      "PowerPoint|microsoft.com/microsoft-365/powerpoint|h:microsoft-powerpoint|Presentations, storytelling and business communication.",
    ],
  },

  /* 02 — DESIGN & PROTOTYPING */

  {
    category: categories[1],

    existing: [
      "Figma|figma.com|g:figma|Collaborative interface design and prototyping.",
      "Draw.io|draw.io|h:draw-io|Flowcharts, diagrams and system architecture.",
      "Moqups|moqups.com|s:moqups|Wireframes, mockups and interface concepts.",
      "Napkin AI|napkin.ai||Transform text and ideas into visual diagrams.",
      "Lovable|lovable.dev|h:lovable|Rapid AI-assisted application development.",
      "Replit|replit.com|g:replit-icon|Browser-based development with AI coding assistance.",
      "Bolt.New|bolt.new|h:boltnew|AI-powered full-stack application development.",
      "Magic Patterns|magicpatterns.com||Generate interface components and product prototypes.",
      "Google AI Studio|aistudio.google.com|g:google-aistudio|Prototype applications using Google's generative models.",
      "Project IDX|firebase.studio|h:firebase|AI-assisted development workspace, subsequently renamed Firebase Studio.",
      "v0 by Vercel|v0.app|g:v0|Generate and iterate on interfaces using natural language.",
      "Uizard|uizard.io||AI-assisted UI design and rapid wireframing.",
      "Galileo AI|usegalileo.ai||Generative interface design and editable design concepts.",
      "Cursor|cursor.com|g:cursor-icon|AI-first code editor for assisted programming.",
    ],

    additions: [
      "Canva|canva.com||Visual communication and graphic design.",
      "Framer|framer.com|g:framer|Design and publish interactive websites.",
      "Penpot|penpot.app|g:penpot-icon|Open-source interface design and prototyping.",
      "Excalidraw|excalidraw.com|h:excalidraw|Hand-drawn diagrams and collaborative whiteboards.",
      "Google Stitch|stitch.withgoogle.com||AI-generated interface designs and prototypes.",
      "ProtoPie|protopie.io||Advanced interactive prototypes without traditional coding.",
    ],
  },

  /* 03 — PROJECT MANAGEMENT */

  {
    category: categories[2],

    existing: [
      "Atlassian Jira|atlassian.com/software/jira|g:jira|Issue tracking and agile project management.",
      "Trello|trello.com|g:trello|Visual boards for organizing projects and tasks.",
      "Zoho Projects|zoho.com/projects||Cloud-based project planning and tracking.",
      "Zoho Sprints|zoho.com/sprints||Agile project management for scrum teams.",
      "Linear|linear.app|g:linear-icon|Product development and issue management for software teams.",
      "Motion|usemotion.com||AI-assisted scheduling and project management.",
      "Asana|asana.com|g:asana-icon|Organize, track and coordinate team work.",
      "ClickUp|clickup.com|g:clickup-icon|All-in-one productivity and work management platform.",
    ],

    additions: [
      "Basecamp|basecamp.com|g:basecamp-icon|Team projects, communication and coordination.",
      "Monday.com|monday.com|g:monday-icon|Customizable workflows and project management.",
      "Airtable|airtable.com|g:airtable|Flexible databases for product and business workflows.",
      "Teamwork|teamwork.com|g:teamwork-icon|Project delivery and resource management.",
      "Wrike|wrike.com||Cross-functional planning and work management.",
      "Microsoft Planner|planner.cloud.microsoft||Task organization and team planning.",
    ],
  },

  /* 04 — ANALYTICS */

  {
    category: categories[3],

    existing: [
      "Google Analytics|analytics.google.com|g:google-analytics|Website traffic and user behavior analytics.",
      "Zoho Analytics|zoho.com/analytics||Self-service business intelligence and analytics.",
      "Mixpanel|mixpanel.com|g:mixpanel|Product behavior, funnels and conversion analytics.",
      "Hotjar|hotjar.com|g:hotjar-icon|Heatmaps, session recordings and behavioral insights.",
      "Amplitude|amplitude.com|g:amplitude-icon|User journeys, retention and product analytics.",
      "PostHog|posthog.com|g:posthog-icon|Product analytics, experiments and feature flags.",
      "Julius AI|julius.ai||AI-assisted spreadsheet analysis and visualizations.",
      "Polymer Search|polymersearch.com||Convert spreadsheet data into interactive dashboards.",
    ],

    additions: [
      "Microsoft Excel|microsoft.com/microsoft-365/excel|h:microsoft-excel|Financial modeling, analysis and data manipulation.",
      "Google Sheets|sheets.google.com|h:google-sheets|Collaborative spreadsheets and lightweight analysis.",
      "Power BI|powerbi.microsoft.com|g:microsoft-power-bi|Business intelligence and interactive reporting.",
      "Tableau|tableau.com|g:tableau-icon|Visual analytics and business dashboards.",
      "Metabase|metabase.com|g:metabase|Accessible SQL analytics and reporting.",
      "Looker Studio|lookerstudio.google.com|g:google-data-studio|Interactive dashboards and data reporting.",
    ],
  },

  /* 05 — USER RESEARCH */

  {
    category: categories[4],

    existing: [
      "SurveyMonkey|surveymonkey.com|h:surveymonkey|Collect structured user feedback through surveys.",
      "Google Forms|forms.google.com|h:google-forms|Create surveys, questionnaires and feedback forms.",
      "Kraftful|kraftful.com||AI-assisted analysis of product feedback and reviews.",
      "Dovetail|dovetail.com|g:dovetail-icon|Customer research and qualitative data analysis.",
      "Sprig|sprig.com||In-product user research and experience insights.",
      "Looppanel|looppanel.com||Research interview analysis and insight synthesis.",
      "Synthetic Users|syntheticusers.com||Simulated personas for exploratory product research.",
    ],

    additions: [
      "Maze|maze.co|s:maze|Usability testing and product discovery.",
      "UserTesting|usertesting.com||Collect human feedback on product experiences.",
      "Typeform|typeform.com|g:typeform-icon|Interactive forms and conversational surveys.",
      "User Interviews|userinterviews.com||Recruit participants for research studies.",
      "Optimal Workshop|optimalworkshop.com||Information architecture and usability research.",
      "Qualtrics|qualtrics.com|s:qualtrics|Experience management and advanced research surveys.",
    ],
  },

  /* 06 — COLLABORATION */

  {
    category: categories[5],

    existing: [
      "Slack|slack.com|g:slack-icon|Workplace messaging and team collaboration.",
      "Microsoft Teams|teams.microsoft.com|g:microsoft-teams|Meetings, messaging and workplace collaboration.",
      "Google Meet|meet.google.com|g:google-meet-2020|Video meetings and remote collaboration.",
      "Zoho Cliq|zoho.com/cliq||Team messaging and communication.",
      "Zoom|zoom.us|g:zoom-icon|Video conferencing and online meetings.",
      "Miro|miro.com|g:miro-icon|Collaborative visual thinking and whiteboards.",
      "FigJam|figma.com/figjam|g:figma|Digital whiteboarding and collaborative ideation.",
      "Mural|mural.co|s:mural|Visual workshops and team collaboration.",
      "Fireflies|fireflies.ai||AI meeting transcription and note-taking.",
      "Otter|otter.ai|g:otter-ai|Automated meeting notes and audio transcription.",
      "Google Workspace Labs|workspace.google.com||Explore experimental AI productivity features.",
      "Fathom|fathom.video||Meeting recording, transcription and summaries.",
      "Read AI|read.ai||Meeting insights, summaries and transcripts.",
    ],

    additions: [
      "Discord|discord.com|g:discord-icon|Community communication and collaboration.",
      "Google Drive|drive.google.com|g:google-drive-2020|Cloud storage and collaborative file management.",
      "Dropbox|dropbox.com|g:dropbox|File sharing, storage and synchronization.",
      "OneDrive|onedrive.live.com|g:microsoft-onedrive|Cloud file storage and document access.",
      "Krisp|krisp.ai||AI-powered audio enhancement and meeting assistance.",
      "tl;dv|tldv.io||Meeting transcription and searchable video recordings.",
    ],
  },

  /* 07 — PRODUCT MARKETING */

  {
    category: categories[6],

    existing: [
      "Zoho Desk|zoho.com/desk|h:zoho-desk|Customer service and help desk management.",
      "Mailchimp|mailchimp.com|g:mailchimp-icon|Email marketing and campaign automation.",
      "Clueso|clueso.io||AI-assisted product documentation and training videos.",
      "Storylane|storylane.io||Interactive product demonstrations.",
      "Gamma|gamma.app||AI-assisted presentations, documents and webpages.",
      "Loom|loom.com|g:loom-icon|Screen recordings and asynchronous video communication.",
      "Clipchamp|clipchamp.com||Browser-based video editing and content creation.",
      "Synthesia|synthesia.io||AI avatar videos and text-to-video creation.",
      "ElevenLabs|elevenlabs.io|g:elevenlabs-icon|AI-generated speech and voice experiences.",
      "Mutiny|mutinyhq.com||Personalized B2B website experiences.",
    ],

    additions: [
      "HubSpot|hubspot.com|g:hubspot|CRM, marketing and sales automation.",
      "Saleshandy|saleshandy.com||Cold email outreach and lead generation.",
      "Apollo.io|apollo.io||Sales intelligence and prospect discovery.",
      "Intercom|intercom.com|g:intercom-icon|Customer communication and AI-assisted support.",
      "Pendo|pendo.io||Product adoption, analytics and in-app guidance.",
      "Appcues|appcues.com||Product onboarding and user engagement experiences.",
    ],
  },

  /* 08 — ARTIFICIAL INTELLIGENCE */

  {
    category: categories[7],

    existing: [],

    additions: [
      "Perplexity|perplexity.ai|g:perplexity-icon|AI-powered research and information discovery.",
      "Grok|grok.com|h:grok|Conversational AI and research assistance.",
      "DeepSeek|deepseek.com|g:deepseek-icon|AI reasoning, coding and language models.",
      "Le Chat|chat.mistral.ai|g:mistral-ai-icon|Mistral's conversational AI assistant.",
      "Poe|poe.com|s:poe|Explore multiple AI models in one interface.",
      "Hugging Face|huggingface.co|g:hugging-face-icon|Discover, evaluate and share machine learning models.",
      "Ollama|ollama.com|g:ollama|Run language models locally.",
      "OpenRouter|openrouter.ai|g:openrouter-icon|Unified access to multiple language model providers.",
      "Codex|chatgpt.com/codex|g:codex|AI-powered software engineering workflows.",
      "Claude Code|claude.com/product/claude-code|g:claude-code|Agentic coding and software development assistance.",
    ],
  },

  /* 09 — DEVELOPMENT */

  {
    category: categories[8],

    existing: [],

    additions: [
      "GitHub|github.com|g:github-icon|Version control and collaborative software development.",
      "GitLab|gitlab.com|g:gitlab-icon|Source control and software delivery workflows.",
      "Visual Studio Code|code.visualstudio.com|h:visual-studio-code|Extensible code editor for software development.",
      "Supabase|supabase.com|g:supabase-icon|PostgreSQL database, authentication and backend infrastructure.",
      "Vercel|vercel.com|g:vercel-icon|Web application hosting and deployment.",
      "Netlify|netlify.com|g:netlify-icon|Frontend hosting and web deployment.",
      "Docker|docker.com|g:docker-icon|Containerized application development.",
      "Postman|postman.com|g:postman-icon|API development, testing and documentation.",
      "Railway|railway.com|g:railway|Cloud application and database hosting.",
      "Firebase|firebase.google.com|g:firebase-icon|Application backend and development services.",
    ],
  },

  /* 10 — AUTOMATION & AI ENGINEERING */

  {
    category: categories[9],

    existing: [],

    additions: [
      "n8n|n8n.io|g:n8n-icon|Workflow automation and AI agent orchestration.",
      "Zapier|zapier.com|g:zapier|Connect software applications and automate workflows.",
      "Make|make.com|s:make|Visual automation and application integrations.",
      "Pipedream|pipedream.com|g:pipedream|Developer-oriented workflows and integrations.",
      "Retool|retool.com|g:retool-icon|Build internal tools and operational applications.",
      "Power Automate|powerautomate.microsoft.com|h:microsoft-power-automate|Automate business processes and repetitive tasks.",
      "LangChain|langchain.com|g:langchain-icon|Framework for developing language-model applications.",
      "Langfuse|langfuse.com|g:langfuse-icon|LLM observability, tracing and evaluation.",
      "LangSmith|smith.langchain.com||AI application debugging and evaluation.",
      "Dify|dify.ai|g:dify|Visual platform for LLM applications and AI workflows.",
    ],
  },
]

/* =====================================================
   BRAND LOGO SOURCES
===================================================== */

const LOGO_SOURCES = {
  h: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons@main/svg",
  g: "https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos",
  s: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons",
}

function safeUrl(value?: string | null): string {
  if (!value?.trim()) return ""

  try {
    const url = new URL(
      /^https?:\/\//i.test(value)
        ? value
        : `https://${value}`
    )

    if (!["http:", "https:"].includes(url.protocol)) {
      return ""
    }

    if (url.username || url.password) {
      return ""
    }

    return url.toString()
  } catch {
    return ""
  }
}

function getLogoUrl(
  logo: string,
  website: string
): string {
  if (logo.startsWith("https://")) {
    return safeUrl(logo)
  }

  const [source, filename] = logo.split(":")

  if (
    filename &&
    /^[a-z0-9-]+$/i.test(filename) &&
    source in LOGO_SOURCES
  ) {
    return `${
      LOGO_SOURCES[
        source as keyof typeof LOGO_SOURCES
      ]
    }/${filename}.svg`
  }

  // Fallback for smaller or newer software brands.

  const url = safeUrl(website)

  if (!url) return ""

  try {
    const domain = new URL(url).hostname

    return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(
      domain
    )}&sz=128`
  } catch {
    return ""
  }
}

/* =====================================================
   DATA NORMALIZATION
===================================================== */

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
}

const aliases: Record<string, string> = {
  jira: "atlassianjira",
  v0: "v0byvercel",
  vercelv0: "v0byvercel",
  vscode: "visualstudiocode",
  excel: "microsoftexcel",
  msword: "microsoftword",
  microsoftpowerpoint: "powerpoint",
  figjam: "figjam",
  diagramsnet: "drawio",
  firebaseStudio: "projectidx",
  firebasestudio: "projectidx",
  bolt: "boltnew",
  claudeai: "claude",
  googleGemini: "gemini",
  googlegemini: "gemini",
  jasper: "jasperai",
  mistral: "lechat",
  mistralai: "lechat",
  msplanner: "microsoftplanner",
  microsoftpowerbi: "powerbi",
  microsoftonedrive: "onedrive",
  googleaistudio: "googleaistudio",
}

function toolKey(name: string) {
  const key = normalize(name)
  return aliases[key] || key
}

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase()
}

function parseTool(
  value: string,
  category: string,
  suggested = false
): Tool {
  const [
    name,
    website,
    logo,
    description,
  ] = value.split("|")

  return {
    name,
    website: safeUrl(website),
    logo,
    description,
    category,
    suggested,
  }
}

const existingTools = directory.flatMap(
  (group) =>
    group.existing.map((tool) =>
      parseTool(tool, group.category)
    )
)

const additionalTools = directory.flatMap(
  (group) =>
    group.additions.map((tool) =>
      parseTool(tool, group.category, true)
    )
)

const allKnownTools = [
  ...existingTools,
  ...additionalTools,
]

const knownToolMap = new Map(
  allKnownTools.map((tool) => [
    toolKey(tool.name),
    tool,
  ])
)

/* =====================================================
   SUPABASE INTEGRATION

   Preserve all existing database tools.

   New tools are merged for display only.
   No database writes or migrations.
===================================================== */

async function getTools(): Promise<{
  tools: Tool[]
  databaseError: boolean
}> {
  let records: DatabaseTool[] = []
  let databaseError = false

  try {
    const supabase = await createClient()
    const batchSize = 200

    let offset = 0

    while (true) {
      const { data, error } = await supabase
        .from("tools_software")
        .select("*")
        .order("order_position", {
          ascending: true,
          nullsFirst: false,
        })
        .order("id", {
          ascending: true,
        })
        .range(offset, offset + batchSize - 1)

      if (error) throw error

      const batch =
        (data || []) as DatabaseTool[]

      records.push(...batch)

      if (batch.length < batchSize) break

      offset += batchSize
    }

  } catch (error) {
    console.error(
      "Unable to load tools from Supabase:",
      error
    )

    databaseError = true
    records = []
  }

  const merged = new Map<string, Tool>()

  // Preserve the original 70 tools as a local fallback
  // if the database cannot be reached.

  if (databaseError) {
    existingTools.forEach((tool) => {
      merged.set(toolKey(tool.name), tool)
    })
  }

  // Supabase remains the source of truth for existing
  // tool names, descriptions and categories.

  for (const record of records) {
    if (!record.name?.trim()) continue

    const key = toolKey(record.name)
    const known = knownToolMap.get(key)

    const website =
      safeUrl(
        record.website_url ||
        record.website ||
        record.url
      ) ||
      known?.website ||
      ""

    const logo =
      safeUrl(
        record.logo_url ||
        record.icon_url
      ) ||
      known?.logo ||
      ""

    merged.set(key, {
      name: record.name,
      description:
        record.description ||
        known?.description ||
        "",

      category:
        record.category?.trim() ||
        known?.category ||
        "Other Tools",

      website,
      logo,
      suggested: false,
    })
  }

  // Add the expanded collection without duplicating
  // tools that already exist in Supabase.

  for (const tool of additionalTools) {
    const key = toolKey(tool.name)

    if (!merged.has(key)) {
      merged.set(key, tool)
    }
  }

  return {
    tools: [...merged.values()],
    databaseError,
  }
}

/* =====================================================
   SEARCH AND FILTER HELPERS
===================================================== */

function firstValue(
  value?: string | string[]
): string {
  return Array.isArray(value)
    ? value[0] || ""
    : value || ""
}

function filterHref(
  category: string,
  query: string
) {
  const params = new URLSearchParams()

  if (category && category !== "all") {
    params.set("category", category)
  }

  if (query) {
    params.set("q", query)
  }

  const search = params.toString()

  return search
    ? `/tools?${search}`
    : "/tools"
}

/* =====================================================
   BRAND LOGO COMPONENT
===================================================== */

function ToolLogo({
  tool,
}: {
  tool: Tool
}) {
  const logoUrl = getLogoUrl(
    tool.logo,
    tool.website
  )

  return (
    <div
      className="
        relative
        flex
        size-12
        shrink-0
        items-center
        justify-center
        overflow-hidden
        rounded-md
        border
        border-black/[0.06]
        bg-white
        sm:size-[52px]
      "
    >

      {logoUrl ? (

        /* White logo surfaces preserve the visibility
           of black brand symbols in dark mode. */

        <img
          src={logoUrl}
          alt={`${tool.name} logo`}
          width={34}
          height={34}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="size-8 object-contain sm:size-[34px]"
        />

      ) : (

        <span className="text-sm font-semibold text-neutral-500">
          {getInitials(tool.name)}
        </span>

      )}

    </div>
  )
}

/* =====================================================
   TOOL CARD
===================================================== */

function ToolCard({
  tool,
}: {
  tool: Tool
}) {
  const content = (
    <>

      {/* Brand identity */}

      <div className="flex items-start justify-between gap-2">

        <ToolLogo tool={tool} />

        {tool.website && (
          <ArrowUpRight
            aria-hidden="true"
            size={15}
            className="
              mt-1
              shrink-0
              text-muted-foreground/60
              transition-all
              duration-200
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
              group-hover:text-foreground
              motion-reduce:transform-none
            "
          />
        )}

      </div>

      {/* Software name and description */}

      <div className="min-w-0">

        <h3
          className="
            break-words
            text-sm
            font-semibold
            leading-snug
            text-foreground
            transition-colors
            group-hover:text-primary
            sm:text-[15px]
            lg:text-base
          "
        >
          {tool.name}
        </h3>

        {tool.description && (
          <p
            className="
              mt-2
              text-xs
              leading-relaxed
              text-muted-foreground
              sm:text-[13px]
            "
          >
            {tool.description}
          </p>
        )}

      </div>

    </>
  )

  const className = `
    group
    flex
    h-full
    min-h-[150px]
    min-w-0
    flex-col
    gap-4
    rounded-md
    border
    border-border
    bg-background
    p-3.5
    text-left
    transition-colors
    duration-200
    hover:border-primary/40
    hover:bg-muted/25
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-ring
    sm:p-4
    lg:p-5
  `

  if (!tool.website) {
    return (
      <article className={className}>
        {content}
      </article>
    )
  }

  return (
    <a
      href={tool.website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${tool.name} website`}
      className={className}
    >
      {content}
    </a>
  )
}

/* =====================================================
   COMPACT EDITORIAL HERO
===================================================== */

function ToolsHero({
  toolCount,
  categoryCount,
}: {
  toolCount: number
  categoryCount: number
}) {
  return (
    <section className="pb-6 pt-24 md:pb-8">

      <p
        className="
          mb-3
          flex
          items-center
          gap-2
          text-[10px]
          font-medium
          uppercase
          tracking-[0.18em]
          text-muted-foreground
          md:text-xs
        "
      >
        <Layers size={14} strokeWidth={1.5} />
        My Personal Stack / Tools & Software
      </p>

      <div
        className="
          grid
          items-end
          gap-5
          lg:grid-cols-[1.6fr_1fr]
          lg:gap-12
        "
      >

        {/* Editorial headline */}

        <div>

          <h1
            className="
              font-serif
              text-[36px]
              font-normal
              leading-[1.08]
              tracking-[-0.035em]
              sm:text-[46px]
              lg:text-[clamp(44px,4vw,60px)]
            "
          >
            Tools of the{" "}

            <span className="italic text-muted-foreground">
              trade.
            </span>
          </h1>

          <p
            className="
              mt-4
              max-w-xl
              text-sm
              leading-relaxed
              text-muted-foreground
              md:text-base
            "
          >
            The software behind the things I think,
            design, build and ship — alongside tools
            worth exploring.
          </p>

        </div>

        {/* Dynamic collection statistics */}

        <div className="flex items-center gap-6 lg:justify-end lg:gap-8">

          <div>

            <p className="font-serif text-3xl tabular-nums md:text-4xl">
              {toolCount}
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
              Tools
            </p>

          </div>

          <div className="h-10 w-px bg-border" />

          <div>

            <p className="font-serif text-3xl tabular-nums md:text-4xl">
              {categoryCount}
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
              Categories
            </p>

          </div>

        </div>

      </div>

      <a
        href="#toolkit"
        className="
          mt-4
          inline-flex
          min-h-11
          items-center
          gap-2
          text-xs
          text-muted-foreground
          hover:text-foreground
        "
      >
        Explore the toolkit
        <ArrowDown size={13} />
      </a>

    </section>
  )
}

/* =====================================================
   SEARCH BAR AND CATEGORY SELECTOR
===================================================== */

function SearchControls({
  query,
  activeCategory,
  availableCategories,
  categoryCounts,
  total,
}: {
  query: string
  activeCategory: string
  availableCategories: string[]
  categoryCounts: Map<string, number>
  total: number
}) {
  return (
    <section
      id="toolkit"
      className="scroll-mt-24 border-y border-border py-4"
    >

      <form
        action="/tools"
        method="GET"
        className="
          grid
          grid-cols-[minmax(0,1fr)_auto]
          gap-3
          md:grid-cols-[minmax(0,1fr)_260px_auto]
        "
      >

        {/* Search field */}

        <div className="relative min-w-0">

          <Search
            size={17}
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-muted-foreground
            "
          />

          <input
            type="search"
            name="q"
            defaultValue={query}
            placeholder="Search tools, software, categories..."
            aria-label="Search tools and software"
            className="
              h-12
              w-full
              rounded-md
              border
              border-border
              bg-background
              pl-11
              pr-4
              text-base
              text-foreground
              outline-none
              placeholder:text-muted-foreground
              focus:border-primary
              focus:ring-1
              focus:ring-primary/20
              md:text-sm
            "
          />

        </div>

        {/* Category selector */}

        <select
          name="category"
          aria-label="Filter by category"
          defaultValue={activeCategory}
          className="
            col-span-2
            row-start-2
            h-12
            w-full
            min-w-0
            rounded-md
            border
            border-border
            bg-background
            px-3
            text-sm
            text-foreground
            outline-none
            focus:border-primary
            md:col-span-1
            md:row-start-1
          "
        >

          <option value="all">
            All categories ({total})
          </option>

          {availableCategories.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category} ({categoryCounts.get(category)})
            </option>
          ))}

        </select>

        <button
          type="submit"
          className="
            col-start-2
            row-start-1
            inline-flex
            h-12
            items-center
            justify-center
            gap-2
            rounded-md
            bg-foreground
            px-4
            text-sm
            font-medium
            text-background
            transition-opacity
            hover:opacity-85
            md:col-start-3
            md:px-6
          "
        >
          Search
        </button>

      </form>

      {/* Scrollable category navigation */}

      <nav
        aria-label="Tool categories"
        className="
          mt-3
          flex
          items-center
          gap-6
          overflow-x-auto
          scrollbar-none
        "
      >

        <Link
          href={filterHref("all", query)}
          scroll={false}
          aria-current={
            activeCategory === "all"
              ? "page"
              : undefined
          }
          className={`
            inline-flex
            min-h-11
            shrink-0
            items-center
            gap-2
            whitespace-nowrap
            border-b-2
            text-xs
            transition-colors
            md:text-sm
            ${
              activeCategory === "all"
                ? "border-foreground font-medium text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }
          `}
        >
          All tools

          <span className="text-[10px] tabular-nums opacity-60">
            {total}
          </span>
        </Link>

        {availableCategories.map((category) => (

          <Link
            key={category}
            href={filterHref(category, query)}
            scroll={false}
            aria-current={
              activeCategory === category
                ? "page"
                : undefined
            }
            className={`
              inline-flex
              min-h-11
              shrink-0
              items-center
              gap-2
              whitespace-nowrap
              border-b-2
              text-xs
              transition-colors
              md:text-sm
              ${
                activeCategory === category
                  ? "border-foreground font-medium text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }
            `}
          >

            {category}

            <span className="text-[10px] tabular-nums opacity-60">
              {categoryCounts.get(category)}
            </span>

          </Link>
        ))}

      </nav>

    </section>
  )
}

/* =====================================================
   CATEGORY SECTION

   Mobile:        2 columns
   Tablet:        3 columns
   Desktop:       4 columns
   Large desktop: 5 columns
===================================================== */

function CategorySection({
  category,
  tools,
  index,
}: {
  category: string
  tools: Tool[]
  index: number
}) {
  return (
    <section className="border-b border-border py-7 md:py-9">

      {/* Category heading */}

      <div className="mb-5 flex items-end justify-between gap-4">

        <div className="min-w-0">

          <p
            className="
              mb-2
              text-[10px]
              uppercase
              tracking-[0.16em]
              text-muted-foreground
            "
          >
            {String(index + 1).padStart(2, "0")}
            {" / THE TOOLKIT"}
          </p>

          <h2
            className="
              font-serif
              text-[24px]
              leading-tight
              tracking-tight
              md:text-[30px]
              lg:text-[34px]
            "
          >
            {category}
          </h2>

        </div>

        <span
          className="
            shrink-0
            pb-1
            text-xs
            tabular-nums
            text-muted-foreground
          "
        >
          {tools.length}{" "}
          {tools.length === 1 ? "tool" : "tools"}
        </span>

      </div>

      {/* Responsive software directory */}

      <div
        className="
          grid
          grid-cols-2
          gap-3
          md:grid-cols-3
          md:gap-4
          lg:grid-cols-4
          2xl:grid-cols-5
          2xl:gap-5
        "
      >

        {tools.map((tool) => (
          <ToolCard
            key={toolKey(tool.name)}
            tool={tool}
          />
        ))}

      </div>

    </section>
  )
}

/* =====================================================
   EMPTY SEARCH STATE
===================================================== */

function EmptyState() {
  return (
    <section
      className="
        flex
        flex-col
        items-center
        border-b
        border-border
        py-20
        text-center
      "
    >

      <Search
        size={34}
        strokeWidth={1.2}
        className="text-muted-foreground"
      />

      <h2 className="mt-5 font-serif text-3xl">
        Nothing quite matches.
      </h2>

      <p className="mt-3 text-sm text-muted-foreground">
        Try searching for another tool or category.
      </p>

      <Link
        href="/tools"
        className="
          mt-6
          inline-flex
          min-h-11
          items-center
          gap-2
          rounded-md
          border
          border-border
          px-5
          text-sm
          hover:bg-muted
        "
      >
        <X size={14} />
        Clear filters
      </Link>

    </section>
  )
}

/* =====================================================
   EDITORIAL CONCLUSION
===================================================== */

function ToolsConclusion() {
  return (
    <section
      className="
        grid
        items-center
        gap-8
        py-10
        lg:grid-cols-[1.5fr_1fr]
        lg:py-14
      "
    >

      <div>

        <p
          className="
            mb-3
            text-[10px]
            uppercase
            tracking-[0.18em]
            text-muted-foreground
          "
        >
          Beyond the software
        </p>

        <h2
          className="
            font-serif
            text-3xl
            leading-tight
            tracking-tight
            lg:text-[42px]
          "
        >
          Different tools.{" "}

          <span className="italic text-muted-foreground">
            One purpose.
          </span>
        </h2>

        <p
          className="
            mt-4
            max-w-xl
            text-sm
            leading-relaxed
            text-muted-foreground
          "
        >
          Technology is a means, not an end.
          The value lies in understanding problems,
          exploring possibilities and building
          something meaningful.
        </p>

      </div>

      <div
        className="
          flex
          flex-wrap
          items-center
          gap-3
          lg:justify-end
        "
      >

        <Link
          href="/work"
          className="
            inline-flex
            min-h-12
            items-center
            gap-2
            rounded-md
            bg-foreground
            px-5
            text-sm
            font-medium
            text-background
            hover:opacity-85
          "
        >
          See what I build
          <ArrowUpRight size={15} />
        </Link>

        <Link
          href="/case-studies"
          className="
            inline-flex
            min-h-12
            items-center
            gap-2
            rounded-md
            border
            border-border
            px-5
            text-sm
            hover:bg-muted
          "
        >
          Explore my research
          <ArrowUpRight size={15} />
        </Link>

      </div>

    </section>
  )
}

/* =====================================================
   MAIN TOOLS PAGE

   Complete single-file implementation.
===================================================== */

export default async function ToolsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {

  const params = await searchParams

  const { tools, databaseError } = await getTools()

  const query = firstValue(params.q).trim()

  const requestedCategory =
    firstValue(params.category) || "all"

  /* Dynamic category counts */

  const categoryCounts = new Map<string, number>()

  for (const tool of tools) {
    categoryCounts.set(
      tool.category,
      (categoryCounts.get(tool.category) || 0) + 1
    )
  }

  /* Retain the original category order while
     accommodating any future database categories. */

  const availableCategories = [
    ...categories.filter(
      (category) => categoryCounts.has(category)
    ),

    ...Array.from(categoryCounts.keys()).filter(
      (category) => !categories.includes(category)
    ),
  ]

  const activeCategory =
    availableCategories.includes(requestedCategory)
      ? requestedCategory
      : "all"

  /* Search across tool names, descriptions,
     categories and website addresses. */

  const searchTerms = query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)

  const filteredTools = tools.filter((tool) => {

    const matchesCategory =
      activeCategory === "all" ||
      tool.category === activeCategory

    const searchableText = [
      tool.name,
      tool.description,
      tool.category,
      tool.website,
    ]
      .join(" ")
      .toLowerCase()

    const matchesSearch = searchTerms.every(
      (term) => searchableText.includes(term)
    )

    return matchesCategory && matchesSearch

  })

  const groupedTools = availableCategories

    .map((category, index) => ({
      category,
      index,
      tools: filteredTools.filter(
        (tool) => tool.category === category
      ),
    }))

    .filter((group) => group.tools.length > 0)

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">

      <Navigation />

      <main className="min-w-0 flex-1">

        {/* 1600px wide layout — same as Work
            and Case Studies. */}

        <div
          data-layout="tools-wide-v1"
          className="
            mx-auto
            w-full
            max-w-[1600px]
            px-5
            md:px-8
            lg:px-12
            2xl:px-16
          "
        >

          <ToolsHero
            toolCount={tools.length}
            categoryCount={availableCategories.length}
          />

          <SearchControls
            query={query}
            activeCategory={activeCategory}
            availableCategories={availableCategories}
            categoryCounts={categoryCounts}
            total={tools.length}
          />

          {/* Dynamic search result information */}

          <div className="flex min-h-12 flex-wrap items-center justify-between gap-3">

            <p className="text-xs text-muted-foreground">

              {filteredTools.length === tools.length
                ? `${tools.length} tools across ${availableCategories.length} categories`
                : `Showing ${filteredTools.length} of ${tools.length} tools`
              }

            </p>

            {(query || activeCategory !== "all") && (

              <Link
                href="/tools"
                className="
                  inline-flex
                  min-h-11
                  items-center
                  gap-2
                  text-xs
                  text-muted-foreground
                  hover:text-foreground
                "
              >
                <X size={13} />
                Clear filters
              </Link>

            )}

          </div>

          {/* Graceful fallback if Supabase is unavailable */}

          {databaseError && (

            <div
              role="status"
              className="
                mb-4
                flex
                flex-wrap
                items-center
                justify-between
                gap-3
                border-y
                border-border
                py-3
                text-xs
                text-muted-foreground
              "
            >

              <span>
                Showing the saved toolkit.
                Live database entries could not be loaded.
              </span>

              <Link
                href={filterHref(activeCategory, query)}
                className="underline underline-offset-4"
              >
                Reload collection
              </Link>

            </div>

          )}

          {/* Actual tools immediately after the hero */}

          {groupedTools.length > 0 ? (

            groupedTools.map((group) => (

              <CategorySection
                key={group.category}
                category={group.category}
                tools={group.tools}
                index={group.index}
              />

            ))

          ) : (

            <EmptyState />

          )}

          {/* Collection conclusion */}

          <ToolsConclusion />

          <div className="flex items-center gap-2 border-t border-border py-5 text-xs text-muted-foreground">

            <Globe size={14} strokeWidth={1.5} />

            <span>
              An evolving collection of software,
              technologies and ideas.
            </span>

          </div>

        </div>

      </main>

      <Footer />

    </div>
  )
}
