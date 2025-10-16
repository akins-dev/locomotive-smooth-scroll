"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";

const Intro = () => {
  const backgroundImage = useRef(null);
  const introImage = useRef(null);

  // useLayout to ensure that DOM is fully loaded before initializing any scroll-related effects
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=300px",
        scrub: true,
        // markers: true,
      },
    });

    timeline
      .from(backgroundImage.current, {
        clipPath: "inset(15%)",
      })
      .to(
        introImage.current,
        {
          height: "200px",
        },
        0
      );
  }, []);

  return (
    <section
      ref={backgroundImage}
      className="relative h-[140vh] w-full"
    >
      {/* Background image */}
      <Image
        src="/images/qq.jpg"
        alt="background image"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay for visibility */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Content */}
      <div className="absolute -mt-30 inset-0 flex flex-col items-center justify-center text-center z-10">
        {/* Intro image */}
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.4"
          className="relative w-[350px] h-[405px]"
        >
          <Image
            src="/images/ww.jpeg"
            alt="intro image"
            fill
            className="object-cover object-top shadow-lg"
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
