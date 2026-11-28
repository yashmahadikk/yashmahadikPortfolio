type HomePortfolioCoverProps = {
  id: string
  title: string
  compact?: boolean
}

const workAccents: Record<string, string> = {
  "saleshandy-import-list": "#77998A",
  "saleshandy-email-lookup": "#8196B5",
}

const studyIdentities: Record<string, { color: string; visual: string }> = {
  zepto: { color: "#A08BB8", visual: "notifications" },
  "amazon-prime": { color: "#819BB8", visual: "streaming" },
  sprintup: { color: "#B5A078", visual: "voice" },
  "electronic-soundbook": { color: "#83A6A5", visual: "soundbook" },
}

function BrowserFrame({ title }: { title: string }) {
  return (
    <g>
      <rect x="36" y="20" width="348" height="180" rx="5" fill="currentColor" fillOpacity=".025" stroke="currentColor" strokeOpacity=".23" />
      <path d="M36 45 H384" stroke="currentColor" strokeOpacity=".15" />
      {[48, 58, 68].map((x) => <circle key={x} cx={x} cy="32" r="2.5" fill="currentColor" opacity=".3" />)}
      <text x="210" y="36" textAnchor="middle" fontSize="9" fill="currentColor" opacity=".7">{title}</text>
    </g>
  )
}

function TextLines({ x, y, width, count = 3 }: { x: number; y: number; width: number; count?: number }) {
  return (
    <g fill="currentColor">
      {Array.from({ length: count }).map((_, i) => (
        <rect key={i} x={x} y={y + i * 9} width={i === count - 1 ? width * .65 : width} height="3" rx="1.5" opacity={i === 0 ? .4 : .18} />
      ))}
    </g>
  )
}

function WorkArtwork({ id, accent }: { id: string; accent: string }) {
  if (id === "saleshandy-import-list") {
    return (
      <g>
        <BrowserFrame title="Import new list" />
        {["Upload", "Map fields", "Review & import"].map((label, i) => (
          <g key={label}>
            <circle cx={56 + i * 111} cy="67" r="8" fill={accent} opacity={i === 1 ? 1 : .35} />
            <text x={56 + i * 111} y="70" textAnchor="middle" fontSize="8" fill="white">{i + 1}</text>
            <text x={69 + i * 111} y="70" fontSize="9" fill="currentColor">{label}</text>
          </g>
        ))}
        <text x="52" y="94" fontSize="8" opacity=".6">CSV COLUMNS</text>
        <text x="215" y="94" fontSize="8" opacity=".6">LEAD FINDER FIELDS</text>
        {["First name", "Last name", "Email address"].map((label, i) => (
          <g key={label}>
            <rect x="50" y={104 + i * 27} width="320" height="24" rx="3" fill="currentColor" fillOpacity=".035" />
            <text x="61" y={120 + i * 27} fontSize="10">{label}</text>
            <path d={`M181 ${116 + i * 27} H199 M194 ${111 + i * 27} L199 ${116 + i * 27} L194 ${121 + i * 27}`} stroke={accent} strokeWidth="1.5" fill="none" />
            <rect x="215" y={107 + i * 27} width="143" height="18" rx="2" stroke="currentColor" strokeOpacity=".2" fill="none" />
            <text x="223" y={120 + i * 27} fontSize="9">{label}</text>
            <path d={`M342 ${116 + i * 27} l4 4 7 -9`} stroke={accent} strokeWidth="1.5" fill="none" />
          </g>
        ))}
      </g>
    )
  }

  return (
    <g>
      <BrowserFrame title="Lead Finder" />
      <text x="53" y="68" fontSize="14" fontWeight="500">Email lookup</text>
      <rect x="53" y="82" width="314" height="30" rx="3" stroke="currentColor" strokeOpacity=".25" fill="none" />
      <text x="65" y="101" fontSize="10" opacity=".6">name@company.com</text>
      <rect x="288" y="87" width="73" height="20" rx="3" fill={accent} />
      <text x="324" y="100" fontSize="9" textAnchor="middle" fill="white">Find lead</text>
      <rect x="53" y="128" width="314" height="54" rx="4" fill={accent} fillOpacity=".12" stroke={accent} strokeOpacity=".4" />
      <circle cx="81" cy="155" r="17" fill={accent} opacity=".2" />
      <circle cx="81" cy="150" r="5" fill={accent} />
      <path d="M70 166 Q81 150 92 166" stroke={accent} strokeWidth="2" fill="none" />
      <TextLines x={109} y={143} width={139} />
      <circle cx="343" cy="155" r="11" fill="#77998A" opacity=".2" />
      <path d="M338 155 l4 4 7 -9" stroke="#77998A" strokeWidth="2" fill="none" />
    </g>
  )
}

