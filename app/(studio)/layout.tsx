export const metadata = {
  description: 'Admin',
  title: 'Ahmad Iqbal | Admin',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: '0' }}>{ children }</body>
    </html>
  );
}
