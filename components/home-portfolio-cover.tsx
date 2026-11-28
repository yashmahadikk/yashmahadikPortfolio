type HomePortfolioCoverProps = {
  id: string
  title: string
  compact?: boolean
}

export function HomePortfolioCover({
  id,
  title,
  compact = false,
}: HomePortfolioCoverProps) {
  return (
    <div
      className={`relative isolate overflow-hidden border-b border-border bg-muted text-foreground ${compact ? "aspect-[4/3] w-20 shrink-0 rounded-sm border" : "aspect-[1.85/1] w-full"}`}
    >
      <svg
        viewBox="0 0 640 340"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={`Illustrated cover for ${title}`}
        className={`h-full w-full text-foreground transition-transform duration-300 group-hover:scale-[1.025] motion-reduce:transform-none ${compact ? "p-1" : "p-3 sm:p-5"}`}
      >
        <rect x="0" y="0" width="640" height="340" fill="currentColor" opacity=".025" />
        <path d="M0 270H640" stroke="currentColor" opacity=".08" />
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          {id === "saleshandy-import-list" && (
            <>
              <rect x="105" y="55" width="430" height="224" rx="10" opacity=".28" />
              <path d="M105 94h430" opacity=".2" />
              <circle cx="128" cy="75" r="4" fill="currentColor" opacity=".35" />
              <circle cx="145" cy="75" r="4" fill="currentColor" opacity=".2" />
              <rect x="138" y="119" width="164" height="32" rx="4" opacity=".18" />
              <rect x="338" y="119" width="164" height="32" rx="4" opacity=".18" />
              <rect x="138" y="170" width="164" height="26" rx="4" opacity=".12" />
              <rect x="338" y="170" width="164" height="26" rx="4" opacity=".12" />
              <rect x="138" y="211" width="164" height="26" rx="4" opacity=".12" />
              <rect x="338" y="211" width="164" height="26" rx="4" opacity=".12" />
              <path d="M310 135h18m-6-7 7 7-7 7" stroke="currentColor" strokeWidth="3" />
              <path d="m470 215 8 8 16-18" stroke="currentColor" strokeWidth="3" />
            </>
          )}
          {id === "saleshandy-email-lookup" && (
            <>
              <rect x="104" y="48" width="432" height="242" rx="12" opacity=".25" />
              <path d="M104 88h432" opacity=".18" />
              <rect x="141" y="114" width="358" height="45" rx="8" opacity=".3" />
              <circle cx="164" cy="136" r="9" opacity=".7" />
              <path d="m171 143 9 9" strokeWidth="3" opacity=".7" />
              <rect x="141" y="187" width="358" height="72" rx="8" opacity=".15" />
              <circle cx="184" cy="223" r="20" opacity=".16" />
              <circle cx="184" cy="216" r="6" opacity=".6" />
              <path d="M171 237c3-12 23-12 26 0" opacity=".6" />
              <path d="M222 210h161M222 225h112M222 239h138" opacity=".35" />
              <circle cx="464" cy="222" r="13" opacity=".28" />
              <path d="m458 222 4 4 8-9" strokeWidth="2.5" />
            </>
          )}
          {id === "zepto" && (
            <>
              <rect x="132" y="42" width="190" height="258" rx="24" opacity=".28" />
              <path d="M198 58h58" opacity=".35" />
              <rect x="150" y="92" width="154" height="73" rx="10" opacity=".14" />
              <circle cx="174" cy="116" r="8" opacity=".5" />
              <path d="M193 110h85M193 124h66M163 146h123" opacity=".38" />
              <rect x="150" y="180" width="154" height="91" rx="10" opacity=".1" />
              <path d="M177 242v-20l19-15 16 11 25-30 30 13" strokeWidth="3" opacity=".7" />
              <path d="M354 252h147M354 223h108M354 194h76" strokeWidth="6" opacity=".16" />
              <path d="m360 157 29-20 28 12 33-39 39 8" strokeWidth="3" opacity=".62" />
              <circle cx="489" cy="118" r="8" fill="currentColor" opacity=".48" />
            </>
          )}
          {id === "amazon-prime" && (
            <>
              <rect x="92" y="53" width="456" height="231" rx="12" opacity=".24" />
              <path d="M92 91h456" opacity=".2" />
              <rect x="125" y="116" width="202" height="130" rx="8" opacity=".18" />
              <path d="M126 219 189 149l43 48 27-31 68 80H126Z" fill="currentColor" opacity=".12" />
              <circle cx="278" cy="143" r="13" fill="currentColor" opacity=".18" />
              <path d="M357 122h152M357 144h118M357 166h137" opacity=".32" />
              <rect x="357" y="190" width="56" height="52" rx="5" opacity=".18" />
              <rect x="427" y="190" width="56" height="52" rx="5" opacity=".13" />
              <rect x="497" y="190" width="25" height="52" rx="5" opacity=".1" />
              <path d="M381 208v17l14-8.5-14-8.5Z" fill="currentColor" opacity=".55" />
            </>
          )}
          {id === "sprintup" && (
            <>
              <rect x="83" y="54" width="474" height="232" rx="12" opacity=".24" />
              <path d="M83 94h474" opacity=".18" />
              <rect x="113" y="122" width="176" height="125" rx="9" opacity=".12" />
              <rect x="351" y="122" width="176" height="125" rx="9" opacity=".12" />
              <path d="M134 151h118M134 174h95M134 198h111" opacity=".36" />
              <path d="M372 151h116M372 174h89M372 198h105" opacity=".36" />
              <path d="M298 184h44m-13-13 13 13-13 13" strokeWidth="3" opacity=".6" />
              <path d="M167 265v-9m12 9v-19m12 19v-31m12 31v-16m12 16v-27m12 27v-11m12 11v-20" strokeWidth="4" opacity=".6" />
              <circle cx="488" cy="263" r="7" fill="currentColor" opacity=".5" />
            </>
          )}
          {id === "electronic-soundbook" && (
            <>
              <path d="M116 90c61-22 122-21 184 2v164c-62-24-123-25-184-3V90Z" opacity=".26" />
              <path d="M300 92c63-23 124-24 185-2v163c-61-22-122-21-185 3V92Z" opacity=".26" />
              <path d="M300 93v162M145 125c44-12 87-10 125 3M145 151c43-11 84-9 125 4M145 177c41-10 82-9 125 5" opacity=".3" />
              <path d="M328 126c42-13 84-15 129-4M328 152c42-13 84-15 129-4" opacity=".3" />
              <circle cx="390" cy="210" r="34" opacity=".16" />
              <path d="M383 194v32l25-16-25-16Z" fill="currentColor" opacity=".66" />
              <path d="M445 206v8m12-15v22m12-30v38m12-25v13" strokeWidth="3" opacity=".55" />
            </>
          )}
        </g>
      </svg>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/15 to-transparent" />
    </div>
  )
}