function StudyFrame({ title }: { title: string }) {
  return (
    <g>
      <rect x="25" y="18" width="310" height="144" rx="5" fill="currentColor" fillOpacity=".025" stroke="currentColor" strokeOpacity=".28" />
      <path d="M25 41 H335" stroke="currentColor" strokeOpacity=".18" />
      {[10, 19, 28].map((n) => <circle key={n} cx={25 + n} cy="29" r="2.5" fill="currentColor" opacity=".3" />)}
      <text x="180" y="33" textAnchor="middle" fontSize="9" opacity=".75">{title}</text>
    </g>
  )
}

function StudyNode({ x, y, w = 90, h = 32, label, color }: { x: number; y: number; w?: number; h?: number; label: string; color: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="4" fill={color} fillOpacity=".13" stroke={color} strokeOpacity=".85" />
      <text x={x + w / 2} y={y + h / 2 + 3} fontSize="9" textAnchor="middle" fill="currentColor">{label}</text>
    </g>
  )
}

function Connection({ d, color }: { d: string; color: string }) {
  return <path d={d} stroke={color} strokeWidth="1.4" strokeDasharray="4 4" fill="none" />
}

function FigureLabel({ text }: { text: string }) {
  return <text x="180" y="174" fontSize="8" letterSpacing="1.3" textAnchor="middle" fill="currentColor" opacity=".6">{text}</text>
}

function StudyArtwork({ id, color }: { id: string; color: string }) {
  if (id === "zepto") {
    return (
      <g>
        <rect x="102" y="9" width="156" height="157" rx="12" stroke={color} strokeWidth="1.5" fill={color} fillOpacity=".04" />
        <rect x="155" y="16" width="50" height="4" rx="2" fill="currentColor" opacity=".25" />
        <text x="180" y="34" textAnchor="middle" fontSize="10">Notifications</text>
        {["Personalised offer", "Your favourites", "Time to restock?"].map((label, i) => (
          <g key={label}>
            <rect x="112" y={44 + i * 35} width="136" height="29" rx="4" fill={color} fillOpacity=".13" stroke={color} strokeOpacity=".5" />
            <rect x="119" y={51 + i * 35} width="15" height="15" rx="3" fill={color} opacity=".8" />
            <text x="141" y={55 + i * 35} fontSize="8">{label}</text>
            <rect x="141" y={62 + i * 35} width="90" height="3" rx="1.5" fill="currentColor" opacity=".25" />
          </g>
        ))}
        <Connection d="M102 70 H49 V107" color={color} />
        <StudyNode x={8} y={107} w={82} label="Relevance" color={color} />
        <Connection d="M258 119 H309 V64" color={color} />
        <StudyNode x={269} y={32} w={82} label="Engagement" color={color} />
      </g>
    )
  }

  if (id === "amazon-prime") {
    return (
      <g>
        <StudyFrame title="Content discovery" />
        <text x="38" y="57" fontSize="10">Find something to watch</text>
        <rect x="38" y="66" width="284" height="46" rx="4" fill={color} fillOpacity=".18" stroke={color} />
        <path d="M38 111 L86 78 L130 111 M106 111 L157 80 L201 111" fill={color} fillOpacity=".2" stroke={color} />
        <circle cx="265" cy="90" r="13" stroke={color} fill="none" />
        <path d="M261 83 L272 90 L261 97Z" fill={color} />
        {[0, 1, 2, 3, 4].map((i) => <rect key={i} x={38 + i * 57} y="124" width="53" height="24" rx="3" fill={color} fillOpacity={.15 + i * .1} stroke={color} strokeOpacity=".5" />)}
      </g>
    )
  }

  if (id === "sprintup") {
    return (
      <g>
        <rect x="12" y="39" width="88" height="95" rx="5" stroke={color} fill={color} fillOpacity=".07" />
        {[12, 23, 34, 18, 44, 27, 12, 33, 20].map((h, i) => <rect key={i} x={24 + i * 7} y={80 - h / 2} width="4" height={h} rx="2" fill={color} />)}
        <text x="56" y="119" fontSize="9" textAnchor="middle">Voice input</text>
        <Connection d="M100 85 H130" color={color} />
        <rect x="130" y="50" width="85" height="70" rx="6" stroke={color} fill={color} fillOpacity=".15" />
        <path d="M172 61 V84 M161 72 H183" stroke={color} strokeWidth="2" />
        <text x="172" y="103" fontSize="11" textAnchor="middle">AI agent</text>
        {["Create task", "Set priority", "Assign owner"].map((label, i) => (
          <g key={label}>
            <Connection d={`M215 85 H232 V${43 + i * 43} H247`} color={color} />
            <StudyNode x={247} y={27 + i * 43} w={104} label={label} color={color} />
          </g>
        ))}
        <FigureLabel text="VOICE → TASK → EXECUTION" />
      </g>
    )
  }

  return (
    <g>
      <path d="M180 39 Q128 14 57 28 V133 Q124 120 180 145 Q236 120 303 133 V28 Q232 14 180 39Z" fill={color} fillOpacity=".08" stroke={color} strokeWidth="1.5" />
      <path d="M180 39 V145 M50 139 Q121 127 180 152 Q239 127 310 139" stroke={color} fill="none" />
      <circle cx="119" cy="76" r="28" fill={color} fillOpacity=".13" stroke={color} />
      <path d="M101 70 H112 L124 59 V93 L112 82 H101Z" fill={color} fillOpacity=".25" stroke={color} />
      <path d="M130 67 Q142 76 130 85 M136 59 Q154 76 136 93" stroke={color} strokeWidth="1.5" fill="none" />
      <text x="119" y="119" fontSize="8" textAnchor="middle">Touch to listen</text>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="199" y={43 + i * 26} width="84" height="20" rx="3" stroke={color} fill={color} fillOpacity=".13" />
          <circle cx="211" cy={53 + i * 26} r="4" fill={color} />
          <rect x="222" y={51 + i * 26} width="45" height="4" rx="2" fill={color} opacity=".6" />
        </g>
      ))}
      <g stroke={color} fill="none" opacity=".6">
        <path d="M43 54 Q18 78 43 102" />
        <path d="M33 44 Q0 78 33 112" />
        <path d="M317 54 Q342 78 317 102" />
        <path d="M327 44 Q360 78 327 112" />
      </g>
      <FigureLabel text="SCREEN-FREE INTERACTIVE LEARNING" />
    </g>
  )
}

