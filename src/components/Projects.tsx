"use client";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";

const Projects = () => {
  const [projectImage, setSeletedProjectImage] = useState(0);
  const imageContainer = useRef(null);

  const objects = [
    {
      title: "Montaña Sagrada",
      src: "/images/1.jpeg",
    },
    {
      title: "Ciudad Perdida",
      src: "/images/2.jpeg",
    },
    {
      title: "Mar Infinito",
      src: "/images/3.jpeg",
    },
    {
      title: "Bosque Encantado",
      src: "/images/4.jpeg",
    },
  ];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: imageContainer.current,
      start: "-=100px",
      end: "400px",
      pin: true,
    //   markers: true,
    });
  }, []);

  return (
    // projects
    <div className="flex flex-col mt-[25vh] text-white p-[10%] leading-none">
      {/* description */}
      <div className="flex h-[450px] gap-[5%] w-full justify-between">
        {/* image container */}
        <div className="relative h-[60vh] w-[30%]">
          <Image
            ref={imageContainer}
            src={objects[projectImage].src}
            alt="project"
            fill
            className="object-cover"
          />
        </div>
        {/* column */}
        <div className="w-[20%] flex text-[1.7vw]">
          <p>
            Lost light finds its way home, weaving through silence and shadow
            until it remembers the warmth it once knew.
          </p>
        </div>
        {/* column */}
        <div className="w-[20%] flex text-[1.2vw] items-end">
          <p>
            Beneath the quiet rhythm of the world, echoes of forgotten places
            still breathe — mountains whispering to the wind, oceans dreaming of
            endless horizons, and forests humming old songs that time itself has
            tried to erase. Every shadow hides a story, every shimmer a promise
            waiting to awaken.
          </p>
        </div>
      </div>
      {/* projects list */}
      <div className="flex flex-col mt-[20px]">
        {objects.map((object, index) => (
          // project element
          <div
            key={index}
            onMouseOver={() => setSeletedProjectImage(index)}
            className="flex justify-end border-t-[1px] last-of-type:border-b-[1px] text-[4vw] uppercase font-[700] hover:cursor-pointer"
          >
            <p className="m-0 mt-[40px] mb-[20px]">{object.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
