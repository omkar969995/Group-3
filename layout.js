import './globals.css';

export const metadata = {
  title: 'AUTOCUT',
  description: 'Precision Cutting Machine',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}