
"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

import {
  ArrowUpRight,
  Search,
  X,
  ChevronDown,
  PenTool,
  BookOpen,
  RefreshCw,
} from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { createClient } from "@/lib/supabase/client"

/*
 * Replace app/blog/page.tsx only.
 *
 * All articles are loaded from Supabase.
 * Newest database entry appears first.
 * Automatic keyword-based categories.
 * Original thumbnails remain large and uncropped.
 * No database changes or additional dependencies.
 */

/* =========================================================
   TYPES
========================================================= */

interface BlogPost {
  id: string | number
  title: string
  slug: string
  excerpt: string | null
  content: string | null
  thumbnail_url: string | null
  published_date: string | null
  created_at?: string | null
}

type Category =
  | "all"
  | "product"
  | "ai"
  | "business"
  | "reflections"

type ArticleCategory = Exclude<Category, "all">

/* =========================================================
   AUTOMATIC ARTICLE CLASSIFICATION
========================================================= */

const categories: {
  id: Category
  label: string
}[] = [
  { id: "all", label: "All articles" },
  { id: "product", label: "Product" },
  { id: "ai", label: "Artificial Intelligence" },
  { id: "business", label: "Business" },
  { id: "reflections", label: "Reflections" },
]

const categoryColors: Record<ArticleCategory, string> = {
  product: "#86A397",
  ai: "#819BB8",
  business: "#B5A078",
  reflections: "#A395B3",
}

const keywords: Record<ArticleCategory, string[]> = {
  product: [
    "product management",
    "product manager",
    "product thinking",
    "product strategy",
    "product discovery",
    "product development",
    "product design",
    "product sense",
    "product led growth",
    "product analytics",
    "user experience",
    "user research",
    "customer experience",
    "ux",
    "ui ux",
    "roadmap",
    "prioritization",
    "prioritisation",
    "wireframe",
    "wireframes",
    "prototype",
    "prototyping",
    "usability",
    "feature",
    "features",
    "onboarding",
    "activation",
    "retention",
    "engagement",
    "user journey",
    "product teardown",
    "a b testing",
    "north star metric",
    "prd",
  ],

  ai: [
    "artificial intelligence",
    "ai",
    "generative ai",
    "genai",
    "agentic ai",
    "ai agent",
    "ai agents",
    "machine learning",
    "deep learning",
    "neural network",
    "large language model",
    "llm",
    "llms",
    "rag",
    "chatgpt",
    "claude",
    "gemini",
    "openai",
    "anthropic",
    "automation",
    "automated",
    "automating",
    "voice ai",
    "computer vision",
    "prompt engineering",
    "prompting",
    "inference",
    "multimodal",
    "chatbot",
    "foundation model",
    "embeddings",
    "natural language processing",
  ],

  business: [
    "business",
    "business model",
    "business strategy",
    "revenue",
    "profit",
    "profitability",
    "economics",
    "economy",
    "finance",
    "financial",
    "investment",
    "investors",
    "venture capital",
    "fundraising",
    "startup",
    "startups",
    "entrepreneurship",
    "founder",
    "founders",
    "pricing",
    "market",
    "market analysis",
    "market entry",
    "go to market",
    "gtm",
    "marketing",
    "sales",
    "monetization",
    "monetisation",
    "unit economics",
    "gross margin",
    "cash flow",
    "valuation",
    "capital allocation",
  ],

  reflections: [
    "reflection",
    "reflections",
    "philosophy",
    "philosophical",
    "personal experience",
    "personal journey",
    "life lessons",
    "lessons learned",
    "what i learned",
    "what i believe",
    "my perspective",
    "my thoughts",
    "human nature",
    "curiosity",
    "purpose",
    "meaning",
    "mindset",
    "wisdom",
    "happiness",
    "identity",
    "creativity",
    "self improvement",
    "personal growth",
    "perspective",
    "human side",
    "human touch",
    "human judgement",
    "human judgment",
  ],
}

/* =========================================================
   TEXT AND DATE HELPERS
========================================================= */

