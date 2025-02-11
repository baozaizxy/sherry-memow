import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Bottom from '@/components/Bottom';
import TransitionComponent from '@/components/Transition';
import { TransitionProvider } from '@/context/TransitionContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-10 h-screen w-screen`}>
        <Header />
        <TransitionProvider>
          <div className="content-container">
            <TransitionComponent>{children}</TransitionComponent>
          </div>
        </TransitionProvider>
        <Bottom />
      </body>
    </html>
  );
}
