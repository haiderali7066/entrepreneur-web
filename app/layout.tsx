import { Merriweather } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { AnimatedBackground } from "@/components/animated-background"
import type React from "react"

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
})

export const metadata = {
  title: "Founders Insights - Premium Content for Ambitious Founders",
  description: "Access premium content, in-depth guides, and expert resources to grow your business.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${merriweather.variable} font-serif bg-[#EAE8E1] dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black transition-all duration-1000`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <AnimatedBackground />
          <div className="relative min-h-screen flex flex-col dark:bg-gradient-to-br dark:from-gray-900/95 dark:via-gray-800/95 dark:to-black/95 dark:backdrop-blur-sm transition-all duration-1000">
            <SiteHeader />
            <main className="flex-1 px-4 sm:px-6 lg:px-8">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
