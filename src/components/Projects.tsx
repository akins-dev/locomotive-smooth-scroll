import Image from "next/image";

const Projects = () => {
  const objects = [
    {
      title: "Montaña Sagrada",
      src: "/images/montana.jpg",
    },
    {
      title: "Ciudad Perdida",
      src: "/images/ciudad.jpg",
    },
    {
      title: "Mar Infinito",
      src: "/images/mar.jpg",
    },
    {
      title: "Bosque Encantado",
      src: "/images/bosque.jpg",
    },
  ];
  return (
    // projects
    <div className="flex flex-col mt-[25vh] text-white p-[10%] leading-none">
      {/* description */}
      <div className="flex h-[450px] gap-[5%] w-full justify-between">
        {/* image container */}
        <div className="relative h-[60vh] w-[30%]">
          <Image
            src="/images/2.jpeg"
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
    </div>
  );
};

export default Projects;
