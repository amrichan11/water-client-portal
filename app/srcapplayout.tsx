import './globals.css';

export const metadata = {
  title: 'Client Portal - Air Minum Industri',
  description: 'Dashboard Pelanggan Industri Air Perpipaan',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}