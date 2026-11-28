import { Mail, Linkedin, Github, Twitter, MapPin, Clock } from "lucide-react"
import { CurrentTime } from "./current-time"
import { HomeHeroActions } from "./home-hero-actions"

const emailHref = "mailto:yashmahadik2005@gmail.com?subject=Let's%20Connect%20-%20Product%20Management%20Discussion&body=Hi%20Yash%2C%0A%0AI'd%20like%20to%20connect%20with%20you%20regarding%20product%20management%2C%20strategy%2C%20or%20a%20potential%20collaboration.%0A%0ALooking%20forward%20to%20hearing%20from%20you!%0A%0ABest%20regards"

export function HomeHeroSection() {
  return (
    <section className="border-b border-border px-5 pb-10 pt-8 lg:px-6 lg:pb-20 lg:pt-36">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-3 text-[clamp(2.5rem,11vw,2.75rem)] font-sans font-semibold leading-tight text-foreground lg:mb-4 lg:text-6xl">
          yash mahadik
        </h1>
        <p className="mb-3 max-w-3xl text-[23px] font-medium leading-[1.3] text-foreground lg:mb-4 lg:text-3xl">
          Product Manager. Builder. Curious by default.
        </p>
        <p className="mb-2 max-w-3xl text-base leading-relaxed text-muted-foreground lg:mb-3 lg:text-lg">
          I explore complex problems, challenge assumptions and build products at the intersection of business, technology and human behaviour.
        </p>
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground lg:mb-7">
          5 years of experience across product management, project management, and startup operations.
        </p>

        <HomeHeroActions />

        <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground lg:mb-6 lg:gap-x-6 lg:gap-y-3">
          <div className="flex items-center gap-2">
            <MapPin aria-hidden="true" size={16} />
            <span>Mumbai, Maharashtra</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock aria-hidden="true" size={16} />
            <CurrentTime />
          </div>
        </div>

        <div className="flex items-center gap-4 text-muted-foreground">
          <a aria-label="X profile" href="https://x.com/yash_mahadik" target="_blank" rel="noopener noreferrer" className="inline-flex size-11 items-center justify-center rounded transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <Twitter aria-hidden="true" size={20} />
          </a>
          <a aria-label="LinkedIn profile" href="https://linkedin.com/in/yashmahadik2" target="_blank" rel="noopener noreferrer" className="inline-flex size-11 items-center justify-center rounded transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <Linkedin aria-hidden="true" size={20} />
          </a>
          <a aria-label="GitHub profile" href="https://github.com/yashmahadikk" target="_blank" rel="noopener noreferrer" className="inline-flex size-11 items-center justify-center rounded transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <Github aria-hidden="true" size={20} />
          </a>
          <a aria-label="Email Yash" href={emailHref} className="inline-flex size-11 items-center justify-center rounded transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <Mail aria-hidden="true" size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
