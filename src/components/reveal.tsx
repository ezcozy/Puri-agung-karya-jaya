"use client";
import { motion, useReducedMotion } from "motion/react";
import { useRef, useState, type ReactNode } from "react";
import { SpeakerHigh, SpeakerSlash } from "@phosphor-icons/react";
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
  const [muted, setMuted] = useState(true);

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (video.paused) void video.play();
  }

  return <>
    <video ref={videoRef} autoPlay muted loop playsInline poster={poster}>
      <source src={src} type="video/mp4" />
    </video>
    <button className="sound-toggle" type="button" onClick={toggleSound} aria-label={muted ? "Nyalakan musik video" : "Matikan musik video"}>
      {muted ? <SpeakerSlash weight="fill" /> : <SpeakerHigh weight="fill" />}
      <span>{muted ? "Nyalakan musik" : "Matikan musik"}</span>
    </button>
  </>;
}

