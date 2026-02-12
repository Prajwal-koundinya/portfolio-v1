"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { themes } from "@/lib/themes"

// Applies the emerald theme colors based on light/dark mode
export function ThemeChanger() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, systemTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || resolvedTheme === undefined) return

    const effectiveMode = resolvedTheme ?? systemTheme ?? "light"
    const isDark = effectiveMode === "dark"
    const colors = isDark ? themes.emerald.dark : themes.emerald.light

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        Object.entries(colors).forEach(([key, value]) => {
          document.documentElement.style.setProperty(`--${key}`, value)
        })
      })
    })
  }, [mounted, resolvedTheme, systemTheme])

  // No visible UI needed — just applies theme colors
  return null
}
