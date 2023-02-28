import '../styles/globals.css'
import { Familjen_Grotesk as Font } from 'next/font/google'
import Navbar from 'ui/navbar'
import { Providers } from 'ui/providers'
import { Analytics } from 'components/analytics'
import { Metadata } from 'next'

const font = Font({
  subsets: ['latin'],
  variable: '--font-family',
})

export const metadata: Metadata = {
  title: {
    default: 'Alvaro Martinez',
    template: '%s | Alvaro Martinez',
  },
  description: 'Developer and designer.',
  openGraph: {
    title: 'Alvaro Martinez',
    description: 'Developer and designer.',
    url: 'https://martinez.vercel.app',
    siteName: 'Alvaro Martinez',
    images: [
      {
        url: 'https://github.com/omgismartinez.png',
        width: 460,
        height: 460,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'Martinez',
    creator: '@omgismartinez',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: 'favicon/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body className={`bg-light dark:bg-dark ${font.variable} font-sans`}>
        <Providers>
          <Navbar />
          <div className='relative overflow-hidden'>
            <div className='absolute rounded-full w-96 h-96 blur-3xl bg-primary animate-smooth md:animate-smooth2' />
            <main className='relative px-6 py-20 sm:pt-32'>
              {children}
              <Analytics />
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
