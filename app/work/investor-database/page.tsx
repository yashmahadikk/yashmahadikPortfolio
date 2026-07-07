"use client";

import { useMemo, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type Region = "IN" | "INT" | "SEA";
type Fit = "strong" | "good" | "moderate";

interface Fund {
  name: string;
  geography: string;
  region: Region;
  stage: string;
  check: string;
  thesis: string;
  fit: Fit;
  url: string;
}

const FUNDS: Fund[] = [
  { name: `Creator Ventures`, geography: `London, UK`, region: `INT`, stage: `Pre-Seed / Seed`, check: `$200K–$2.5M`, thesis: `AI-native consumer apps and creative production infrastructure. Portfolio: ElevenLabs, Creatify AI, Sync Labs, Unreal Labs. Global mandate.`, fit: `strong`, url: `https://www.creator.ventures` },
  { name: `Advancit Capital`, geography: `Boston / NYC, US`, region: `INT`, stage: `Seed / Early-stage`, check: `Variable`, thesis: `Co-founded by Shari Redstone (Paramount). Media, entertainment and technology exclusively. 171 investments incl. The Athletic, Wondery, Mux.`, fit: `strong`, url: `https://www.advancitcapital.com` },
  { name: `Spark Capital`, geography: `Boston / SF, US`, region: `INT`, stage: `Seed → Series A`, check: `$500K–$5M`, thesis: `Anti-thesis, non-consensus bets. Explicitly invests in AI, consumer, media and future of work. $2.3B AUM. 45 unicorns.`, fit: `strong`, url: `https://www.sparkcapital.com` },
  { name: `Founders Factory`, geography: `London, UK (global)`, region: `INT`, stage: `Pre-Seed / Accelerator`, check: `£250K–£1M`, thesis: `Dedicated media and entertainment vertical (partners: Sky, Global Media). Consumer and AI tracks. Builds companies alongside founders.`, fit: `strong`, url: `https://foundersfactory.com` },
  { name: `Conviction (Sarah Guo)`, geography: `San Francisco, US`, region: `INT`, stage: `Seed → Series A`, check: `$1M–$25M`, thesis: `AI-native "Software 3.0". $230M Fund II (2025). Portfolio: Mistral, HeyGen, Pika, Sierra, Harvey, Cognition.`, fit: `strong`, url: `https://www.conviction.com` },
  { name: `Betaworks`, geography: `New York, US`, region: `INT`, stage: `Seed / Studio`, check: `Studio model`, thesis: `Next-gen internet, generative AI, media and consumer apps. Runs AI Camp accelerator. Deep media and entertainment DNA since founding.`, fit: `strong`, url: `https://betaworks.com/camp` },
  { name: `Eximius Ventures`, geography: `India`, region: `IN`, stage: `Pre-Seed`, check: `$500K–$1M`, thesis: `India's only fund explicitly backing Media & Gaming alongside FinTech, SaaS and HealthTech. First institutional cheque specialist.`, fit: `strong`, url: `https://eximiusvc.com` },
  { name: `Sound Ventures`, geography: `Beverly Hills, US`, region: `INT`, stage: `Seed / Series A`, check: `$100K–$10M`, thesis: `Ashton Kutcher + Guy Oseary. $240M AI Fund. "AI in entertainment, an industry we know well." Portfolio: OpenAI, Anthropic, StabilityAI.`, fit: `strong`, url: `https://www.soundventures.com` },
  { name: `Huddle Ventures`, geography: `India (Gurugram)`, region: `IN`, stage: `Pre-Seed / Seed`, check: `Up to $1M`, thesis: `Sector-agnostic. Invests pre-revenue and pre-launch. First institutional check specialist. 83+ investments across India.`, fit: `good`, url: `https://huddleventures.vc` },
  { name: `Merak Ventures`, geography: `India (Delhi)`, region: `IN`, stage: `Pre-Seed / Seed`, check: `$500K–$1.5M`, thesis: `Explicitly lists creator economy as a focus sector alongside AI and emerging tech. Sector-agnostic early-stage fund.`, fit: `good`, url: `https://merakventures.com` },
  { name: `Antler India`, geography: `India (Bengaluru)`, region: `IN`, stage: `Pre-Seed`, check: `~₹4 Cr for 11%`, thesis: `Backs founders before product exists. 2-week Bengaluru residency. Decision in 3 weeks. AI-first cohort 2025. INR 2L grant + $1M+ in perks.`, fit: `good`, url: `https://www.antler.co/residency/india` },
  { name: `Blume Ventures`, geography: `India`, region: `IN`, stage: `Pre-Seed → Series A`, check: `$500K–$3M`, thesis: `$175M Fund V (Oct 2025). AI, B2B SaaS, consumer, health. Operator-style guidance from day one. One of India's most active early-stage funds.`, fit: `good`, url: `https://blume.vc` },
  { name: `NFX`, geography: `San Francisco, US`, region: `INT`, stage: `Pre-Seed / Seed`, check: `$1M–$5M`, thesis: `$325M Fund IV (Oct 2025). Network effects thesis. Consumer AI, AI agents. 25 unicorns. Submit via fast.nfx.com.`, fit: `good`, url: `https://fast.nfx.com` },
  { name: `Lerer Hippeau`, geography: `New York, US`, region: `INT`, stage: `Pre-Seed / Seed`, check: `$1.1M–$1.6M`, thesis: `$200M Fund IX (Apr 2025). Consumer and enterprise. Founder-friendly equity terms. Fast decision cycles.`, fit: `good`, url: `https://lererhippeau.com` },
  { name: `Gradient Ventures`, geography: `Palo Alto, US`, region: `INT`, stage: `Pre-Seed / Seed`, check: `AI-standard seed`, thesis: `Google's AI-only fund. $220M Fund V (Mar 2026). AI applications, agentic platforms. Portfolio: Lambda, Writer, Krea, CentML.`, fit: `good`, url: `https://gradient.com` },
  { name: `Y Combinator`, geography: `Global (US)`, region: `INT`, stage: `Seed / Accelerator`, check: `$500K standard`, thesis: `40% of W2024 batch was AI. 3-month program + Demo Day access to top VCs. Open applications twice a year.`, fit: `good`, url: `https://www.ycombinator.com/apply` },
  { name: `Menlo Ventures`, geography: `San Francisco, US`, region: `INT`, stage: `Seed → Series A`, check: `Variable`, thesis: `Co-led Suno's $250M round. AI creator tools and enterprise apps. Launched $100M Anthology Fund with Anthropic.`, fit: `good`, url: `https://menlovc.com` },
  { name: `AI Seed`, geography: `Europe (EU + North America)`, region: `INT`, stage: `Pre-Seed → Series A`, check: `Seed range`, thesis: `Pure-play AI only. Founded by founders with successful exits. Bridges EU and Silicon Valley. 27 active portfolio companies.`, fit: `good`, url: `https://aiseed.co` },
  { name: `First Round Capital`, geography: `San Francisco, US`, region: `INT`, stage: `Pre-Seed / Seed`, check: `~$2M avg`, thesis: `Pioneered founder-friendly seed terms. Extensive operational support. Consumer AI, developer tools, vertical enterprise AI.`, fit: `good`, url: `https://firstround.com` },
  { name: `Kae Capital`, geography: `India (Mumbai)`, region: `IN`, stage: `Seed → Series A`, check: `$1.11M avg seed`, thesis: `14+ years India early-stage investing. Explicitly backs AI/ML, Consumer/Social, Enterprise. 116 companies. Backed Tata 1MG.`, fit: `good`, url: `https://kae-capital.com` },
  { name: `BoxGroup`, geography: `New York, US`, region: `INT`, stage: `Seed`, check: `$500K–$1M`, thesis: `NYC's most prolific seed firm. High conviction on consumer and consumer-social. Lean partner-only structure. Fast decisions.`, fit: `good`, url: `https://www.boxgroup.com` },
  { name: `Kindred Ventures`, geography: `San Francisco, US`, region: `INT`, stage: `Seed / Studio`, check: `$500K–$2M`, thesis: `Concentrated portfolio. Led Creatify's seed round. Partners are founders' first call. AI consumer and creative tech focus.`, fit: `good`, url: `https://kindredventures.co` },
  { name: `Village Global`, geography: `San Francisco, US`, region: `INT`, stage: `Pre-Seed / Seed`, check: `Pre-seed range`, thesis: `LP network includes Bezos and Zuckerberg. Broad tech. 2-3 week decisions. Strong network for follow-on rounds.`, fit: `good`, url: `https://www.villageglobal.com` },
  { name: `Pear VC`, geography: `San Francisco, US`, region: `INT`, stage: `Pre-Seed / Seed`, check: `$500K–$2M`, thesis: `Pre-seed specialist. Consumer and AI thesis. Finds founders before ideas are polished. PearX structured program.`, fit: `good`, url: `https://pear.vc` },
  { name: `Northzone`, geography: `Stockholm / London / NYC`, region: `INT`, stage: `Seed → Series A`, check: `$500K–$5M`, thesis: `European-US crossover. Consumer internet, media, fintech, AI. Backed Spotify early, iZettle, Trustpilot, Kahoot.`, fit: `good`, url: `https://northzone.com` },
  { name: `M13 Company`, geography: `Los Angeles, US`, region: `INT`, stage: `Seed / Series A`, check: `Variable`, thesis: `$1.9B AUM. Consumer + creator economy + AI. 200+ investments. Backed Lyft, Ring, Pinterest. TIME's Top 100 US VCs 2025.`, fit: `good`, url: `https://www.m13.co` },
  { name: `Floodgate`, geography: `Menlo Park, US`, region: `INT`, stage: `Seed`, check: `$150K–$1M`, thesis: `Pioneered micro-VC. "Thunder lizards" + "pattern breakers" thesis. AI, consumer. Backed Twitter, Twitch, Refinery29, Lyft.`, fit: `good`, url: `https://www.floodgate.com` },
  { name: `Jungle Ventures`, geography: `Singapore + India`, region: `SEA`, stage: `Seed → Growth`, check: `$500K–$20M`, thesis: `$1B AUM. Consumer + B2B. Backed Pratilipi (India's #1 storytelling platform, 30M readers) and BookMyShow SEA.`, fit: `good`, url: `https://www.jungle.vc` },
  { name: `Initialized Capital`, geography: `San Francisco, US`, region: `INT`, stage: `Seed`, check: `$600K–$1.1M`, thesis: `Garry Tan (ex-YC president) + Alexis Ohanian. AI applications and consumer. 13 AI seed checks in 2025–26.`, fit: `good`, url: `https://initialized.com` },
  { name: `Homebrew VC`, geography: `San Francisco, US`, region: `INT`, stage: `Seed`, check: `$500K–$2M`, thesis: `Satya Patel (ex-Google, ex-Twitter) + Hunter Walk (ex-YouTube PM). Consumer + AI. Product-led founding teams.`, fit: `good`, url: `https://www.homebrew.co` },
  { name: `Lakestar`, geography: `Zurich / London / Berlin`, region: `INT`, stage: `Seed → Series B`, check: `$500K–$10M`, thesis: `Klaus Hommels. Backed Spotify and Airbnb early. Consumer internet, AI and media. European HQ, global mandate.`, fit: `good`, url: `https://www.lakestar.com` },
  { name: `Titan Capital`, geography: `India`, region: `IN`, stage: `Seed → Series A`, check: `$250K–$1.5M`, thesis: `Kunal Shah (CRED founder) backed. Consumer brands and social platforms. Insurgent brands thesis. Fast decision-making.`, fit: `good`, url: `https://titancap.in` },
  { name: `Goodwater Capital`, geography: `San Francisco, US`, region: `INT`, stage: `Seed → Series A`, check: `$500K–$5M`, thesis: `Global consumer tech. Backed LINE, KakaoTalk, Paytm, Twitter early. Consumer platforms across 20+ countries incl. India.`, fit: `good`, url: `https://www.goodwatercap.com` },
  { name: `3one4 Capital`, geography: `India (Bengaluru)`, region: `IN`, stage: `Seed → Series A`, check: `$500K–$5M`, thesis: `Data-driven, ESG-first. SaaS, consumer, fintech, AI. Fund I DPI leads Indian VC benchmarks. 22 investments in 2025 alone.`, fit: `moderate`, url: `https://3one4.com` },
  { name: `100X.VC`, geography: `India`, region: `IN`, stage: `Pre-Seed`, check: `₹1.25 Cr (~$150K)`, thesis: `First VC to use India SAFE notes. AI, consumer, enterprise, fintech. Very early-stage conviction across 9 investment classes.`, fit: `moderate`, url: `https://www.100x.vc` },
  { name: `India Quotient`, geography: `India`, region: `IN`, stage: `Pre-Seed / Seed`, check: `Small institutional`, thesis: `India-first consumer, vernacular internet, D2C. Backed ShareChat, Sugar Cosmetics. First or early institutional investor.`, fit: `moderate`, url: `https://iqfund.in` },
  { name: `BeyondSeed`, geography: `Singapore / India`, region: `IN`, stage: `Seed`, check: `Avg ~$263K`, thesis: `Growth engine from seed to Series A. Consumer, D2C, enterprise. 53-company portfolio. Active India deal flow.`, fit: `moderate`, url: `https://beyondseed.com` },
  { name: `Stellaris Venture Partners`, geography: `India`, region: `IN`, stage: `Seed → Series A`, check: `Up to $10M`, thesis: `Consumer internet, enterprise software, fintech, healthcare. Deep AI conviction from PMF stage.`, fit: `moderate`, url: `https://stellarisvp.com` },
  { name: `Fireside Ventures`, geography: `India`, region: `IN`, stage: `Seed → Series A`, check: `Variable`, thesis: `Consumer brands and D2C. Backed boAt, Mamaearth, Yoga Bar. Rs 600 crore Fund III closed Aug 2025.`, fit: `moderate`, url: `https://firesideventures.com` },
  { name: `Peak XV Partners`, geography: `India / SEA`, region: `IN`, stage: `Seed → Growth`, check: `Up to $5M seed`, thesis: `$1.3B raised (2025). AI, fintech, consumer. 450+ portfolio cos, 35 IPOs. Surge program for early stage founders.`, fit: `moderate`, url: `https://surge.peakxv.com` },
  { name: `General Catalyst`, geography: `Global (US + India)`, region: `INT`, stage: `Seed → Growth`, check: `$2M–$8M seed`, thesis: `Merged with Venture Highway (India). Backed Anthropic. Healthcare AI, enterprise AI agents, financial services AI.`, fit: `moderate`, url: `https://generalcatalyst.com` },
  { name: `Khosla Ventures`, geography: `Menlo Park, US`, region: `INT`, stage: `Seed → Series A`, check: `$650M seed fund`, thesis: `AI healthcare, robotics, frontier models. Backed Sarvam AI (India). High conviction with large early checks.`, fit: `moderate`, url: `https://khoslaventures.com` },
  { name: `Accel`, geography: `Global (US + India)`, region: `INT`, stage: `Seed → Series A`, check: `Variable`, thesis: `India + US cross-border. PLG AI products, developer tools. Co-led Cursor $2.3B Series D. Active Accel India office.`, fit: `moderate`, url: `https://accel.com` },
  { name: `WaterBridge Ventures`, geography: `India (Delhi)`, region: `IN`, stage: `Seed → Series A`, check: `INR 1–10 Cr`, thesis: `Backed Eloelo (social media platform), Atlan, Magicpin. Consumer-facing mobile apps in media and telecom.`, fit: `moderate`, url: `https://waterbridge.vc` },
  { name: `Kalaari Capital`, geography: `India (Bengaluru)`, region: `IN`, stage: `Seed → Series A`, check: `$500K–$5M`, thesis: `$160M fund. Backed ScoopWhoop (media), Dream11, Cure.fit. Mobile and technology. Hands-on mentorship and market access.`, fit: `moderate`, url: `https://kalaari.com` },
  { name: `Chiratae Ventures`, geography: `India`, region: `IN`, stage: `Seed → Series A`, check: `$500K–$2M`, thesis: `Chiratae Sonic: 48-hour turnaround on seed checks. $150M Fund V. Consumer media, healthtech, AI, robotics.`, fit: `moderate`, url: `https://www.chiratae.com` },
  { name: `YourNest Venture Capital`, geography: `India`, region: `IN`, stage: `Seed`, check: `INR 300 Cr fund`, thesis: `AI, IoT, SaaS, Robotics. Backed Uniphore ($140M Series D), Locus, myGate. INR 300 crore Fund II actively deploying.`, fit: `moderate`, url: `https://yournest.in` },
  { name: `Axilor Ventures`, geography: `India`, region: `IN`, stage: `Seed / Accelerator`, check: `$250K–$500K`, thesis: `Infosys co-founders backed. 1,000+ ideas per year, backs 8–12. 60+ portfolio. Enterprise tech, B2B commerce.`, fit: `moderate`, url: `https://axilor.com` },
  { name: `Global Founders Capital`, geography: `Berlin, Germany (global)`, region: `INT`, stage: `Seed → Growth`, check: `Avg $4.88M seed`, thesis: `Rocket Internet-backed. Stage-agnostic, global. 613 portfolio companies. 28 unicorns. Backed Canva, Slack, Revolut.`, fit: `moderate`, url: `https://www.globalfounderscapital.com` },
  { name: `Monk's Hill Ventures`, geography: `Singapore / SEA`, region: `SEA`, stage: `Seed → Series A`, check: `$1M–$5M`, thesis: `~$1B AUM. AI, fintech, consumer. 56 companies. SEA-focused. India gateway. Scout program for pre-seed deals.`, fit: `moderate`, url: `https://monkshill.com` },
  { name: `Golden Gate Ventures`, geography: `Singapore / SEA`, region: `SEA`, stage: `Seed → Series A`, check: `$1M–$3M`, thesis: `$250M. Consumer internet, entertainment (backed Gojek GoPlay). SEA and India gateway. 124+ investments.`, fit: `moderate`, url: `https://goldengate.vc` },
  { name: `Wavemaker Partners`, geography: `Singapore / LA, US`, region: `SEA`, stage: `Pre-Seed → Series A`, check: `$500K–$2M`, thesis: `$600M+ AUM. Enterprise, deep tech, SEA. 400+ investments. India coverage. Wavemaker Ventures fund.`, fit: `moderate`, url: `https://wavemakerpartners.com` },
  { name: `500 Global`, geography: `Global (Palo Alto, US)`, region: `INT`, stage: `Seed`, check: `$100K–$500K`, thesis: `Truly global. 5,000+ companies in 80+ countries. Backed Grab, Bukalapak. SEA and India active. Fast turnaround.`, fit: `moderate`, url: `https://500.co` },
  { name: `BEENEXT`, geography: `Singapore (India + SEA + Japan)`, region: `SEA`, stage: `Seed`, check: `$500K–$2M`, thesis: `Founder-first VC. India, SEA, Japan, US cross-border. Consumer internet, fintech, SaaS. $15B+ portfolio value.`, fit: `moderate`, url: `https://beenext.com` },
  { name: `East Ventures`, geography: `Singapore / Jakarta`, region: `SEA`, stage: `Seed → Growth`, check: `Seed range`, thesis: `Sector-agnostic. 300+ companies across SEA and Japan. India gateway. Backed Tokopedia, Kopi Kenangan.`, fit: `moderate`, url: `https://east.vc` },
  { name: `SpeedInvest`, geography: `Vienna, Austria (global)`, region: `INT`, stage: `Pre-Seed / Seed`, check: `€250K–€2M`, thesis: `European HQ, global mandate. Consumer internet, AI, fintech, deep tech. Portfolio: Spendesk, Refurbed, GoStudent.`, fit: `moderate`, url: `https://speedinvest.com` },
  { name: `Techstars`, geography: `Global (Denver, US)`, region: `INT`, stage: `Seed / Accelerator`, check: `$220K standard`, thesis: `World's largest pre-seed accelerator. 3,700+ portfolio companies. Industry programs incl. media. Active in India.`, fit: `moderate`, url: `https://www.techstars.com/accelerators` },
  { name: `Lightspeed India`, geography: `India / SEA / US`, region: `IN`, stage: `Seed → Growth`, check: `$1M–$15M`, thesis: `$500M+ India fund. Consumer, enterprise, health. Backed Oyo, Udaan, ShareChat. India-first but global reach.`, fit: `moderate`, url: `https://lsvp.com` },
  { name: `Unicorn India Ventures`, geography: `India`, region: `IN`, stage: `Seed → Series A`, check: `Variable`, thesis: `IIT Madras anchor fund (₹600 crore). Bridges lab-to-market. Tech, AI, consumer. Active deployment.`, fit: `moderate`, url: `https://www.unicornivc.com` },
  { name: `Nexus Venture Partners`, geography: `US + India`, region: `IN`, stage: `Seed → Series A`, check: `$250K–$10M`, thesis: `$700M Fund VIII (Dec 2025). Half for US AI, half for India consumer and fintech. 35 investments in 2025 alone.`, fit: `moderate`, url: `https://nexusvp.com` },
  { name: `Precursor Ventures`, geography: `San Francisco, US`, region: `INT`, stage: `Pre-Seed / Seed`, check: `Up to $5M`, thesis: `Invests before product exists. People-first thesis. 400+ companies. $66M Fund V (Apr 2025). Backs first-time founders.`, fit: `moderate`, url: `https://precursorvc.com` },
  { name: `100Unicorns / VCats`, geography: `India (Mumbai)`, region: `IN`, stage: `Seed / Accelerator`, check: `INR 6–50M`, thesis: `India's largest accelerator VC. $200M Fund II. 127 portfolio cos. VideoVerse exit (BlackRock-funded). Global Demo Days.`, fit: `moderate`, url: `https://100unicorns.in` },
  { name: `DSG Consumer Partners`, geography: `India + SEA`, region: `IN`, stage: `Seed → Series A`, check: `$1M–$5M`, thesis: `Deepak Shahdadpuri. 60+ consumer brands. D2C focus. Backed Good Glamm Group, Mamaearth, Paper Boat.`, fit: `moderate`, url: `https://dsgcp.com` },
  { name: `Saama Capital`, geography: `India (Bengaluru)`, region: `IN`, stage: `Seed → Series A`, check: `Variable`, thesis: `Consumer and retail focus. 91 portfolio companies. Backed BlueStone (IPO 2025), Snapdeal. Patient long-term India investor.`, fit: `moderate`, url: `https://saama.vc` },
  { name: `Entrepreneur First (EF)`, geography: `Global (London / Singapore)`, region: `INT`, stage: `Pre-Seed / Talent`, check: `~$250K`, thesis: `Backs individuals before companies. Idea-to-funded in 12 weeks. Global portfolio across 8 cities. $3B+ portfolio value.`, fit: `moderate`, url: `https://joinef.com` },
  { name: `RTP Global`, geography: `NYC / London / Mumbai`, region: `INT`, stage: `Seed → Series B`, check: `$1M–$15M`, thesis: `Borderless, 16 cities incl. Mumbai. AI, consumer, fintech. Active in India. Ex-founders with exits as GPs.`, fit: `moderate`, url: `https://rtp.global` },
  { name: `Vertex Ventures SEA & India`, geography: `Singapore + India`, region: `SEA`, stage: `Seed → Series A`, check: `$1M–$10M`, thesis: `Temasek Holdings backed. AI, fintech, consumer. Active India vertical. Regional champion builder.`, fit: `moderate`, url: `https://vertex.vc` },
  { name: `Quest Ventures`, geography: `Singapore`, region: `SEA`, stage: `Pre-Seed / Seed`, check: `$500K–$2M`, thesis: `Consumer internet and digital commerce in SEA. Backed ShopBack, Carousell. Pre-seed to seed. Fast decisions.`, fit: `moderate`, url: `https://questventures.vc` },
  { name: `Info Edge Ventures`, geography: `India`, region: `IN`, stage: `Seed → Series A`, check: `$500K–$2M`, thesis: `Investment arm of Naukri.com/Info Edge. $100M fund. Consumer internet and SaaS. Backed Zomato early.`, fit: `moderate`, url: `https://infoedgeventures.com` },
  { name: `Hustle Fund`, geography: `San Francisco, US`, region: `INT`, stage: `Pre-Seed`, check: `$25K–$500K`, thesis: `Pre-seed specialist. Responses within days. Consumer and tech. "Unglamorous hustle" thesis. Rolling open applications.`, fit: `moderate`, url: `https://www.hustlefund.vc` },
  { name: `Alpha JWC Ventures`, geography: `Indonesia / SEA`, region: `SEA`, stage: `Seed → Series B`, check: `$1M–$5M`, thesis: `Indonesia-first, broader SEA. Consumer and fintech. Backed OVO, Julo, many SEA consumer leaders.`, fit: `moderate`, url: `https://www.alphajwc.com` },
  { name: `IAN Fund`, geography: `India`, region: `IN`, stage: `Seed`, check: `$250K–$1.5M`, thesis: `Indian Angel Network's institutional arm. 200+ HNI angels. Sector-agnostic. Fast India-first decisions.`, fit: `moderate`, url: `https://www.ianfund.in` },
  { name: `Z47 (ex-Matrix India)`, geography: `India`, region: `IN`, stage: `Seed → Series A`, check: `$500K–$5M`, thesis: `Rebranded from Matrix Partners India in 2024. Backed Razorpay, Ola, Country Delight. Consumer, fintech, B2B.`, fit: `moderate`, url: `https://z47.com` },
  { name: `Gobi Ventures`, geography: `Hong Kong / Asia`, region: `INT`, stage: `Seed → Growth`, check: `$1M–$10M`, thesis: `17 funds, 380+ startups across Asia. AI, consumer, fintech. Active India and SEA presence. Asian consumer platform focus.`, fit: `moderate`, url: `https://gobivc.com` },
  { name: `Artha India Ventures`, geography: `India`, region: `IN`, stage: `Seed`, check: `$250K–$500K`, thesis: `Angel network-backed seed fund. Consumer and fintech. 250+ investments. Emerging India consumer brands.`, fit: `moderate`, url: `https://arthaindia.com` },
  { name: `Seedcamp`, geography: `London, UK (Europe)`, region: `INT`, stage: `Pre-Seed / Seed`, check: `€100K–€2M`, thesis: `Europe's leading early-stage fund. Backed Wise (TransferWise), Revolut, UiPath early. Broad tech mandate, global reach.`, fit: `moderate`, url: `https://seedcamp.com` },
];

/* ------------------------------------------------------------------ */
/*  Static config                                                      */
/* ------------------------------------------------------------------ */

type TabId = "all" | Region | Fit;

const TABS: { id: TabId; label: string }[] = [
  { id: "all", label: `All ${FUNDS.length} Funds` },
  { id: "IN", label: "India" },
  { id: "INT", label: "International" },
  { id: "SEA", label: "Singapore / SEA" },
  { id: "strong", label: "Strong Fit" },
  { id: "good", label: "Good Fit" },
  { id: "moderate", label: "Moderate" },
];

const FIT_META: Record<Fit, { label: string }> = {
  strong: { label: "Strong AGAR fit" },
  good: { label: "Good fit" },
  moderate: { label: "Moderate fit" },
};

const FIT_SECTION_COPY: Record<Fit, string> = {
  strong: "Strong AGAR fit — AI-native consumer or media thesis",
  good: "Good fit — AI or consumer tech focus",
  moderate: "Moderate fit — broad tech, worth targeting",
};

const REGION_META: Record<Region, { label: string }> = {
  IN: { label: "India" },
  INT: { label: "International" },
  SEA: { label: "SEA" },
};

/* ------------------------------------------------------------------ */
/*  Small presentational pieces                                        */
/* ------------------------------------------------------------------ */

function FitBadge({ fit }: { fit: Fit }) {
  return <span className={`ic-fitbadge ic-fitbadge--${fit}`}>{FIT_META[fit].label}</span>;
}

function RegionTag({ region }: { region: Region }) {
  return <span className="ic-region">{REGION_META[region].label}</span>;
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function InvestorDatabase() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<TabId>("all");

  const metrics = useMemo(
    () => [
      { label: "Total Funds", value: FUNDS.length },
      { label: "India", value: FUNDS.filter((f) => f.region === "IN").length },
      { label: "International", value: FUNDS.filter((f) => f.region === "INT").length },
      { label: "Singapore / SEA", value: FUNDS.filter((f) => f.region === "SEA").length },
      { label: "Strong AGAR Fit", value: FUNDS.filter((f) => f.fit === "strong").length },
    ],
    []
  );

  const filtered = useMemo(() => {
    let result = FUNDS;
    if (tab === "IN" || tab === "INT" || tab === "SEA") {
      result = result.filter((f) => f.region === tab);
    } else if (tab !== "all") {
      result = result.filter((f) => f.fit === tab);
    }
    const q = query.trim().toLowerCase();
    if (q) {
      result = result.filter((f) =>
        `${f.name} ${f.geography} ${f.thesis} ${f.stage} ${f.check}`.toLowerCase().includes(q)
      );
    }
    return result;
  }, [tab, query]);

  const grouped = useMemo(() => {
    const buckets: Record<Fit, Fund[]> = { strong: [], good: [], moderate: [] };
    filtered.forEach((f) => buckets[f.fit].push(f));
    return buckets;
  }, [filtered]);

  const order: Fit[] = ["strong", "good", "moderate"];

  return (
    <div className="ic-root">
      {/* ---------------------------------------------------------- */}
      {/* Hero                                                        */}
      {/* ---------------------------------------------------------- */}
      <header className="ic-hero">
        <p className="ic-eyebrow">Investor Dossier</p>
        <h1 className="ic-title">The Investor Database</h1>
        <p className="ic-subtitle">
          {FUNDS.length} seed and pre-seed funds across India, SEA, and beyond — ranked by fit for AGAR.
        </p>
      </header>

      {/* ---------------------------------------------------------- */}
      {/* Stat panels                                                 */}
      {/* ---------------------------------------------------------- */}
      <div className="ic-stats">
        {metrics.map((m) => (
          <div className="ic-stat-panel" key={m.label}>
            <span className="ic-stat-value">{m.value}</span>
            <span className="ic-stat-label">{m.label}</span>
          </div>
        ))}
      </div>

      {/* ---------------------------------------------------------- */}
      {/* Controls                                                    */}
      {/* ---------------------------------------------------------- */}
      <div className="ic-controls">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, thesis, or geography"
          className="ic-search"
          aria-label="Search funds by name, thesis, or geography"
        />
        <div className="ic-pills" role="tablist" aria-label="Filter funds">
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              className={`ic-pill${tab === t.id ? " is-active" : ""}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="ic-legend">
        {order.map((fit) => (
          <div className="ic-legend-item" key={fit}>
            <span className={`ic-legend-dot ic-legend-dot--${fit}`} />
            {FIT_SECTION_COPY[fit]}
          </div>
        ))}
      </div>

      <p className="ic-count">
        Showing {filtered.length} fund{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* ---------------------------------------------------------- */}
      {/* Results                                                     */}
      {/* ---------------------------------------------------------- */}
      {filtered.length === 0 ? (
        <div className="ic-empty">
          <p className="ic-empty-title">No results</p>
          <p>No funds match your search. Try another term or filter.</p>
        </div>
      ) : (
        order.map((fit) =>
          grouped[fit].length === 0 ? null : (
            <section key={fit} className="ic-section">
              <div className="ic-banner">
                <span>{FIT_SECTION_COPY[fit]}</span>
              </div>
              <div className="ic-grid">
                {grouped[fit].map((fund) => (
                  <article className="ic-card" key={fund.name}>
                    <div className="ic-card-top">
                      <h3 className="ic-card-name">{fund.name}</h3>
                      <RegionTag region={fund.region} />
                    </div>
                    <FitBadge fit={fund.fit} />
                    <div className="ic-card-meta">
                      <span className="ic-meta-stage">{fund.stage}</span>
                      <span className="ic-meta-check">{fund.check}</span>
                    </div>
                    <p className="ic-card-geo">{fund.geography}</p>
                    <p className="ic-card-thesis">{fund.thesis}</p>
                    <a
                      className="ic-card-link"
                      href={fund.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit site <ArrowIcon />
                    </a>
                  </article>
                ))}
              </div>
            </section>
          )
        )
      )}

      {/* ---------------------------------------------------------- */}
      {/* Styles                                                      */}
      {/* ---------------------------------------------------------- */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&family=Roboto+Mono:wght@400;500;700&display=swap");

        .ic-root {
          --ink: #111111;
          --paper: #ffffff;
          --line: #111111;
          --muted: #6b6b6b;
          --hairline: #dcdcdc;
          --panel: #fafafa;
          font-family: "Roboto", "Segoe UI", sans-serif;
          color: var(--ink);
          background-color: var(--paper);
          padding: 3rem 1.5rem 4rem;
          max-width: 1280px;
          margin: 0 auto;
          border: 1px solid var(--line);
        }

        /* ---------- Hero ---------- */
        .ic-hero {
          border-bottom: 1px solid var(--line);
          padding-bottom: 1.75rem;
          margin-bottom: 2rem;
        }
        .ic-eyebrow {
          font-family: "Roboto Mono", monospace;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--muted);
          margin: 0 0 0.9rem;
        }
        .ic-title {
          font-weight: 900;
          letter-spacing: -0.01em;
          font-size: clamp(2rem, 5vw, 3.25rem);
          line-height: 1.05;
          margin: 0 0 0.9rem;
          color: var(--ink);
        }
        .ic-subtitle {
          max-width: 620px;
          font-size: 0.95rem;
          font-weight: 400;
          color: var(--muted);
          margin: 0;
          line-height: 1.55;
        }

        /* ---------- Stats ---------- */
        .ic-stats {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0;
          margin: 0 0 2rem;
          border: 1px solid var(--line);
        }
        .ic-stat-panel {
          background: var(--paper);
          padding: 1rem 0.9rem;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 3px;
          border-right: 1px solid var(--line);
        }
        .ic-stat-panel:last-child {
          border-right: none;
        }
        .ic-stat-value {
          font-weight: 900;
          font-size: 1.9rem;
          line-height: 1;
          color: var(--ink);
        }
        .ic-stat-label {
          font-family: "Roboto Mono", monospace;
          font-size: 0.62rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--muted);
        }

        /* ---------- Controls ---------- */
        .ic-controls {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
          margin-bottom: 1rem;
        }
        .ic-search {
          flex: 1;
          min-width: 220px;
          max-width: 340px;
          font-family: "Roboto", sans-serif;
          font-weight: 400;
          font-size: 0.85rem;
          padding: 0.6rem 0.9rem;
          border: 1px solid var(--line);
          border-radius: 0;
          background: var(--paper);
          outline: none;
          color: var(--ink);
        }
        .ic-search::placeholder {
          color: #9a9a9a;
        }
        .ic-search:focus-visible {
          outline: 2px solid var(--ink);
          outline-offset: 1px;
        }
        .ic-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .ic-pill {
          font-family: "Roboto Mono", monospace;
          font-weight: 500;
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          background: var(--paper);
          border: 1px solid var(--line);
          border-radius: 0;
          padding: 6px 12px;
          cursor: pointer;
          color: var(--ink);
        }
        .ic-pill:hover {
          background: var(--panel);
        }
        .ic-pill.is-active {
          background: var(--ink);
          color: var(--paper);
        }
        .ic-pill:focus-visible {
          outline: 2px solid var(--ink);
          outline-offset: 2px;
        }

        /* ---------- Legend ---------- */
        .ic-legend {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          margin-bottom: 0.6rem;
        }
        .ic-legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.7rem;
          font-weight: 400;
          color: var(--muted);
        }
        .ic-legend-dot {
          width: 8px;
          height: 8px;
          border: 1px solid var(--ink);
          flex-shrink: 0;
        }
        .ic-legend-dot--strong {
          background: var(--ink);
        }
        .ic-legend-dot--good {
          background: #808080;
        }
        .ic-legend-dot--moderate {
          background: var(--paper);
        }
        .ic-count {
          font-family: "Roboto Mono", monospace;
          font-size: 0.7rem;
          color: var(--muted);
          margin: 0 0 1.4rem;
        }

        /* ---------- Sections ---------- */
        .ic-section {
          margin-bottom: 2rem;
        }
        .ic-banner {
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          padding: 0.55rem 0;
          margin: 0 0 1.1rem;
        }
        .ic-banner span {
          font-weight: 700;
          letter-spacing: 0.01em;
          font-size: 0.85rem;
          text-transform: uppercase;
          color: var(--ink);
        }

        .ic-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
          gap: 1px;
          background: var(--hairline);
          border: 1px solid var(--hairline);
        }

        /* ---------- Card ---------- */
        .ic-card {
          position: relative;
          background: var(--paper);
          border: none;
          border-radius: 0;
          padding: 1.1rem 1.1rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .ic-card:hover {
          background: var(--panel);
        }

        .ic-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 8px;
        }
        .ic-card-name {
          font-weight: 700;
          font-size: 1rem;
          line-height: 1.2;
          margin: 0;
          letter-spacing: -0.005em;
        }
        .ic-region {
          flex-shrink: 0;
          font-family: "Roboto Mono", monospace;
          font-size: 0.58rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--muted);
          border: 1px solid var(--line);
          padding: 2px 7px;
          white-space: nowrap;
        }

        .ic-fitbadge {
          align-self: flex-start;
          font-family: "Roboto Mono", monospace;
          font-size: 0.58rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          padding: 2px 7px;
          border: 1px solid var(--ink);
        }
        .ic-fitbadge--strong {
          background: var(--ink);
          color: var(--paper);
        }
        .ic-fitbadge--good {
          background: #808080;
          color: var(--paper);
          border-color: #808080;
        }
        .ic-fitbadge--moderate {
          background: var(--paper);
          color: var(--ink);
        }

        .ic-card-meta {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          align-items: baseline;
        }
        .ic-meta-stage {
          font-size: 0.68rem;
          font-weight: 500;
          color: var(--ink);
          border-bottom: 1px solid var(--line);
          padding-bottom: 1px;
        }
        .ic-meta-check {
          font-family: "Roboto Mono", monospace;
          font-size: 0.68rem;
          color: var(--muted);
        }
        .ic-card-geo {
          font-size: 0.72rem;
          font-weight: 500;
          color: var(--muted);
          margin: 0;
        }
        .ic-card-thesis {
          font-size: 0.8rem;
          line-height: 1.5;
          margin: 0;
          color: #333333;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .ic-card-link {
          margin-top: auto;
          padding-top: 6px;
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: "Roboto", sans-serif;
          font-weight: 500;
          font-size: 0.76rem;
          color: var(--ink);
          text-decoration: none;
          border-bottom: 1px solid var(--ink);
        }
        .ic-card-link:hover {
          opacity: 0.6;
        }

        /* ---------- Empty state ---------- */
        .ic-empty {
          text-align: left;
          padding: 3rem 0;
          border-top: 1px solid var(--line);
        }
        .ic-empty-title {
          font-weight: 700;
          font-size: 1.1rem;
          margin: 0 0 0.4rem;
        }
        .ic-empty p {
          font-weight: 400;
          color: var(--muted);
          margin: 0;
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 720px) {
          .ic-stats {
            grid-template-columns: repeat(2, 1fr);
          }
          .ic-stat-panel {
            border-bottom: 1px solid var(--line);
          }
          .ic-root {
            padding: 2rem 1rem 3rem;
          }
        }
        @media (max-width: 420px) {
          .ic-stats {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </div>
  );
}