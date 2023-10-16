import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from '@/components/Navbar'



export const metadata: Metadata = {
  title: 'Hacktoberfest 2023',
  description: 'Hacktoberfest 2023 is a month-long celebration of open source software run by DigitalOcean in partnership with GitHub and Twilio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className='overflow-x-hidden overflow-y-auto'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
