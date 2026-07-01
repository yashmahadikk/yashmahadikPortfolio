'use client'

import { useState } from 'react'
import { X, Download } from 'lucide-react'

interface PDFModalProps {
  isOpen: boolean
  onClose: () => void
  pdfUrl: string
  title: string
}

export function PDFModal({ isOpen, onClose, pdfUrl, title }: PDFModalProps) {
  const [isLoading, setIsLoading] = useState(true)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-background rounded-lg w-full max-w-4xl h-[90vh] max-h-[90vh] flex flex-col shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">{title}</h2>
          <div className="flex items-center gap-3">
            <a
              href={pdfUrl}
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              <Download size={16} />
              Download
            </a>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-auto bg-slate-100 dark:bg-slate-800">
          {isLoading && (
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground">Loading PDF...</p>
            </div>
          )}
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
            className="w-full h-full border-none"
            onLoad={() => setIsLoading(false)}
            title={title}
          />
        </div>
      </div>
    </div>
  )
}
