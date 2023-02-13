import '../styles/globals.css'
import { Familjen_Grotesk as Font } from '@next/font/google'

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
      <body className={`dark:bg-dark ${font.variable} font-sans`}>{children}</body>
    </html>
  )
}
