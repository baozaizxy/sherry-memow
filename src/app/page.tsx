'use client';
import React, { useRef, useState, useContext, useLayoutEffect } from 'react';
import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

// import { useIsomorphicLayoutEffect } from '@/helpers/isomorphicEffect';
import TransitionContext from '@/context/TransitionContext';

gsap.registerPlugin(ScrollToPlugin);

export default function Layers() {
  const main = useRef(null);
  const scrollTween = useRef(null);
  const [ctx] = useState(gsap.context(() => {}, main));
  const { completed } = useContext(TransitionContext);

  const goToSection = (i: number) => {
    // Remove the GSAP instance with the specific ID
    // to prevent memory leak
    ctx.data.forEach((e: { vars: { id: string }; kill: () => void }) => {
      if (e.vars && e.vars.id === 'scrollTween') {
        e.kill();
      }
    });
    ctx.add(() => {
      scrollTween.current = gsap.to(window, {
        scrollTo: { y: i * window.innerHeight, autoKill: false },
        duration: 1,
        id: 'scrollTween',
        onComplete: () => (scrollTween.current = null),
        overwrite: true,
      });
    });
  };

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    if (!completed) return;
    ctx.add(() => {
      const panels = gsap.utils.toArray('.panel');
      panels.forEach((panel: HTMLElement, i: number) => {
        ScrollTrigger.create({
          trigger: panel,
          start: 'top bottom',
          end: '+=200%',
          onToggle: (self: { isActive: boolean }) =>
            self.isActive && !scrollTween.current && goToSection(i),
        });
      });
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        snap: 1 / (panels.length - 1),
      });
    });
    return () => ctx.revert();
  }, [completed]);

  return (
    <main ref={main}>
      <section className="description panel cliff">
        <div>
          <h1>Layered pinning</h1>
          <p>Use pinning to layer panels on top of each other as you scroll.</p>
          <div className="scroll-down">
            Scroll down<div className="arrow"></div>
          </div>
        </div>
      </section>
      <section className="panel lawnandsea">ONE</section>
      <section className="panel shadow">TWO</section>
      <section className="panel cityview">THREE</section>
      <section className="panel binchicken">FOUR</section>
    </main>
  );
}