export function HomePortfolioCover({ id, title, compact = false }: HomePortfolioCoverProps) {
  const workAccent = workAccents[id]
  const study = studyIdentities[id]

  if (workAccent) {
    return (
      <div className={`relative isolate flex w-full items-center justify-center overflow-hidden border-b border-border ${compact ? "aspect-[4/3] w-20 shrink-0 rounded-sm border" : "aspect-[1.85/1]"}`} style={{ backgroundColor: `${workAccent}15` }}>
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.10]" style={{ backgroundImage: "radial-gradient(currentColor 0.7px, transparent 0.7px)", backgroundSize: "16px 16px" }} />
        <svg viewBox="0 0 420 220" preserveAspectRatio="xMidYMid meet" fill="currentColor" role="img" aria-label={`Conceptual product illustration for ${title}`} className={`relative block h-full w-full transition-transform duration-300 group-hover:scale-[1.025] motion-reduce:transform-none ${compact ? "p-1" : "p-3 sm:p-5"}`}>
          <WorkArtwork id={id} accent={workAccent} />
        </svg>
      </div>
    )
  }

  if (study) {
    return (
      <div className={`relative isolate flex w-full items-center justify-center overflow-hidden border-b border-border ${compact ? "aspect-[4/3] w-20 shrink-0 rounded-sm border" : "aspect-[1.85/1]"}`} style={{ backgroundColor: `${study.color}16` }}>
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: "radial-gradient(currentColor 0.7px, transparent 0.7px)", backgroundSize: "15px 15px" }} />
        <svg viewBox="0 0 380 200" preserveAspectRatio="xMidYMid meet" fill="currentColor" role="img" aria-label={`Conceptual research illustration for ${title}`} className={`relative block h-full w-full transition-transform duration-300 group-hover:scale-[1.025] motion-reduce:transform-none ${compact ? "p-1" : "p-2"}`}>
          <g transform="translate(10 10)"><StudyArtwork id={id} color={study.color} /></g>
        </svg>
      </div>
    )
  }

  return (
    <div className={`relative isolate overflow-hidden border-b border-border bg-muted text-foreground ${compact ? "aspect-[4/3] w-20 shrink-0 rounded-sm border" : "aspect-[1.85/1] w-full"}`}>
      <svg viewBox="0 0 640 340" preserveAspectRatio="xMidYMid meet" role="img" aria-label={`Illustrated cover for ${title}`} className={`h-full w-full text-foreground transition-transform duration-300 group-hover:scale-[1.025] motion-reduce:transform-none ${compact ? "p-1" : "p-3 sm:p-5"}`}>
        <rect x="0" y="0" width="640" height="340" fill="currentColor" opacity=".025" />
        <path d="M0 270H640" stroke="currentColor" opacity=".08" />
      </svg>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/15 to-transparent" />
    </div>
  )
}
