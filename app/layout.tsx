export const metadata = {
  title: 'Next.js',
  description: 'Muhammad Suleman ',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  )
}
