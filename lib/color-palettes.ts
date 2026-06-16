// Popular color palettes with multiple colors (OKLch format)
export interface ColorPalette {
  name: string
  primary: string
  secondary: string
  accent: string
  muted: string
  description: string
}

export const colorPalettes: ColorPalette[] = [
  {
    name: "Default (Orange)",
    primary: "oklch(0.6300 0.2200 38)",
    secondary: "oklch(0.5200 0.1500 35)",
    accent: "oklch(0.7500 0.1200 50)",
    muted: "oklch(0.3000 0.0500 40)",
    description: "Warm orange with gold accents",
  },
  {
    name: "Deep Blue",
    primary: "oklch(0.5500 0.2000 250)",
    secondary: "oklch(0.4800 0.1800 260)",
    accent: "oklch(0.7000 0.1500 220)",
    muted: "oklch(0.2500 0.0600 250)",
    description: "Professional blue palette",
  },
  {
    name: "Vibrant Purple",
    primary: "oklch(0.5800 0.2200 280)",
    secondary: "oklch(0.4900 0.2000 290)",
    accent: "oklch(0.7200 0.1400 270)",
    muted: "oklch(0.2800 0.0700 280)",
    description: "Modern purple aesthetic",
  },
  {
    name: "Emerald Green",
    primary: "oklch(0.5500 0.1800 150)",
    secondary: "oklch(0.4700 0.1600 155)",
    accent: "oklch(0.7100 0.1200 140)",
    muted: "oklch(0.2600 0.0500 150)",
    description: "Fresh green theme",
  },
  {
    name: "Coral Red",
    primary: "oklch(0.5800 0.2000 27)",
    secondary: "oklch(0.5000 0.1800 30)",
    accent: "oklch(0.7300 0.1300 20)",
    muted: "oklch(0.2700 0.0600 25)",
    description: "Warm coral palette",
  },
  {
    name: "Teal Ocean",
    primary: "oklch(0.5800 0.1800 200)",
    secondary: "oklch(0.4900 0.1600 210)",
    accent: "oklch(0.7200 0.1200 190)",
    muted: "oklch(0.2600 0.0500 200)",
    description: "Cool teal theme",
  },
  {
    name: "Rose Pink",
    primary: "oklch(0.6000 0.1800 350)",
    secondary: "oklch(0.5100 0.1600 355)",
    accent: "oklch(0.7400 0.1200 340)",
    muted: "oklch(0.2800 0.0600 350)",
    description: "Elegant rose palette",
  },
  {
    name: "Amber Gold",
    primary: "oklch(0.6200 0.1800 80)",
    secondary: "oklch(0.5300 0.1600 85)",
    accent: "oklch(0.7500 0.1300 75)",
    muted: "oklch(0.2900 0.0600 80)",
    description: "Rich golden theme",
  },
  {
    name: "Slate Blue",
    primary: "oklch(0.5200 0.1500 260)",
    secondary: "oklch(0.4600 0.1300 265)",
    accent: "oklch(0.6800 0.1100 250)",
    muted: "oklch(0.2400 0.0500 260)",
    description: "Sophisticated slate",
  },
  {
    name: "Forest Green",
    primary: "oklch(0.4800 0.1600 140)",
    secondary: "oklch(0.4100 0.1400 145)",
    accent: "oklch(0.6600 0.1200 130)",
    muted: "oklch(0.2300 0.0500 140)",
    description: "Deep forest palette",
  },
]

export const convertHexToOklch = (hex: string): string => {
  // Remove # if present
  hex = hex.replace("#", "")

  // Convert hex to RGB
  const r = parseInt(hex.substring(0, 2), 16) / 255
  const g = parseInt(hex.substring(2, 4), 16) / 255
  const b = parseInt(hex.substring(4, 6), 16) / 255

  // Convert RGB to linear RGB
  const toLinear = (c: number) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4))
  const lr = toLinear(r)
  const lg = toLinear(g)
  const lb = toLinear(b)

  // Convert to XYZ
  const x = lr * 0.4124 + lg * 0.3576 + lb * 0.1805
  const y = lr * 0.2126 + lg * 0.7152 + lb * 0.0722
  const z = lr * 0.0193 + lg * 0.1192 + lb * 0.9505

  // Normalize
  const xn = x / 0.95047
  const yn = y / 1.0
  const zn = z / 1.08883

  // Convert to OKLab
  const toOklab = (t: number) => Math.pow(t, 1 / 3)
  const l_ = 0.2104542553 * toOklab(xn) + 0.793617785 * toOklab(yn) - 0.0040720468 * toOklab(zn)
  const a_ = 1.9779984951 * toOklab(xn) - 2.429592924 * toOklab(yn) + 0.4505937099 * toOklab(zn)
  const b_ = 0.0259040371 * toOklab(xn) + 0.7827717662 * toOklab(yn) - 0.8086757660 * toOklab(zn)

  // Convert OKlab to OKLch
  const C = Math.sqrt(a_ * a_ + b_ * b_)
  let h = Math.atan2(b_, a_) * (180 / Math.PI)
  if (h < 0) h += 360

  // Return OKLch
  return `oklch(${l_.toFixed(4)} ${C.toFixed(4)} ${h.toFixed(0)})`
}

export const convertOklchToHex = (oklch: string): string => {
  const match = oklch.match(/oklch\(([\d.]+)\s+([\d.]+)\s+([\d.]+)\)/)
  if (!match) return "#000000"

  const L = parseFloat(match[1])
  const C = parseFloat(match[2])
  const h = parseFloat(match[3])

  // Convert OKLch to OKlab
  const hRad = (h * Math.PI) / 180
  const alab = C * Math.cos(hRad)
  const blab = C * Math.sin(hRad)

  // Convert OKlab to XYZ
  const l_ = L + 0.3963377774 * alab + 0.2158037573 * blab
  const m_ = L - 0.1055613458 * alab - 0.0638541728 * blab
  const s_ = L - 0.0894841775 * alab - 1.291486578 * blab

  const toExp = (t: number) => Math.pow(t, 3)
  const l = toExp(l_)
  const m = toExp(m_)
  const s = toExp(s_)

  const x = (4.0767416621 * l - 3.3077363322 * m + 0.2309101289 * s) * 0.95047
  const y = (-1.2684380046 * l + 2.6097574011 * m - 0.3413193761 * s) * 1.0
  const z = (-0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s) * 1.08883

  // Convert XYZ to RGB
  const toSRgb = (v: number) => (v <= 0.0031308 ? 12.92 * v : 1.055 * Math.pow(v, 1 / 2.4) - 0.055)
  const r = toSRgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z)
  const g = toSRgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z)
  const brgb = toSRgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z)

  // Convert to hex
  const toHex = (v: number) => {
    const val = Math.round(Math.max(0, Math.min(1, v)) * 255)
    return val.toString(16).padStart(2, "0")
  }

  return `#${toHex(r)}${toHex(g)}${toHex(brgb)}`.toUpperCase()
}
