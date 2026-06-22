'use client'

import { useState, useEffect } from 'react'

interface Quote {
  text: string
  author: string
}

const quotes: Quote[] = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb"
  },
  {
    text: "Everything you want is on the other side of fear.",
    author: "Jack Canfield"
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
  },
  {
    text: "The only thing standing between you and your goal is the story you keep telling yourself.",
    author: "Jordan Belfort"
  }
]

export function AnimatedQuoteSection() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  const CYCLE_DURATION = 6000 // 6 seconds in milliseconds

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length)
      setProgress(0)
    }, CYCLE_DURATION)

    return () => clearInterval(quoteInterval)
  }, [])

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (100 / (CYCLE_DURATION / 50))
        return newProgress >= 100 ? 100 : newProgress
      })
    }, 50)

    return () => clearInterval(progressInterval)
  }, [])

  const currentQuote = quotes[currentQuoteIndex]

  return (
    <section className="py-16 md:py-20 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          {/* Animated Quote Text */}
          <div className="mb-8 min-h-24 flex flex-col items-center justify-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-relaxed text-balance transition-all duration-500">
              "{currentQuote.text}"
            </p>
          </div>

          {/* Author Attribution */}
          <p className="text-sm md:text-base text-muted-foreground mb-8 transition-all duration-500">
            —— {currentQuote.author}
          </p>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all ease-linear"
              style={{
                width: `${progress}%`,
                transitionDuration: progress === 0 ? '0ms' : '50ms',
              }}
            />
          </div>

          {/* Quote Counter */}
          <p className="text-xs text-muted-foreground mt-4">
            {currentQuoteIndex + 1} / {quotes.length}
          </p>
        </div>
      </div>
    </section>
  )
}
