import React from 'react';
import livedocs from "@public/livedocs.png";
import zunigahotel from "@public/zunigahotel.png";
import ScrollReveal from '../utils/ScrollReveal';

const projectsData = [
  {
    image: livedocs,
    title: "Livedocs",
    description: "Desarrollé una aplicación web que permite compartir y editar documentos en tiempo real con Liveblocks y Lexical. Incluye funciones de colaboración y comentarios, con autenticación segura a través de Clerk. Utilicé Sentry para el monitoreo de errores y el proyecto fue desarrollado en Next.js con TypeScript y Tailwind CSS.",
    technologies: ["Next", "Typescript", "Clerk", "Tailwind", "Liveblocks", "WebSocket", "Sentry"],
    link: "https://realtime-docs-next.vercel.app/"
  },
  {
    image: zunigahotel,
    title: "Zuniga Hotel",
    description: "Desarrollé una aplicación web para la gestión de reservas de habitaciones de hotel utilizando Spring Boot en el backend, con Spring Security para autenticación JWT, almacenamiento en AWS S3 y MongoDB como base de datos. El frontend está construido con React y Tailwind CSS para una interfaz moderna y responsiva.",
    technologies: ["Spring Boot", "React", "Tailwind", "MongoDB", "AWS S3", "Spring Security-JWT"],
    link: "https://react-mongo-hotel-app.vercel.app/"
  }
]


const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <div className="relative w-full md:w-[1900px]"> {/* Mantiene el tamaño de la imagen */}
          <a href={project.link} className="block" target="_blank">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto cursor-pointer rounded-sm transition-all duration-300" 
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
              <span className="text-white text-lg font-semibold">Visitar</span>
            </div>
          </a>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-5">
            {
              project.technologies.map((tech, index) => (
                <span key={index} className="rounded-lg bg-black p-3">
                  {tech}
                </span>
              ))
            }
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
      
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">Mis proyectos</h1>
      </ScrollReveal>
    
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {
          projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects;