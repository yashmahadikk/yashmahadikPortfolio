"use client"

import { Children, useId, useState, type ReactNode } from "react"
import { ArrowDown } from "lucide-react"

export function ToolsShowMore({ children }: { children: ReactNode }) {
  const cards = Children.toArray(children)
  const [visibleCount, setVisibleCount] = useState(10)
  const listId = useId()
  const remainingCount = cards.length - visibleCount
  const nextCount = Math.min(10, remainingCount)

  return (
    <>
      <div
        id={listId}
        className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-5"
      >
        {cards.slice(0, visibleCount)}
      </div>

      {remainingCount > 0 && (
        <button
          type="button"
          aria-controls={listId}
          onClick={() =>
            setVisibleCount((count) => Math.min(count + 10, cards.length))
          }
          className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
        >
          Show {nextCount} more {nextCount === 1 ? "tool" : "tools"}
          <ArrowDown size={14} aria-hidden="true" />
        </button>
      )}
    </>
  )
}
