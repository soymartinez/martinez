import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='dark' style={{ colorScheme: 'dark' }}>
      <head />
      <body className='dark:bg-dark'>{children}</body>
    </html>
  )
}
