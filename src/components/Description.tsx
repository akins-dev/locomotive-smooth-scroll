import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const Description = () => {
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
  const phrases = [
    "Whispers beneath the silver horizon",
    "Chasing patterns in digital rain",
    "Dreams folded into quiet mornings",
    "Echoes drifting through molten skies",
    "Fragments of time carried by the tide",
  ];
  return (
    <div className="relative z-20 text-[2vw] text-white uppercase leading-none -mt-[35vh] ml-[10vw]">
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}
    </div>
  );
};

function AnimatedText({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const text = useRef(null);

  // useLayout to ensure that DOM is fully loaded before initializing any scroll-related effects
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        start: "0px bottom",
        end: "bottom+=400px bottom",
        scrub: true,
        // markers: true,
      },
      left: "-200px",
      opacity: 0,
    });
  }, []);
  return (
    <p ref={text} className="relative">
      {children}
    </p>
  );
}

export default Description;