function plainText(value: string | null | undefined) {
  return String(value || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function normalizeText(value: string | null | undefined) {
  return plainText(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
}

function hasKeyword(text: string, keyword: string) {
  const normalizedKeyword = normalizeText(keyword)

  return ` ${text} `.includes(
    ` ${normalizedKeyword} `
  )
}

/*
 * Title matches receive the highest weight.
 * Excerpt matches receive medium weight.
 * Full article matches receive the lowest weight.
 *
 * Repeating a keyword many times does not inflate its score.
 * Articles can belong to multiple categories.
 */

function classifyArticle(
  post: BlogPost
): ArticleCategory[] {
  const title = normalizeText(post.title)
  const excerpt = normalizeText(post.excerpt)
  const content = normalizeText(post.content)

  const scores = (
    Object.keys(keywords) as ArticleCategory[]
  ).map((category) => {
    let titleScore = 0
    let excerptScore = 0
    let contentScore = 0

    for (const keyword of keywords[category]) {
      const phraseWeight =
        keyword.includes(" ") ? 1.5 : 1

      if (hasKeyword(title, keyword)) {
        titleScore += 6 * phraseWeight
      }

      if (hasKeyword(excerpt, keyword)) {
        excerptScore += 3 * phraseWeight
      }

      if (hasKeyword(content, keyword)) {
        contentScore += phraseWeight
      }
    }

    return {
      category,
      score:
        titleScore +
        excerptScore +
        Math.min(contentScore, 6),
    }
  })

  const highestScore = Math.max(
    0,
    ...scores.map((entry) => entry.score)
  )

  return scores
    .filter(
      (entry) =>
        entry.score >= 5 &&
        entry.score >= highestScore * 0.35
    )
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.category)
}

function timestamp(value?: string | null) {
  if (!value) return 0

  const time = Date.parse(value)

  return Number.isFinite(time) ? time : 0
}

/*
 * Use created_at to identify the most recently added article.
 * Fall back to published_date when created_at is unavailable.
 */

function addedTimestamp(post: BlogPost) {
  return (
    timestamp(post.created_at) ||
    timestamp(post.published_date)
  )
}

function newestFirst(a: BlogPost, b: BlogPost) {
  return (
    addedTimestamp(b) - addedTimestamp(a) ||
    timestamp(b.published_date) -
      timestamp(a.published_date) ||
    String(b.id).localeCompare(String(a.id))
  )
}

function formatDate(post: BlogPost) {
  const value =
    timestamp(post.published_date) ||
    timestamp(post.created_at)

  if (!value) return null

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(new Date(value))
}

function readingTime(post: BlogPost) {
  const content = plainText(post.content)

  if (!content) return null

  const words = content.split(/\s+/).length

  return Math.max(1, Math.ceil(words / 220))
}

/* =========================================================
   ORIGINAL CODED JOURNAL ILLUSTRATION
========================================================= */

function JournalIllustration() {
  return (
    <svg
      viewBox="0 0 260 170"
      className="h-auto w-full"
      role="img"
      aria-label="An editorial notebook and pencil"
    >
      {/* Technical dot pattern */}

      {Array.from({ length: 13 }).map((_, x) =>
        Array.from({ length: 8 }).map((_, y) => (
          <circle
            key={`${x}-${y}`}
            cx={15 + x * 19}
            cy={15 + y * 19}
            r=".7"
            fill="currentColor"
            opacity=".09"
          />
        ))
      )}

      {/* Notebook */}

      <g transform="rotate(-7 120 85)">
        <rect
          x="59"
          y="17"
          width="119"
          height="140"
          rx="4"
          fill="var(--background)"
          stroke="currentColor"
          strokeOpacity=".3"
        />

        <path
          d="M75 17 V157"
          stroke="currentColor"
          strokeOpacity=".15"
        />

        <text
          x="88"
          y="38"
          fontSize="8"
          letterSpacing="1.5"
          fill="currentColor"
          opacity=".55"
        >
          NOTES
        </text>

        {[63, 72, 59, 73, 46, 68, 57].map(
          (width, i) => (
            <rect
              key={i}
              x="88"
              y={51 + i * 13}
              width={width}
              height="2"
              rx="1"
              fill="currentColor"
              opacity=".19"
            />
          )
        )}
      </g>

      {/* Pencil */}

      <g transform="rotate(33 189 85)">
        <rect
          x="183"
          y="12"
          width="12"
          height="123"
          rx="2"
          fill="#B5A078"
          fillOpacity=".18"
          stroke="#B5A078"
        />

        <path
          d="M183 24 H195 M189 25 V135"
          stroke="#B5A078"
          strokeOpacity=".6"
        />

        <path
          d="M183 135 L189 154 L195 135Z"
          fill="#B5A078"
          fillOpacity=".3"
          stroke="#B5A078"
        />

        <path
          d="M186 145 L189 154 L192 145Z"
          fill="currentColor"
          opacity=".6"
        />
      </g>

      <text
        x="130"
        y="167"
        fontSize="7"
        letterSpacing="2"
        textAnchor="middle"
        fill="currentColor"
        opacity=".4"
      >
        OBSERVE. THINK. WRITE.
      </text>
    </svg>
  )
}

/* =========================================================
   FALLBACK ARTICLE COVER

   Used only when the original thumbnail is unavailable.
   The actual article title remains prominent.
========================================================= */

function FallbackCover({
  post,
  category,
}: {
  post: BlogPost
  category?: ArticleCategory
}) {
  const color = category
    ? categoryColors[category]
    : "#929B98"

  return (
    <div
      className="relative flex min-h-[180px] w-full items-center overflow-hidden rounded-md border border-border px-6 py-8 sm:min-h-[220px] sm:px-8"
      style={{
        backgroundColor: `${color}14`,
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 0.7px, transparent 0.7px)",
          backgroundSize: "17px 17px",
        }}
      />

      {/* Category-specific illustration */}

      <svg
        viewBox="0 0 200 180"
        className="absolute bottom-0 right-0 h-full w-[42%] opacity-40"
        aria-hidden="true"
      >
        {category === "ai" ? (
          <g stroke={color} fill="none">
            <path
              d="M100 26 L38 65 L58 130 L142 130 L162 65Z M38 65 L142 130 M58 130 L162 65 M100 26 V130"
              strokeDasharray="4 4"
            />

            {[
              [100, 26],
              [38, 65],
              [58, 130],
              [142, 130],
              [162, 65],
              [100, 89],
            ].map(([x, y], i) => (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="10"
                fill={color}
                fillOpacity=".25"
              />
            ))}
          </g>
        ) : category === "product" ? (
          <g stroke={color} fill="none">
            {[0, 1, 2].map((i) => (
              <g key={i}>
                <rect
                  x={13 + i * 61}
                  y="38"
                  width="49"
                  height="104"
                  rx="5"
                />

                <rect
                  x={20 + i * 61}
                  y="49"
                  width="35"
                  height="30"
                  rx="2"
                  fill={color}
                  fillOpacity=".18"
                />

                <path
                  d={`M${20 + i * 61} 91 h35 M${20 + i * 61} 102 h27 M${20 + i * 61} 113 h30`}
                />
              </g>
            ))}
          </g>
        ) : category === "business" ? (
          <g stroke={color}>
            <path
              d="M20 22 V149 H185"
              fill="none"
            />

            {[26, 43, 59, 83, 113].map((height, i) => (
              <rect
                key={i}
                x={31 + i * 30}
                y={149 - height}
                width="18"
                height={height}
                rx="2"
                fill={color}
                fillOpacity={0.2 + i * 0.12}
              />
            ))}
          </g>
        ) : (
          <g stroke={color} fill="none">
            {[22, 39, 56, 73].map((r) => (
              <circle
                key={r}
                cx="100"
                cy="90"
                r={r}
                strokeOpacity=".65"
              />
            ))}

            <text
              x="100"
              y="109"
              textAnchor="middle"
              fontSize="56"
              fontFamily="Georgia,serif"
              fill={color}
              stroke="none"
            >
              ?
            </text>
          </g>
        )}
      </svg>

      <div className="relative z-10 max-w-[78%]">
        <p className="mb-5 text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
          The personal journal
        </p>

        <p className="break-words font-serif text-2xl leading-tight tracking-tight sm:text-3xl lg:text-4xl">
          {post.title}
        </p>

        <p className="mt-6 text-[10px] uppercase tracking-widest text-muted-foreground">
          Yash Mahadik
        </p>
      </div>
    </div>
  )
}

/* =========================================================
   ARTICLE THUMBNAIL

   IMPORTANT:
   No fixed image height.
   No object-cover.
   No cropping of titles embedded in thumbnails.
========================================================= */

function ArticleCover({
  post,
  category,
  featured = false,
}: {
  post: BlogPost
  category?: ArticleCategory
  featured?: boolean
}) {
  const [imageFailed, setImageFailed] = useState(false)

  useEffect(() => {
    setImageFailed(false)
  }, [post.thumbnail_url])

  if (!post.thumbnail_url || imageFailed) {
    return (
      <FallbackCover
        post={post}
        category={category}
      />
    )
  }

  return (
    <div className="overflow-hidden rounded-md bg-muted/15">
      <img
        src={post.thumbnail_url}
        alt={`Article cover: ${post.title}`}
        loading={featured ? "eager" : "lazy"}
        decoding="async"
        onError={() => setImageFailed(true)}
        className="block h-auto w-full object-contain"
      />
    </div>
  )
}

/* =========================================================
   ARTICLE METADATA
========================================================= */

function ArticleMetadata({
  post,
}: {
  post: BlogPost
}) {
  const date = formatDate(post)
  const minutes = readingTime(post)

  return (
    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
      {date && <span>{date}</span>}

      {date && minutes !== null && (
        <span
          aria-hidden="true"
          className="size-0.5 rounded-full bg-muted-foreground/60"
        />
      )}

      {minutes !== null && (
        <span>{minutes} min read</span>
      )}
    </div>
  )
}

/* =========================================================
   ARTICLE CATEGORY LABELS

   These are generated automatically.
   They are never written back to Supabase.
========================================================= */

function ArticleCategories({
  values,
}: {
  values: ArticleCategory[]
}) {
  if (!values.length) return null

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
      {values.map((category) => (
        <span
          key={category}
          className="inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.1em] text-muted-foreground"
        >
          <span
            className="size-1.5 rounded-full"
            style={{
              backgroundColor: categoryColors[category],
            }}
          />

          {
            categories.find(
              (item) => item.id === category
            )?.label
          }
        </span>
      ))}
    </div>
  )
}

