import Link from "next/link"
import { ArrowLeft, AlertCircle } from "lucide-react"

export default function YeezyNEECaseStudy() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/#case-studies" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Case Studies</span>
          </Link>
          <span className="text-sm font-semibold text-foreground">YEEZY - Anti-UX Case Study</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-amber-500 text-sm font-semibold tracking-wider mb-4">PRODUCT STRATEGY - EXPERIENCE DESIGN CASE STUDY</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-white">
              The Anti-User Experience
            </h1>
            <h2 className="text-2xl md:text-3xl font-serif italic font-bold mb-6 text-gray-300">
              Why Conventional UX Design Fails (And Sometimes Should)
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed mb-8">
              A critical case study examining YEEZY Seasons 1-10 as a deliberate rejection of user-centred design principles. When friction is intentional. When confusion is strategic. When the product succeeds precisely because it violates every UX law.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Peak Commercial Value</p>
              <p className="text-3xl font-bold text-amber-500">€1.5B</p>
              <p className="text-xs text-gray-400 mt-1">Annual revenue at peak (Adidas partnership)</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Resale Premium</p>
              <p className="text-3xl font-bold text-amber-500">200-600%</p>
              <p className="text-xs text-gray-400 mt-1">Average secondary market markup</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Product Category</p>
              <p className="text-3xl font-bold text-amber-500">Not</p>
              <p className="text-xs text-gray-400 mt-1">&quot;UX&quot; as traditionally defined</p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-red-50 border-b border-red-200 px-6 py-8">
        <div className="max-w-6xl mx-auto flex gap-4">
          <AlertCircle className="text-red-600 flex-shrink-0 mt-1" size={20} />
          <div>
            <h3 className="font-bold text-red-900 mb-2">Important Context</h3>
            <p className="text-sm text-red-800 leading-relaxed">
              This case study is a critical, analytical exercise in experience design theory examining the period 2015–2018. It does not endorse, celebrate, or ignore the deeply harmful conduct of Kanye West, including documented antisemitic statements in 2022 that resulted in a $1.5B loss and consequences for thousands of employees. That conduct is entirely outside the analytical frame. What this case study examines is a fascinating exception to conventional UX principles — and what that teaches us about the limits of user-centred design.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* The Paradox */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif italic font-bold text-foreground mb-8">The Core Paradox</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="font-bold text-foreground mb-4">Conventional UX Says:</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">•</span>
                    <span>Remove friction. Make tasks effortless.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">•</span>
                    <span>Be transparent. Users must understand what they&apos;re getting.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">•</span>
                    <span>Maximize clarity. Minimize cognitive load.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">•</span>
                    <span>Meet users where they are. Respect their mental models.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">•</span>
                    <span>Accessibility is non-negotiable.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-amber-50 p-8 rounded-lg border border-amber-200">
                <h3 className="font-bold text-foreground mb-4">YEEZY Seasons Did:</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="font-bold text-amber-600">•</span>
                    <span>Embraced intentional friction and confusion.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-amber-600">•</span>
                    <span>Obscured the product entirely (was it wearable? Performance art? Statement?).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-amber-600">•</span>
                    <span>Maximized ambiguity and interpretative difficulty.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-amber-600">•</span>
                    <span>Violently challenged established fashion conventions.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-amber-600">•</span>
                    <span>Made most garments deliberately unwearable in conventional contexts.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Commercial Paradox */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif italic font-bold text-foreground mb-8">The Commercial Paradox</h2>
            <div className="bg-background border border-border p-8 rounded-lg">
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                YEEZY Seasons violated every principle of conventional UX design. And yet:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-primary pl-6">
                  <p className="text-sm font-semibold text-foreground mb-2">What Happened</p>
                  <p className="text-sm text-muted-foreground">
                    The Yeezy Boost 350 became the most resold sneaker in the world (2019–2020, StockX). Secondary market premiums averaged 200–600%. Every release sold out in minutes. The brand partnership generated €1.5B in annual revenue — 7% of Adidas&apos;s entire global revenue.
                  </p>
                </div>
                <div className="border-l-4 border-amber-500 pl-6">
                  <p className="text-sm font-semibold text-foreground mb-2">Why It Shouldn&apos;t Have Worked</p>
                  <p className="text-sm text-muted-foreground">
                    By every metric of conventional product design — clarity, accessibility, user task completion, conversion funnel optimization — this product should have failed catastrophically. It did the opposite.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Seven UX Laws Violated */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif italic font-bold text-foreground mb-8">Seven Fundamental UX Laws Violated (Intentionally)</h2>
            
            <div className="space-y-4">
              <div className="bg-background border border-border p-6 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">1. Hick&apos;s Law (Minimize Decision Paralysis)</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>The Law:</strong> Reduction in choices speeds decision-making and reduces cognitive load.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>YEEZY Violation:</strong> Every Seasons presentation was deliberately cryptic about whether pieces were wearable, what size to purchase, or how they related to previous collections. The model data was illegible. The styling was contradictory. A user&apos;s first experience was maximum disorientation.
                </p>
              </div>

              <div className="bg-background border border-border p-6 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">2. Jakob Nielsen&apos;s Visibility of System Status</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>The Law:</strong> The system should always keep users informed about what is happening through real-time feedback.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>YEEZY Violation:</strong> There was zero feedback about what was happening. Was this a season? A statement? A collaboration? A subversion of fashion conventions? The Seasons announcement offered no clarity. The user arrived confused and left confused. That was the point.
                </p>
              </div>

              <div className="bg-background border border-border p-6 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">3. Don Norman&apos;s Discoverability Principle</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>The Law:</strong> The set of possible actions must be both discoverable and understandable.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>YEEZY Violation:</strong> The garments were not discoverable as &quot;wearable&quot; until you tried to wear them. Then, half the time, they weren&apos;t. The holes, the asymmetry, the unclear construction — none of it was immediately clear.
                </p>
              </div>

              <div className="bg-background border border-border p-6 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">4. The Gestalt Principle of Good Form</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>The Law:</strong> Users prefer clear, complete, recognizable forms.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>YEEZY Violation:</strong> Almost nothing was a &quot;complete&quot; form. Pieces were fragmentary, deconstructed, incomplete by conventional fashion standards. A Yeezy hoodie looked like it had been half-finished. A Yeezy shoe looked like it was designed by someone who had never seen a shoe.
                </p>
              </div>

              <div className="bg-background border border-border p-6 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">5. The Principle of Consistency</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>The Law:</strong> Consistent design reduces cognitive load and builds user confidence.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>YEEZY Violation:</strong> Every Season was visually and conceptually inconsistent with previous ones — sometimes radically so. A user who understood Season 1 was lost in Season 3. That incomprehension was strategic.
                </p>
              </div>

              <div className="bg-background border border-border p-6 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">6. The Peak-End Rule (Memorable Endings)</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>The Law:</strong> People judge experiences based on the peak emotional moment and how they end, not on the average of all moments.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>YEEZY Violation:</strong> The Seasons presentations were deliberately designed to end in ambiguity or discomfort. A model would walk out in a piece so transgressive or unclear that the audience left unsettled, not satisfied. That unsettlement was the brand impression.
                </p>
              </div>

              <div className="bg-background border border-border p-6 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">7. User Control and Freedom</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>The Law:</strong> Users should feel in control of the experience.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>YEEZY Violation:</strong> The experience was completely dictated by Ye. Sizing was non-standard. Availability was unpredictable. Prices were arbitrary. Users had zero agency — they either accepted the vision or didn&apos;t participate.
                </p>
              </div>
            </div>
          </div>

          {/* Why It Worked */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif italic font-bold text-foreground mb-8">Why It Worked (When UX Says It Shouldn&apos;t)</h2>
            
            <div className="bg-amber-50 border border-amber-200 p-8 rounded-lg">
              <p className="text-foreground mb-6 leading-relaxed">
                YEEZY Seasons succeeded because they satisfied a different human need than conventional product design addresses. That need was not &quot;help me complete a task efficiently.&quot; It was &quot;help me feel part of something culturally significant and artistically challenging.&quot;
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border-l-4 border-amber-500">
                  <p className="font-semibold text-foreground mb-2">Scarcity Created Urgency</p>
                  <p className="text-sm text-muted-foreground">
                    Conventional UX: Create infinite availability. YEEZY: Create radical scarcity. Every Seasons collection was released in limited quantities on unpredictable timelines. That scarcity created urgency that friction alone never could.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-amber-500">
                  <p className="font-semibold text-foreground mb-2">Ambiguity Created Interpretation</p>
                  <p className="text-sm text-muted-foreground">
                    Conventional UX: Clarity prevents misunderstanding. YEEZY: Ambiguity enabled interpretation. Every Season was intentionally cryptic about its meaning. That forced the observer to participate in interpretation, creating deeper engagement than clarity ever could.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-amber-500">
                  <p className="font-semibold text-foreground mb-2">Friction Created Exclusivity</p>
                  <p className="text-sm text-muted-foreground">
                    Conventional UX: Reduce friction. YEEZY: Maximize friction as a filter. Sizing was non-standard. Styling was unconventional. Most people couldn&apos;t wear it confidently. Only the culturally-aligned could navigate it. That friction became the moat of exclusivity.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-amber-500">
                  <p className="font-semibold text-foreground mb-2">Transgression Created Cult Status</p>
                  <p className="text-sm text-muted-foreground">
                    Conventional UX: Offend no one. YEEZY: Challenge everyone. The collections were intentionally transgressive to established fashion norms. That transgression created a in-group of adherents who felt they were part of a cultural movement, not just purchasing products.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Lessons */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif italic font-bold text-foreground mb-8">Three Lessons About UX Principles</h2>
            
            <div className="space-y-4">
              <div className="bg-background border border-border p-6 rounded-lg">
                <p className="font-semibold text-foreground mb-2">Lesson 1: UX Laws Assume a Shared Goal</p>
                <p className="text-sm text-muted-foreground">
                  Jakob Nielsen&apos;s usability heuristics, Don Norman&apos;s design principles, and modern UX methodologies are brilliant tools for designing products where the user has a named goal they want to achieve efficiently. But YEEZY proved that when the actual user need is &quot;to participate in cultural transgression&quot; or &quot;to own a piece of artistic provocation,&quot; the conventional toolkit breaks down. The user doesn&apos;t want clarity; they want challenge. They don&apos;t want accessibility; they want exclusivity.
                </p>
              </div>
              <div className="bg-background border border-border p-6 rounded-lg">
                <p className="font-semibold text-foreground mb-2">Lesson 2: Friction Can Be Intentional Design (Not a Bug)</p>
                <p className="text-sm text-muted-foreground">
                  In product design, friction is treated as a failure mode. In cultural products, friction can be strategic. It signals seriousness. It creates membership by requiring effort. YEEZY proved that a design can succeed not despite friction, but because of it — when that friction is strategic, intentional, and aligned with the brand&apos;s transgressive mission.
                </p>
              </div>
              <div className="bg-background border border-border p-6 rounded-lg">
                <p className="font-semibold text-foreground mb-2">Lesson 3: The Limits of User-Centered Design Thinking</p>
                <p className="text-sm text-muted-foreground">
                  User-centered design assumes the designer&apos;s job is to serve the user&apos;s goals and preferences. YEEZY proved the opposite: sometimes the designer&apos;s job is to challenge the user&apos;s preferences and expand their conception of what a product can be. This is not anti-user. It&apos;s user-expansion. The user who left a YEEZY Seasons presentation confused, challenged, and unsettled was having a more valuable experience than they would have had with a product designed purely to serve their existing preferences.
                </p>
              </div>
            </div>
          </div>

          {/* Case Study Tags */}
          <div className="text-center pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground">
              Tags: Anti-UX · Experience Design · Brand Friction · Cultural Product · Intentional Dissonance · Luxury Theory · UX Limits · Transgression as Strategy · Brand Mythology
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
