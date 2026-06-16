'use client'

import { useState } from "react"
import { colorPalettes, convertHexToOklch } from "@/lib/color-palettes"
import { X } from "lucide-react"

interface ColorCustomizerProps {
  isOpen: boolean
  onClose: () => void
}

export function ColorCustomizer({ isOpen, onClose }: ColorCustomizerProps) {
  const [customHex, setCustomHex] = useState("#d4941e")
  const [showCustom, setShowCustom] = useState(false)

  const applyPalette = (palette: typeof colorPalettes[0]) => {
    // Apply all colors from the palette
    document.documentElement.style.setProperty("--primary", palette.primary)
    document.documentElement.style.setProperty("--secondary", palette.secondary)
    document.documentElement.style.setProperty("--accent", palette.accent)
    document.documentElement.style.setProperty("--muted", palette.muted)
    document.documentElement.style.setProperty("--ring", palette.primary)
    document.documentElement.style.setProperty("--chart-1", palette.primary)
    
    // Also update dark mode
    const darkStyle = document.querySelector(".dark") as HTMLElement
    if (darkStyle) {
      darkStyle.style.setProperty("--primary", palette.primary)
      darkStyle.style.setProperty("--secondary", palette.secondary)
      darkStyle.style.setProperty("--accent", palette.accent)
      darkStyle.style.setProperty("--ring", palette.primary)
    }
    
    // Save to localStorage
    localStorage.setItem("customColorPalette", JSON.stringify(palette))
  }

  const handleCustomColorApply = () => {
    try {
      const oklchColor = convertHexToOklch(customHex)
      // Create a palette from custom color with variations
      const customPalette = {
        name: "Custom Color",
        primary: oklchColor,
        secondary: oklchColor.replace(/(\d+\.?\d*)\)/, (match, lightness) => {
          const l = Math.max(0, parseFloat(lightness) - 0.1)
          return `${l.toFixed(4)})`
        }),
        accent: oklchColor.replace(/(\d+\.?\d*)\)/, (match, lightness) => {
          const l = Math.min(1, parseFloat(lightness) + 0.15)
          return `${l.toFixed(4)})`
        }),
        muted: oklchColor.replace(/(\d+\.?\d*)\)/, (match, lightness) => {
          const l = Math.max(0, parseFloat(lightness) - 0.35)
          return `${l.toFixed(4)})`
        }),
        description: "Custom color theme",
      }
      applyPalette(customPalette as any)
      setShowCustom(false)
      onClose()
    } catch (error) {
      console.error("[v0] Error converting color:", error)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-background dark:bg-card rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border">
        {/* Header */}
        <div className="sticky top-0 bg-background dark:bg-card border-b border-border p-6 flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-foreground">Color Palette Customizer</h3>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!showCustom ? (
            <>
              <p className="text-muted-foreground mb-6">Select a color palette or create a custom one:</p>
              
              {/* Palette Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {colorPalettes.map((palette, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      applyPalette(palette)
                      onClose()
                    }}
                    className="p-4 rounded-lg border-2 border-border hover:border-primary transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {/* Color swatches */}
                      <div className="flex gap-1">
                        <div
                          className="w-3 h-12 rounded-sm shadow-md"
                          style={{ backgroundColor: palette.primary }}
                        />
                        <div
                          className="w-3 h-12 rounded-sm shadow-md"
                          style={{ backgroundColor: palette.secondary }}
                        />
                        <div
                          className="w-3 h-12 rounded-sm shadow-md"
                          style={{ backgroundColor: palette.accent }}
                        />
                        <div
                          className="w-3 h-12 rounded-sm shadow-md"
                          style={{ backgroundColor: palette.muted }}
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{palette.name}</p>
                        <p className="text-xs text-muted-foreground">{palette.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Custom Color Button */}
              <button
                onClick={() => setShowCustom(true)}
                className="w-full px-6 py-3 border-2 border-dashed border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
              >
                Create Custom Color
              </button>
            </>
          ) : (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Enter Hex Color Code
                </label>
                <div className="flex gap-3">
                  <div className="flex-1 flex items-center gap-2 border-2 border-border rounded-lg p-3">
                    <span className="text-muted-foreground">#</span>
                    <input
                      type="text"
                      value={customHex.replace("#", "")}
                      onChange={(e) => setCustomHex(`#${e.target.value}`)}
                      placeholder="d4941e"
                      maxLength={6}
                      className="flex-1 bg-transparent text-foreground outline-none font-mono"
                    />
                  </div>
                  <div
                    className="w-12 h-12 rounded-lg border-2 border-border shadow-md"
                    style={{ backgroundColor: customHex }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">Enter a 6-character hex code (e.g., d4941e)</p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleCustomColorApply}
                  className="flex-1 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Apply Color
                </button>
                <button
                  onClick={() => setShowCustom(false)}
                  className="flex-1 px-6 py-3 border-2 border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors"
                >
                  Back
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
