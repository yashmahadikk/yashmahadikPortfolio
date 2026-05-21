export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Yash Mahadik. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Built with passion for{" "}
          <span className="text-primary">product excellence</span>.
        </p>
      </div>
    </footer>
  )
}