/* =========================================================
   FEATURED LATEST ARTICLE
========================================================= */

function FeaturedArticle({
  post,
  articleCategories,
  filtered,
}: {
  post: BlogPost
  articleCategories: ArticleCategory[]
  filtered: boolean
}) {
  return (
    <section className="border-b border-border pb-9 pt-7 md:pb-12 md:pt-9">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-primary" />

          <h2 className="text-[11px] font-medium uppercase tracking-[0.17em] text-muted-foreground">
            {filtered
              ? "Latest matching article"
              : "Latest article"}
          </h2>
        </div>

        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
          Most recently added
        </span>
      </div>

      <Link
        href={`/blog/${post.slug}`}
        className="group block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
      >
        {/* Full-width featured cover */}

        <ArticleCover
          post={post}
          category={articleCategories[0]}
          featured
        />

        <div className="pt-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <ArticleMetadata post={post} />

            <span className="inline-flex items-center gap-2 text-sm font-medium transition-colors group-hover:text-primary">
              Read article

              <ArrowUpRight size={15} />
            </span>
          </div>

          {/* Compact title for accessibility and readability */}

          <h3 className="mt-3 font-serif text-xl leading-snug transition-colors group-hover:text-primary md:text-2xl">
            {post.title}
          </h3>

          {post.excerpt && (
            <p className="mt-3 max-w-3xl text-sm leading-[1.8] text-muted-foreground md:text-base">
              {plainText(post.excerpt)}
            </p>
          )}

          <div className="mt-4">
            <ArticleCategories
              values={articleCategories}
            />
          </div>
        </div>
      </Link>
    </section>
  )
}

