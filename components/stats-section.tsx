export function StatsSection() {
  const stats = [
    {
      value: "87%",
      label: "efficiency gain: AI measurement tool reducing customer journey from 4 minutes to 30 seconds",
    },
    {
      value: "60%",
      label: "faster processing: Architected automation platform for large-scale data operations",
    },
    {
      value: "25%",
      label: "productivity boost: Enterprise project management system unifying workflows",
    },
    {
      value: "100%",
      label: "Agile transformation: Successfully transitioned organization reducing time-to-market",
    },
  ]

  return (
    <section className="py-20 px-6 border-y border-border bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
