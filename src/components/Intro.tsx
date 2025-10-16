"use client";

import Image from "next/image";
import { useLayoutEffect } from "react";

const Intro = () => {
    // useLayout to ensure that DOM is fully loaded before initializing any scroll-related effects
  useLayoutEffect(() => {

  }, []);

  return (
    <section className="relative h-[140vh] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/cave.jpg"
        alt="background image"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay for visibility */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute -mt-30 inset-0 flex flex-col items-center justify-center text-center z-10">
        {/* Intro image */}
        <div
          data-scroll
          data-scroll-speed="0.3"
          className="relative w-[350px] h-[405px]"
        >
          <Image
            src="/images/download.jpg"
            alt="intro image"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Title text */}
        <h1
          data-scroll
          data-scroll-speed="0.7"
          className="absolute text-white text-[4vw] font-bold uppercase "
        >
          Smooth Scroll
        </h1>
      </div>
    </section>
  );
};

export default Intro;