/* =========================================================
   ARCHIVE ARTICLE CARD

   Two columns only on large screens.
   Single column on mobile and tablets.
   Original covers remain uncropped.
========================================================= */

function ArticleCard({
  post,
  articleCategories,
}: {
  post: BlogPost
  articleCategories: ArticleCategory[]
}) {
  return (
    <article className="group flex min-w-0 flex-col border-b border-border pb-6">
      <Link
        href={`/blog/${post.slug}`}
        className="flex flex-1 flex-col rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
      >
        {/* Large readable article cover */}

        <ArticleCover
          post={post}
          category={articleCategories[0]}
        />

        <div className="flex flex-1 flex-col pt-4">
          <ArticleMetadata post={post} />

          <h3 className="mt-3 font-serif text-xl leading-snug tracking-tight transition-colors group-hover:text-primary">
            {post.title}
          </h3>

          {post.excerpt && (
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
              {plainText(post.excerpt)}
            </p>
          )}

          <div className="mt-4">
            <ArticleCategories
              values={articleCategories}
            />
          </div>

          <span className="mt-auto inline-flex min-h-11 items-center gap-2 pt-3 text-sm font-medium transition-colors group-hover:text-primary">
            Read article

            <ArrowUpRight size={14} />
          </span>
        </div>
      </Link>
    </article>
  )
}

