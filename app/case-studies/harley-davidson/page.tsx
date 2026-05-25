import Link from "next/link"
import { ArrowLeft, TrendingUp, Users, Target, Zap, Clock, DollarSign, AlertTriangle } from "lucide-react"

export const metadata = {
  title: "Harley-Davidson Case Study | Yash Mahadik",
  description: "Enjoy Till It Lasts - A brand strategy case study on how Harley-Davidson can unlock its next billion in revenue before the ICE era ends.",
}

export default function HarleyDavidsonCaseStudy() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <Link href="/#case-studies" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base">
            <ArrowLeft size={16} className="md:w-5 md:h-5" />
            <span className="hidden sm:inline">Back to Case Studies</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 md:pt-32 pb-12 md:pb-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary text-xs md:text-sm font-semibold tracking-wider mb-3 md:mb-4">BRAND STRATEGY CASE STUDY</p>
          <h1 className="text-2xl sm:text-3xl md:text-6xl font-serif italic text-foreground mb-1 md:mb-2">
            Enjoy Till
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-6xl font-serif italic text-primary mb-4 md:mb-6">
            It Lasts.
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-6 md:mb-8">
            How Harley-Davidson can unlock its next billion in revenue before the ICE era ends.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-8 text-xs md:text-sm text-muted-foreground mb-6 md:mb-8">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground/60 mb-1">Role</p>
              <p className="font-medium text-foreground text-sm">Brand & Growth Strategist</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground/60 mb-1">Focus</p>
              <p className="font-medium text-foreground text-sm">Revenue Growth & ICE Legacy</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground/60 mb-1">Author</p>
              <p className="font-medium text-foreground text-sm">Yash Mahadik</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {["ICE Engine Era", "Brand Strategy", "Nostalgia Marketing", "Community Building", "Electric Future", "Royal Enfield Threat"].map((tag) => (
              <span key={tag} className="px-2 md:px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-8 md:py-12 px-4 md:px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { stat: "~$5.8B", label: "2006 Revenue (Peak Era)" },
              { stat: "50%", label: "Unit Sales Decline Since Peak" },
              { stat: "50", label: "Avg. Buyer Age (Years)" },
              { stat: "$1.5B+", label: "Addressable Revenue Increment" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-lg sm:text-2xl md:text-4xl font-serif text-primary mb-1 md:mb-2">{item.stat}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Overview */}
      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-3xl font-serif italic text-foreground mb-6 md:mb-8">
            Harley-Davidson - The American Icon
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  The legend.
                </h3>
                <p className="text-muted-foreground">
                  Founded 1903 in Milwaukee. Not just a motorcycle brand - a cultural identity. HD does not sell bikes, it sells freedom, rebellion, and American mythology.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  The model.
                </h3>
                <p className="text-muted-foreground">
                  Revenue from motorcycles & parts (~75%), financial services/MotorClothes (~25%). The H.O.G. (Harley Owners Group) has 1M+ members globally - one of the world&apos;s largest brand communities.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  The problem.
                </h3>
                <p className="text-muted-foreground">
                  The mythology is aging with its buyers. Average buyer is 50 years old. Younger riders choose lighter, cheaper, more accessible bikes. The electric revolution threatens the brand&apos;s core identity: the V-Twin rumble.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground mb-4">Revenue Streams</h3>
              {[
                { name: "Motorcycles & Products", pct: "~74%", width: "74%" },
                { name: "Financial Services", pct: "~19%", width: "19%" },
                { name: "MotorClothes & Accessories", pct: "~7%", width: "7%" },
              ].map((stream, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{stream.name}</span>
                    <span className="text-primary font-medium">{stream.pct}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full" 
                      style={{ width: stream.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-6 bg-red-50/50">
        <div className="max-w-6xl mx-auto">
          <p className="text-red-600 text-sm font-semibold tracking-wider mb-4">THE PROBLEM</p>
          <h2 className="text-2xl md:text-3xl font-serif italic text-foreground mb-8">
            A Brand in Decline - The Revenue Story
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Unit sales have halved since the peak era. Inflation-adjusted revenue is at a multi-decade low. The demographic trend accelerates the decline.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { 
                label: "Unit Sales", 
                headline: "HALVED", 
                body: "~350K peak (2006) to ~177K today. Real demand for HD bikes has collapsed.",
                color: "text-red-600"
              },
              { 
                label: "Avg. Buyer Age", 
                headline: "RISING", 
                body: "50 years average - and getting older. No meaningful youth acquisition strategy.",
                color: "text-red-600"
              },
              { 
                label: "Inflation-Adjusted", 
                headline: "WORSE THAN IT LOOKS", 
                body: "2014&apos;s $6.2B in 2025 dollars is $8.0B+. Today&apos;s ~$6B is ~25% below real peak.",
                color: "text-amber-600"
              },
            ].map((insight, index) => (
              <div key={index} className="bg-background p-6 border-l-4 border-red-500">
                <p className={`text-xs font-semibold tracking-wider ${insight.color} mb-2`}>{insight.label.toUpperCase()}</p>
                <p className="text-xl font-bold text-foreground mb-2">{insight.headline}</p>
                <p className="text-sm text-muted-foreground">{insight.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-red-100/50 border border-red-200 p-6 rounded-lg">
            <p className="text-xs font-semibold tracking-wider text-red-600 mb-2">THE STRUCTURAL CRISIS</p>
            <p className="text-muted-foreground">
              Harley is caught in a demographic trap: its core buyers are aging out, and it has failed to recruit a new generation. This is not a marketing problem alone - it&apos;s a price, positioning, and relevance problem. And a 30-year electric countdown makes it existential.
            </p>
          </div>
        </div>
      </section>

      {/* The 30-Year Clock */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary text-sm font-semibold tracking-wider mb-4">THE ICE COUNTDOWN</p>
          <h2 className="text-2xl md:text-3xl font-serif italic text-foreground mb-8">
            The 30-Year Clock is Already Running
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Internal Combustion Engine motorcycles will be banned in most major markets by 2035-2050. The window is finite - and Harley must decide what to do with it.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[
              { year: "NOW 2025", body: "ICE at peak. HD&apos;s best window for the &apos;legacy&apos; play.", color: "border-primary bg-primary/5" },
              { year: "2030", body: "EU ICE bike bans begin. Norway, Netherlands go all-electric.", color: "border-amber-500 bg-amber-50" },
              { year: "2035", body: "UK, California, India phase-out begins for new ICE bikes.", color: "border-amber-500 bg-amber-50" },
              { year: "2040-2050", body: "Global ICE phase-out complete. The V-Twin becomes a museum piece.", color: "border-red-500 bg-red-50" },
            ].map((milestone, index) => (
              <div key={index} className={`p-4 border-l-4 ${milestone.color}`}>
                <p className="font-bold text-foreground mb-2">{milestone.year}</p>
                <p className="text-sm text-muted-foreground">{milestone.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
            <p className="text-muted-foreground italic">
              <strong className="text-foreground">THE HARLEY PARADOX:</strong> The brand&apos;s greatest asset - the V-Twin engine sound and feel - is the very thing being legislated away. This is not a disruption they can pivot out of easily. But it IS a 30-year window they can monetize masterfully.
            </p>
          </div>
        </div>
      </section>

      {/* Royal Enfield Threat */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary text-sm font-semibold tracking-wider mb-4">COMPETITIVE THREAT</p>
          <h2 className="text-2xl md:text-3xl font-serif italic text-foreground mb-8">
            Royal Enfield: The Gateway Drug HD Ignored
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Royal Enfield is becoming the entry point to adventure motorcycling globally - a role HD abdicated by refusing to play in the accessible segment.
          </p>

          <div className="overflow-x-auto md:overflow-visible mb-8">
            <table className="w-full min-w-max md:min-w-0 text-[11px] md:text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left px-2 md:px-3 py-2 md:py-3 font-semibold whitespace-nowrap">Parameter</th>
                  <th className="text-center px-1 md:px-3 py-2 md:py-3 font-semibold whitespace-nowrap text-[10px] md:text-sm">Harley-Davidson</th>
                  <th className="text-center px-1 md:px-3 py-2 md:py-3 font-semibold whitespace-nowrap text-[10px] md:text-sm">Royal Enfield</th>
                  <th className="text-center px-1 md:px-3 py-2 md:py-3 font-semibold whitespace-nowrap">Advantage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Entry Price (US)", "$7K-$12K", "$4K-$6K", "RE"],
                  ["Global Units/Year", "~177K", "~900K+", "RE"],
                  ["NA Growth", "Declining", "+18% YoY", "RE"],
                  ["Buyer Age", "~50 yrs", "~28-32 yrs", "RE"],
                  ["Brand Heritage", "120+ yrs", "Younger", "HD"],
                  ["Engine", "V-Twin", "Thumper", "HD"],
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/50"}>
                    <td className="px-2 md:px-3 py-1 md:py-3 text-muted-foreground text-[10px] md:text-sm whitespace-nowrap">{row[0]}</td>
                    <td className="px-1 md:px-3 py-1 md:py-3 text-center text-[10px] md:text-sm">{row[1]}</td>
                    <td className="px-1 md:px-3 py-1 md:py-3 text-center text-[10px] md:text-sm">{row[2]}</td>
                    <td className={`px-1 md:px-3 py-1 md:py-3 text-center font-semibold text-[10px] md:text-sm whitespace-nowrap ${row[3] === "RE" ? "text-green-600" : "text-primary"}`}>
                      {row[3]} &#10003;
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
            <p className="text-muted-foreground">
              <strong className="text-green-700">THE OPPORTUNITY:</strong> Royal Enfield is not HD&apos;s enemy - it&apos;s HD&apos;s on-ramp. A 28-year-old who starts on a RE Himalayan and catches the adventure-riding bug is a future Harley customer. HD needs to cultivate this pipeline, not ignore it.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Segmentation */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary text-sm font-semibold tracking-wider mb-4">CUSTOMER SEGMENTATION</p>
          <h2 className="text-2xl md:text-3xl font-serif italic text-foreground mb-8">
            Who Are Harley&apos;s Customers - and Who Should Be?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "The Faithful",
                pct: "~55%",
                desc: "Ages 45-65. Existing HD owners. Deep brand loyalty. Already bought the lifestyle - vest, patches, H.O.G. membership. High ARPU, low churn risk.",
                opp: "Deepen relationship. Sell more rides, events, premium accessories. The &apos;Enjoy Till It Lasts&apos; message resonates strongest here.",
                flag: "RETAIN & DEEPEN",
                color: "border-primary",
              },
              {
                name: "The Aspiring Rider",
                pct: "~30%",
                desc: "Ages 28-44. Motorcycle-curious. Currently riding RE, Honda, or Kawasaki. Want adventure. Price-sensitive. Feel HD is out of reach.",
                opp: "Lower the entry barrier. Create an accessible HD entry model or certified pre-owned program. Organize rides that let them try before they buy.",
                flag: "PRIMARY TARGET",
                color: "border-amber-500",
              },
              {
                name: "The Nostalgic Prospect",
                pct: "~15%",
                desc: "Ages 35-55. Never owned a motorcycle. But Harley carries cultural meaning for them. They&apos;ve always wanted to &apos;ride one before they die&apos;. The FOMO segment.",
                opp: "&apos;Enjoy Till It Lasts&apos; creates urgency for this group. ICE window closing = &apos;if not now, when?&apos; First-ride experiences unlock this segment.",
                flag: "BIGGEST UPSIDE",
                color: "border-gray-400",
              },
            ].map((segment, index) => (
              <div key={index} className={`bg-muted/30 p-6 border-l-4 ${segment.color}`}>
                {segment.flag && (
                  <span className="inline-block px-2 py-1 bg-primary text-primary-foreground text-xs font-semibold mb-3">
                    {segment.flag}
                  </span>
                )}
                <h3 className="text-xl font-semibold text-foreground mb-2">{segment.name}</h3>
                <p className="text-3xl font-serif text-primary mb-4">{segment.pct}</p>
                <p className="text-sm text-muted-foreground mb-4">{segment.desc}</p>
                <p className="text-sm text-primary"><strong>Opportunity:</strong> {segment.opp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Central Insight */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary text-sm font-semibold tracking-wider mb-4">THE CENTRAL INSIGHT</p>
          <h2 className="text-2xl md:text-3xl font-serif italic text-foreground mb-8">
            What Nobody in the Motorcycle Industry Is Saying
          </h2>
          
          <blockquote className="border-l-4 border-primary pl-6 py-4 mb-8">
            <p className="text-xl md:text-2xl text-foreground italic font-serif">
              &quot;The ICE motorcycle era has a fixed expiry date. Every brand knows this. None will say it. Harley-Davidson should say it first - and turn the end of an era into the biggest sales campaign in motorcycle history.&quot;
            </p>
          </blockquote>

          <h3 className="font-semibold text-foreground mb-6">THREE TRUTHS THAT MAKE THIS WORK</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Scarcity Creates Desire",
                body: "Limited editions sell out. The last game at a beloved stadium sells out. The ICE V-Twin is becoming the world&apos;s most romanticized machine - Harley should lean into that NOW.",
              },
              {
                num: "02",
                title: "Honesty Is the New Luxury Marketing",
                body: "Patagonia built billions on radical honesty (&apos;Don&apos;t buy this jacket&apos;). A motorcycle brand that says &apos;we know what&apos;s coming, but right now, THIS is real&apos; creates trust that money can&apos;t buy.",
              },
              {
                num: "03",
                title: "The Nostalgia Economy Is Massive",
                body: "Vinyl records outsell CDs. Film cameras have a waiting list. Every &apos;dying&apos; format that embraced its nostalgia turned it into premium positioning. Harley can do this for motorcycles.",
              },
            ].map((truth, index) => (
              <div key={index} className="bg-background p-6 border border-border">
                <span className="text-3xl font-serif text-primary">{truth.num}</span>
                <h4 className="font-semibold text-foreground mt-2 mb-3">{truth.title}</h4>
                <p className="text-sm text-muted-foreground">{truth.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Campaign */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary text-sm font-semibold tracking-wider mb-4">CAMPAIGN CONCEPT</p>
          <h2 className="text-2xl md:text-3xl font-serif italic text-foreground mb-8">
            &quot;Enjoy Till It Lasts&quot; - The Campaign
          </h2>
          
          <div className="bg-muted/30 p-6 border-l-4 border-primary mb-8">
            <p className="text-muted-foreground">
              In 25-30 years, the roar of an ICE V-Twin will be a sound most people have only heard in museums. Harley-Davidson will be the brand that was honest about this - and gave people the chance to experience it while they still can. &quot;Enjoy Till It Lasts&quot; is not a sad farewell. It&apos;s a battle cry for the present.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                name: "The Message",
                desc: "&apos;The ICE era is ending. You still have time. Ride now.&apos; Not sad. Not defeatist. Urgent and thrilling - like the last run of a legendary train line.",
              },
              {
                num: "02",
                name: "The Audience",
                desc: "Every adult who ever thought &apos;I should try a Harley someday.&apos; The campaign turns &apos;someday&apos; into &apos;RIGHT NOW.&apos; Targets 35-55 year olds with disposable income.",
              },
              {
                num: "03",
                name: "The Tone",
                desc: "Cinematic, warm, American. Like a great Western closing shot. Evokes Harleys in Hawaii, Route 66, sunset on the Pacific Coast Highway.",
              },
              {
                num: "04",
                name: "The Promise",
                desc: "Harley will be there with the best ICE bikes they&apos;ve ever made, for as long as ICE is legal. When the time comes to pivot to electric, HD will do it on their own terms.",
              },
            ].map((pillar, index) => (
              <div key={index} className="bg-muted/30 p-6 border-l-4 border-primary">
                <span className="text-2xl font-serif text-primary">{pillar.num}</span>
                <h4 className="font-semibold text-foreground mt-2 mb-3">{pillar.name}</h4>
                <p className="text-sm text-muted-foreground">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size & Impact */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary text-sm font-semibold tracking-wider mb-4">SIZE & IMPACT</p>
          <h2 className="text-2xl md:text-3xl font-serif italic text-foreground mb-8">
            How Big is the Opportunity?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground mb-4">Market Funnel</h3>
              {[
                { num: "~45M", label: "Motorcycle riders in the US", src: "Source: Motorcycle Industry Council" },
                { num: "~12M", label: "Interest in premium/cruiser bikes", src: "Estimated 27% of total riders" },
                { num: "~5.5M", label: "Can afford HD price range (~$10K+)", src: "HH income $80K+ segment" },
                { num: "~2.2M", label: "Active consideration - held back by price, entry, or awareness", src: "Target addressable market" },
              ].map((item, index) => (
                <div key={index} className={`p-4 border-l-4 ${index === 3 ? "border-primary bg-primary/5" : "border-muted bg-background"}`}>
                  <div className="flex items-baseline gap-4">
                    <span className={`text-2xl font-serif ${index === 3 ? "text-primary" : "text-foreground"}`}>{item.num}</span>
                    <span className="text-foreground">{item.label}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{item.src}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 border border-primary p-6">
              <h3 className="font-semibold text-primary mb-4">POTENTIAL REVENUE IMPACT</h3>
              <p className="text-2xl font-bold text-green-600 mb-2">
                $1.5B+ in addressable incremental revenue
              </p>
              <p className="text-muted-foreground mb-4">over a 5-year campaign window</p>
              <p className="text-sm text-muted-foreground italic mb-4">
                Without launching a single new electric product.
              </p>
              <p className="text-sm font-semibold text-green-600">
                Current revenue: ~$6.0B → Target: $7.5B by 2030
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary text-sm font-semibold tracking-wider mb-4">SUCCESS METRICS</p>
          <h2 className="text-2xl md:text-3xl font-serif italic text-foreground mb-8">
            How We Know It&apos;s Working
          </h2>

          <div className="space-y-6">
            {[
              {
                tier: "NORTH STAR METRIC",
                color: "border-green-500 bg-green-50",
                items: [
                  { name: "Annual Units Sold (New + CPO)", why: "Primary revenue driver. Baseline: ~177K/year. Target: 220K by Year 2, 280K by Year 5." },
                ],
              },
              {
                tier: "L1 - BUSINESS METRICS",
                color: "border-primary bg-primary/5",
                items: [
                  { name: "Revenue from Aspiring + Nostalgic segments", why: "New segment revenue tracked separately. Target: $500M+ from these segments by Year 3." },
                  { name: "CPO program volume", why: "Target: 15,000 CPO units in Year 1 as entry pipeline." },
                  { name: "Average buyer age", why: "Must decrease. Target: 47 (from 50) by Year 3." },
                ],
              },
              {
                tier: "L2 - CAMPAIGN METRICS",
                color: "border-amber-500 bg-amber-50",
                items: [
                  { name: "#MyLastFreeRide campaign reach", why: "Target: 50M+ impressions, Year 1. Organic share rate > 8%." },
                  { name: "First Ride program conversion", why: "% of First Riders who purchase within 12 months. Target: 8%." },
                ],
              },
              {
                tier: "COUNTER METRICS",
                color: "border-red-500 bg-red-50",
                items: [
                  { name: "Existing owner satisfaction (NPS)", why: "Counter: &apos;Enjoy Till It Lasts&apos; must not feel like abandonment. NPS must not fall below 55." },
                  { name: "Premium segment revenue", why: "Premium ($18K+) bikes must not decline. Entry must not cannibalize top of line." },
                ],
              },
            ].map((section, index) => (
              <div key={index} className={`border-l-4 p-6 ${section.color}`}>
                <h3 className="font-semibold text-foreground mb-4">{section.tier}</h3>
                <div className="space-y-3">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="w-2 h-2 bg-current rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <p className="font-medium text-foreground">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.why}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Outcomes */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif italic text-foreground mb-8">
            Target Outcomes - 5 Year Window
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { metric: "Annual Units Sold", before: "~177K", after: "280K+", color: "text-green-600" },
              { metric: "Annual Revenue", before: "$6.0B", after: "$7.5B+", color: "text-green-600" },
              { metric: "Avg. Buyer Age", before: "50 years", after: "47 years", color: "text-primary" },
              { metric: "New Segment Revenue", before: "$0", after: "$500M+", color: "text-green-600" },
            ].map((target, index) => (
              <div key={index} className="bg-background p-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">{target.metric}</p>
                <p className="text-muted-foreground">{target.before}</p>
                <p className="text-2xl my-2">→</p>
                <p className={`text-2xl font-bold ${target.color}`}>{target.after}</p>
              </div>
            ))}
          </div>

          <blockquote className="mt-8 text-center text-primary italic font-serif text-lg">
            &quot;The rumble of a V-Twin is not just a sound - it&apos;s a feeling that 2 billion people will never get to hear. Harley-Davidson should make sure as many as possible do. While they still can.&quot;
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif italic text-foreground mb-6">
            Interested in discussing this strategy?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Get In Touch
            </Link>
            <Link
              href="/#case-studies"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-foreground font-semibold border border-border hover:border-primary hover:text-primary transition-colors"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
