"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    toast.success("Thanks for subscribing!")
    setEmail("")
    setIsLoading(false)
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-transparent relative">
      <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-purple-900/10 dark:via-blue-900/10 dark:to-cyan-900/10 animate-gradient-shift" />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center dark:bg-gray-900/30 dark:backdrop-blur-sm dark:border dark:border-gray-700/50 dark:rounded-2xl dark:p-8 dark:shadow-2xl dark:shadow-cyan-500/10 hover-glow transition-all duration-500 animate-shimmer">
          <h2 className="text-3xl font-bold tracking-tight mb-4 dark:text-white dark:bg-gradient-to-r dark:from-white dark:via-cyan-200 dark:to-blue-200 dark:bg-clip-text dark:text-transparent animate-gradient-shift">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-500">
            Get the latest insights and trends delivered straight to your inbox. Join thousands of founders who are
            already growing their businesses with us.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 dark:bg-gray-800/50 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:backdrop-blur-sm transition-all duration-300 focus:scale-105 hover-glow"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-[#06D6A0] text-white hover:bg-[#FF9F1C] dark:bg-gradient-to-r dark:from-[#00FF94] dark:to-[#06D6A0] dark:hover:from-[#FF9F1C] dark:hover:to-[#FF6B35] dark:shadow-lg dark:shadow-[#00FF94]/30 dark:border dark:border-[#00FF94]/30 hover-glow transition-all duration-300 animate-gradient-shift hover:scale-105"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