/* =========================================================
   EDITORIAL MASTHEAD
========================================================= */

function BlogHero() {
  return (
    <section className="pb-7 pt-28 md:pb-10 md:pt-32">
      <div className="grid items-center gap-5 md:grid-cols-[1fr_220px] md:gap-10">
        <div>
          <p className="mb-5 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            <PenTool size={14} strokeWidth={1.5} />

            The personal journal
          </p>

          <h1 className="font-serif text-[clamp(2.8rem,6vw,4.8rem)] font-normal leading-[1.1] tracking-[-0.035em]">
            Thinking{" "}

            <span className="italic text-muted-foreground">
              out loud.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            On products, technology, business,
            and everything in between.
          </p>
        </div>

        <div className="hidden md:block">
          <JournalIllustration />
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   MAIN BLOG PAGE
========================================================= */

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [retry, setRetry] = useState(0)

  const [search, setSearch] = useState("")

  const [activeCategory, setActiveCategory] =
    useState<Category>("all")

  const [visibleCount, setVisibleCount] = useState(8)

  /* =====================================================
     FETCH ALL BLOGS FROM SUPABASE

     Stable database pagination using existing id field.
     created_at is optional.
     Newest-first ordering is calculated from actual rows.
  ====================================================== */

  useEffect(() => {
    let cancelled = false

    async function fetchPosts() {
      setLoading(true)
      setError("")

      try {
        const supabase = createClient()

        const records: BlogPost[] = []
        const batchSize = 200

        let offset = 0

        while (true) {
          const { data, error } = await supabase
            .from("blog_posts")
            .select("*")
            .order("id", { ascending: true })
            .range(offset, offset + batchSize - 1)

          if (error) throw error

          if (cancelled) return

          const batch = (data || []) as BlogPost[]

          records.push(...batch)

          if (batch.length < batchSize) break

          offset += batchSize
        }

        if (cancelled) return

        // Sort by database creation date when available.

        const sorted = records
          .filter(
            (post) =>
              typeof post.title === "string" &&
              typeof post.slug === "string" &&
              post.slug.trim().length > 0
          )
          .sort(newestFirst)

        setPosts(sorted)
      } catch (error) {
        console.error("Error fetching blog posts:", error)

        if (!cancelled) {
          setError(
            "The journal couldn't be loaded right now."
          )
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    fetchPosts()

    return () => {
      cancelled = true
    }
  }, [retry])

  /* =====================================================
     AUTOMATIC CLASSIFICATION

     Calculated once whenever article data changes.
     No external API.
     No database category fields required.
  ====================================================== */

  const classifiedPosts = useMemo(() => {
    return posts.map((post) => ({
      post,
      categories: classifyArticle(post),
    }))
  }, [posts])

  /* =====================================================
     LIVE CATEGORY COUNTS
========================================================= */

  const categoryCounts = useMemo(() => {
    return categories.map((category) => ({
      ...category,
      count:
        category.id === "all"
          ? classifiedPosts.length
          : classifiedPosts.filter((entry) =>
              entry.categories.includes(
                category.id as ArticleCategory
              )
            ).length,
    }))
  }, [classifiedPosts])

  /* =====================================================
     SEARCH AND CATEGORY FILTERING

     Filtering never changes chronological order.
========================================================= */

  const filteredPosts = useMemo(() => {
    const query = normalizeText(search)

    return classifiedPosts.filter((entry) => {
      const post = entry.post

      const matchesCategory =
        activeCategory === "all" ||
        entry.categories.includes(
          activeCategory as ArticleCategory
        )

      const searchableText = normalizeText(
        [
          post.title,
          post.excerpt || "",
          post.content || "",
        ].join(" ")
      )

      const matchesSearch =
        !query ||
        searchableText.includes(query)

      return matchesCategory && matchesSearch
    })
  }, [classifiedPosts, activeCategory, search])

  /*
   * Latest matching article is always at the top.
   * All remaining articles follow chronologically.
   * Featured article is not duplicated in the archive.
   */

  const featuredPost = filteredPosts[0]

  const archivePosts = filteredPosts.slice(1)

  const visiblePosts = archivePosts.slice(
    0,
    visibleCount
  )

  const isFiltered =
    Boolean(search.trim()) ||
    activeCategory !== "all"

  function clearFilters() {
    setSearch("")
    setActiveCategory("all")
    setVisibleCount(8)
  }

  /* =====================================================
     PAGE RENDER
  ====================================================== */

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navigation />

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-5 md:px-8">

          {/* Editorial hero */}

          <BlogHero />

          {/* =============================================
              SEARCH
          ============================================== */}

          <div className="relative mb-5">
            <Search
              size={17}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
            />

            <input
              type="search"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value)
                setVisibleCount(8)
              }}
              aria-label="Search blog articles"
              placeholder="Search articles..."
              className="min-h-12 w-full rounded-md border border-border bg-background py-3 pl-11 pr-12 text-base outline-none transition-colors placeholder:text-muted-foreground focus:border-primary md:text-sm"
            />

            {search && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => {
                  setSearch("")
                  setVisibleCount(8)
                }}
                className="absolute inset-y-0 right-0 flex w-11 items-center justify-center bg-background text-muted-foreground"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* =============================================
              AUTOMATIC CATEGORY NAVIGATION
          ============================================== */}

          <div className="border-b border-border">
            <div
              role="group"
              aria-label="Filter articles by topic"
              className="flex gap-6 overflow-x-auto md:gap-8"
            >
              {categoryCounts.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={
                    activeCategory === category.id
                  }
                  onClick={() => {
                    setActiveCategory(category.id)
                    setVisibleCount(8)
                  }}
                  className={`inline-flex min-h-12 shrink-0 items-center gap-2 whitespace-nowrap border-b-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    activeCategory === category.id
                      ? "border-foreground font-medium text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category.label}

                  {!loading && !error && (
                    <span className="text-[10px] tabular-nums opacity-60">
                      {category.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Search results */}

          {isFiltered && !loading && !error && (
            <div className="flex min-h-12 items-center justify-between gap-3">
              <p
                className="text-xs text-muted-foreground"
                aria-live="polite"
              >
                {filteredPosts.length} matching articles
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex min-h-11 items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
              >
                <X size={12} />

                Clear filters
              </button>
            </div>
          )}

          {/* =============================================
              LOADING STATE
          ============================================== */}

          {loading ? (
            <section
              aria-label="Loading articles"
              className="py-9"
            >
              <div className="animate-pulse motion-reduce:animate-none">
                <div className="aspect-[16/9] rounded-md bg-muted" />

                <div className="mt-5 h-4 w-1/3 rounded bg-muted" />

                <div className="mt-3 h-3 w-2/3 rounded bg-muted" />
              </div>

              <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
                {[0, 1].map((i) => (
                  <div
                    key={i}
                    className="animate-pulse motion-reduce:animate-none"
                  >
                    <div className="aspect-[16/9] rounded-md bg-muted" />

                    <div className="mt-4 h-3 w-1/2 rounded bg-muted" />
                  </div>
                ))}
              </div>
            </section>

          ) : error ? (

            /* Error state */

            <section className="flex flex-col items-center py-20 text-center">
              <RefreshCw
                size={34}
                strokeWidth={1.2}
                className="text-muted-foreground"
              />

              <h2 className="mt-5 font-serif text-2xl">
                Something went wrong.
              </h2>

              <p className="mt-3 text-sm text-muted-foreground">
                {error}
              </p>

              <button
                type="button"
                onClick={() =>
                  setRetry((value) => value + 1)
                }
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-5 text-sm hover:bg-muted"
              >
                <RefreshCw size={14} />

                Try again
              </button>
            </section>

          ) : !featuredPost ? (

            /* Empty state */

            <section className="flex flex-col items-center py-20 text-center">
              <BookOpen
                size={36}
                strokeWidth={1.2}
                className="text-muted-foreground"
              />

              <h2 className="mt-5 font-serif text-2xl">
                {isFiltered
                  ? "Nothing quite matches."
                  : "A blank page, for now."}
              </h2>

              <p className="mt-3 text-sm text-muted-foreground">
                {isFiltered
                  ? "Try another search or topic."
                  : "New articles will appear here when published."}
              </p>

              {isFiltered && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 inline-flex min-h-11 items-center rounded-md border border-border px-5 text-sm hover:bg-muted"
                >
                  Clear filters
                </button>
              )}
            </section>

          ) : (
            <>
              {/* =========================================
                  ALWAYS SHOW LATEST ARTICLE FIRST
              ========================================== */}

              <FeaturedArticle
                key={featuredPost.post.id}
                post={featuredPost.post}
                articleCategories={
                  featuredPost.categories
                }
                filtered={isFiltered}
              />

              {/* =========================================
                  PREVIOUS ARTICLES
              ========================================== */}

              {archivePosts.length > 0 && (
                <section className="pb-12 pt-8 md:pb-16 md:pt-10">
                  <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <p className="mb-3 text-[10px] uppercase tracking-[0.17em] text-muted-foreground">
                        The archive
                      </p>

                      <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
                        Previous articles.
                      </h2>
                    </div>

                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Newest first
                    </span>
                  </div>

                  {/* Desktop: two large covers per row.
                      Tablet and mobile: one full-width cover.
                      Never use three or more columns. */}

                  <div className="grid grid-cols-1 items-start gap-x-8 gap-y-9 lg:grid-cols-2">
                    {visiblePosts.map((entry) => (
                      <ArticleCard
                        key={entry.post.id}
                        post={entry.post}
                        articleCategories={
                          entry.categories
                        }
                      />
                    ))}
                  </div>

                  {/* Progressive pagination */}

                  <div className="mt-10 flex flex-col items-center gap-4">
                    <p className="text-xs tabular-nums text-muted-foreground">
                      Showing {visiblePosts.length + 1} of{" "}
                      {filteredPosts.length} articles
                    </p>

                    <div
                      role="progressbar"
                      aria-label="Articles displayed"
                      aria-valuemin={0}
                      aria-valuemax={filteredPosts.length}
                      aria-valuenow={
                        visiblePosts.length + 1
                      }
                      className="h-1 w-36 overflow-hidden rounded-full bg-muted"
                    >
                      <div
                        className="h-full rounded-full bg-primary/60 transition-all duration-300 motion-reduce:transition-none"
                        style={{
                          width: `${
                            (
                              (visiblePosts.length + 1) /
                              filteredPosts.length
                            ) * 100
                          }%`,
                        }}
                      />
                    </div>

                    {visibleCount < archivePosts.length ? (
                      <button
                        type="button"
                        onClick={() =>
                          setVisibleCount(
                            (count) => count + 8
                          )
                        }
                        className="inline-flex min-h-12 items-center gap-2 rounded-md border border-border px-7 text-sm font-medium transition-colors hover:bg-muted"
                      >
                        Load more articles

                        <ChevronDown size={15} />
                      </button>
                    ) : (
                      <p className="text-xs text-muted-foreground">
                        You&apos;ve reached the end of the journal.
                      </p>
                    )}
                  </div>
                </section>
              )}
            </>
          )}

        </div>
      </main>

      <Footer />
    </div>
  )
}
