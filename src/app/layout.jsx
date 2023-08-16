import './globals.css'

export const metadata = {
  title: 'Twitter Next',
  description: 'Twitter clone built with Next.js'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
