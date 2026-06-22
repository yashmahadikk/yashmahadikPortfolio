export function HomeQuoteSection() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="border-t border-border pt-12 text-center">
          <blockquote className="mb-6">
            <p className="text-2xl md:text-3xl text-foreground leading-relaxed">
              "The best product managers are operators who have built things, understand trade-offs deeply, and never stop learning from users."
            </p>
          </blockquote>
          <p className="text-sm text-muted-foreground">
            — YASH MAHADIK
          </p>
        </div>
      </div>
    </section>
  )
}
