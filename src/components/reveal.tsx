"use client";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 42 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .85, delay, ease: [.16, 1, .3, 1] }}>{children}</motion.div>;
}
export function HeroReveal({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: [.16, 1, .3, 1] }}>{children}</motion.div>;
}

export function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let disposed = false;
    let interacted = false;
    const removeListeners = () => {
      document.removeEventListener("click", enableSound);
      document.removeEventListener("keydown", enableSound);
    };
    function enableSound() {
      if (disposed || !video) return;
      interacted = true;
      video.muted = false;
      void video.play().then(removeListeners).catch(() => {
        // Retain listeners so a subsequent user gesture can retry.
      });
    }
    document.addEventListener("click", enableSound);
    document.addEventListener("keydown", enableSound);
    video.muted = false;
    void video.play().then(removeListeners).catch(() => {
      if (disposed || interacted) return;
      // Preserve the moving hero when the browser blocks audible autoplay.
      video.muted = true;
      void video.play().catch(() => {});
    });
    return () => {
      disposed = true;
      removeListeners();
    };
  }, [src]);

  return <video ref={videoRef} autoPlay loop playsInline poster={poster}>
    <source src={src} type="video/mp4" />
  </video>;
}
