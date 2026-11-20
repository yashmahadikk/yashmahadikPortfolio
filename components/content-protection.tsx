"use client"

import { useEffect } from "react"

function isEditableTarget(target: EventTarget | null) {
  return target instanceof HTMLElement && Boolean(
    target.closest("input, textarea, select, [contenteditable='true'], [role='textbox']"),
  )
}

export function ContentProtection() {
  useEffect(() => {
    const preventContextMenu = (event: MouseEvent) => event.preventDefault()
    const preventAssetDrag = (event: DragEvent) => {
      if (event.target instanceof HTMLImageElement || (event.target instanceof HTMLElement && event.target.closest("img, picture, video"))) {
        event.preventDefault()
      }
    }
    const preventCopy = (event: ClipboardEvent) => {
      if (!isEditableTarget(event.target)) event.preventDefault()
    }
    const preventCopyShortcuts = (event: KeyboardEvent) => {
      if (isEditableTarget(event.target) || !(event.ctrlKey || event.metaKey) || event.altKey) return
      if (["c", "x"].includes(event.key.toLowerCase())) event.preventDefault()
    }

    document.addEventListener("contextmenu", preventContextMenu)
    document.addEventListener("dragstart", preventAssetDrag)
    document.addEventListener("copy", preventCopy)
    document.addEventListener("cut", preventCopy)
    document.addEventListener("keydown", preventCopyShortcuts)

    return () => {
      document.removeEventListener("contextmenu", preventContextMenu)
      document.removeEventListener("dragstart", preventAssetDrag)
      document.removeEventListener("copy", preventCopy)
      document.removeEventListener("cut", preventCopy)
      document.removeEventListener("keydown", preventCopyShortcuts)
    }
  }, [])

  return null
}
