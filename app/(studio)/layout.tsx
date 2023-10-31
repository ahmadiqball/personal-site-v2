export const metadata = {
  title: 'Ahmad Iqbal | Admin',
  description: 'Admin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: '0' }}>{children}</body>
    </html>
  )
}
