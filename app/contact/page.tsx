'use client'

import { Mail, Linkedin, Instagram, ArrowUpRight, Phone } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-sm font-semibold tracking-wider mb-2">CONTACT</p>
          <h1 className="text-4xl md:text-6xl font-serif italic text-foreground mb-6">
            Let&apos;s Connect
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I&apos;m actively seeking product management and strategic consulting opportunities. If you&apos;re looking for someone who can bridge technology, compliance, and business strategy, let&apos;s discuss how I can contribute to your organization&apos;s success.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-background p-8 rounded-lg border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Phone</h3>
              </div>
              <a href="tel:+917977922735" className="text-muted-foreground hover:text-primary transition-colors text-lg">
                +91 7977922735
              </a>
              <p className="text-sm text-muted-foreground mt-2">Direct line for calls and urgent inquiries</p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Email</h3>
              </div>
              <a href="mailto:yashmahadik2005@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-lg">
                yashmahadik2005@gmail.com
              </a>
              <p className="text-sm text-muted-foreground mt-2">Preferred method for detailed inquiries</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:yashmahadik2005@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors rounded-md"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <a
              href="https://drive.google.com/drive/folders/1jll4Xyqc_uIfkDlBFyuh_4Y6SufN_P5D?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-foreground font-semibold border border-border hover:border-primary hover:text-primary transition-colors rounded-md"
            >
              View Resume
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-12">
            Connect on Social
          </h2>
          
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://linkedin.com/in/yashmahadik2"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors hover:bg-primary/5"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://instagram.com/yashmahadikofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors hover:bg-primary/5"
            >
              <Instagram size={24} />
            </a>
          </div>

          <p className="text-muted-foreground text-sm mt-12">
            Response time: Within 24 hours for email inquiries
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
