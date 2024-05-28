import { useState } from "react";

function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      name: "FitSite (WIP)",
      description:
        "A tool used for meal planning. This tool will eventually expand to include fitness planning, water intake tracking, and sleep tracking.",
      github: "#",
      link: "#",
      imageUrl: "src/assets/fitsite.png",
    },
    {
      name: "Etch-a-Sketch",
      description:
        "A dynamic and responsive based drawing tool using JavaScript, HTML, and CSS. This project was done for an assignment by The Odin Project.",
      github: "#",
      link: "#",
      imageUrl: "src/assets/etchasketch.png",
    },
    {
      name: "Discord Bot (WIP)",
      description:
        "A discord bot that uses the Riot Games API to display information involving League of Legends. The bot can be used for custom game creation, stat displaying, and as a database.",
      github: "#",
      link: "#",
      imageUrl: "src/assets/discord.png",
    },
  ];

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="carousel-container flex flex-col items-center w-full">
      <div className="carousel-slide w-full max-w-4xl h-96 my-5 shadow-lg rounded-lg overflow-hidden relative bg-gray-100 dark:bg-gray-700">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
              <div className="text-center text-white bg-black bg-opacity-50">
                <h3 className="text-2xl font-bold ">{project.name}</h3>
                <p className="mb-4">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-400 mr-4"
                >
                  GitHub
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-400"
                >
                  Project Link
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <button
          onClick={prevSlide}
          className="text-3xl text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 mx-2"
        >
          &#x3c;
        </button>
        <button
          onClick={nextSlide}
          className="text-3xl text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 mx-2"
        >
          &#x3e;
        </button>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div
      id="projects"
      className="projects-container relative py-16 bg-blue-100 h-screen transition-colors duration-300 dark:bg-blue-900 dark:text-gray-300"
    >
      <h2 className="text-4xl text-center font-bold mb-12">Projects</h2>
      <ProjectsCarousel />
      <div className="gradient-bottom absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-blue-200 dark:to-gray-900"></div>
    </div>
  );
}

export default Projects;
