import '../styles/globals.css'
import { Familjen_Grotesk as Font } from '@next/font/google'
import Navbar from 'ui/navbar'

const font = Font({
  subsets: ['latin'],
  variable: '--font-family',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='dark' style={{ colorScheme: 'dark' }}>
      <head />
      <body className={`dark:bg-dark ${font.variable} font-sans`}>
        <Navbar />
        <div className='relative overflow-hidden'>
          <div className='absolute rounded-full w-96 h-96 blur-3xl bg-primary animate-smooth md:animate-smooth2' />
          <main className='relative px-6 py-20 sm:pt-32'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
