'use client';

import { usePathname } from 'next/navigation';
import gsap from 'gsap-trial';
import { ScrollSmoother } from 'gsap-trial/dist/ScrollSmoother';
import { ScrollTrigger } from 'gsap-trial/dist/ScrollTrigger';
import { Inter } from 'next/font/google';
import { useGSAP } from '@gsap/react';

const inter = Inter({ subsets: ['latin'] });

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);
}

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useGSAP(
    () => {
      ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });
    },
    {
      dependencies: [pathname],
      revertOnUpdate: true,
    }
  );

  return (
    <div id="smooth-wrapper" className={inter.className}>
      <div id="smooth-content">{children}</div>
    </div>
  );
}
