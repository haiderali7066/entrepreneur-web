"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function AnimatedBackground() {
  const { theme } = useTheme()
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    if (theme === "dark") {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 8,
      }))
      setParticles(newParticles)
    } else {
      setParticles([])
    }
  }, [theme])

  if (theme !== "dark") return null

  return (
    <div className="particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle animate-particle-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
