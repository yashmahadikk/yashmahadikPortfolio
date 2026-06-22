import { Mail, Linkedin, Instagram, Twitter, Github, ArrowUpRight, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-72 h-72 opacity-5 dark:opacity-3 pointer-events-none hidden lg:block">
        <img 
          src="/illustrations/collaboration.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-primary text-sm font-semibold tracking-wider mb-2">CONTACT</p>
        <h2 className="text-4xl md:text-5xl font-serif italic text-foreground mb-6">
          Let&apos;s Connect
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          I&apos;m actively seeking product management and strategic consulting opportunities. If you&apos;re looking for someone who can bridge technology, compliance, and business strategy, let&apos;s discuss how I can contribute to your organization&apos;s success.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-muted-foreground">
          <a href="tel:+918451921771" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone size={18} />
            <span>+91 8451921771</span>
          </a>
          <a href="mailto:yashmahaadik@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={18} />
            <span>yashmahaadik@gmail.com</span>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="mailto:yashmahaadik@gmail.com?subject=Let%27s%20Connect%20-%20Product%20Management%20Inquiry&body=Hi%20Yash%2C%0A%0AI%27m%20interested%20in%20discussing%20product%20management%20and%20strategic%20opportunities%20with%20you.%0A%0ALooking%20forward%20to%20connecting%21"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors w-full sm:w-auto rounded-md"
          >
            <Mail size={20} />
            Get In Touch
          </a>
          <a
            href="https://drive.google.com/drive/folders/1jll4Xyqc_uIfkDlBFyuh_4Y6SufN_P5D?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-foreground font-semibold border border-border hover:border-primary hover:text-primary transition-colors w-full sm:w-auto rounded-md"
          >
            View Resume
            <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://linkedin.com/in/yashmahadik2"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://x.com/yash_mahadik"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://github.com/yashmahadikk"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://instagram.com/yashmahadikofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
