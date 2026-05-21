import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Let&apos;s Connect
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          I&apos;m actively seeking product management and strategic consulting opportunities. If you&apos;re looking for someone who can bridge technology, compliance, and business strategy, let&apos;s discuss how I can contribute to your organization&apos;s success.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="mailto:hello@yashmahadik.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors w-full sm:w-auto rounded-md"
          >
            <Mail size={20} />
            Get In Touch
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-foreground font-semibold border border-border hover:border-primary hover:text-primary transition-colors w-full sm:w-auto rounded-md"
          >
            View Resume
            <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="#"
            className="w-12 h-12 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
            className="w-12 h-12 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:hello@yashmahadik.com"
            className="w-12 h-12 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
