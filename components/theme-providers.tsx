'use client'

import { ThemeProvider } from 'next-themes'
import siteMetadata from '../utils/siteMetadata'

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (

    //@ts-ignore
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme} enableSystem>
      {children}
    </ThemeProvider>
  )
}
