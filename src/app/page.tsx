"use client"

import Description from "@/components/Description";
import Intro from "@/components/Intro";
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
      data-scroll-container // for overall smooth scroll
      ref={scrollRef} // for overall smooth scroll
      className="flex flex-col gap-[20px]"
    >
      <Intro />
      <Description />
    </main>
  );
}
