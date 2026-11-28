import { track } from "@vercel/analytics"

export function trackPortfolioEvent(
  name: string,
  properties?: Record<string, string | number | boolean | null | undefined>,
) {
  track(name, properties)
}
