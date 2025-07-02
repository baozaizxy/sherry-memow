import '@/style/globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Bottom from '@/components/Bottom';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sherry\'s Blog',
  description: 'Sherry\'s Blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={`${inter.className} h-screen w-screen`}>
        <Header />
        <div className="content-container">
          {children}
        </div>
        <Bottom />
      </body>
    </html>
  );
}
