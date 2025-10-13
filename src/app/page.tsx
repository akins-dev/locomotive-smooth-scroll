"use client"

import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";

export default function Home() {
  const scrollRef = useRef<HTMLElement>(null);
  const scrollInstance = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollInstance.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true,
      });
    }

    return () => {
      scrollInstance.current?.destroy();
    };
  }, []);

  return (
    <main
      data-scroll-container
      ref={scrollRef}
      className="flex flex-col gap-[20px]"
    >
      <div className="min-h-screen bg-rose-500"></div>
      <div className="min-h-screen bg-rose-500"></div>
      <div className="min-h-screen bg-rose-500"></div>
      <div className="min-h-screen bg-rose-500"></div>
      <div className="min-h-screen bg-rose-500"></div>
      <div className="min-h-screen bg-rose-500"></div>
      <div className="min-h-screen bg-rose-500"></div>
      <div className="min-h-screen bg-rose-500"></div>
    </main>
  );
}
