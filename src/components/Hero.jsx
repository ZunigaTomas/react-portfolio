import React from 'react';
import image from "@public/imagen.jpg";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
          <div className="flex flex-col items-center justify-center gap-10 text-white">
            
            <motion.div
              initial={{y: -50, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.8, delay: 0.2}}
            >
              <img src={image} alt="Agustin Zuniga" className="w-[300px] cursor-pointer rounded-full shadow-xl
              shadow-indigo-900 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl
              hover:shadow-indigo-600 md:w-[350px]" />
            </motion.div>

            <motion.div
              initial={{y: 50, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.8, delay: 0.2}}
            className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
              <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent
        text-5xl font-light md:text-7xl py-2">Agustin Tomas Zuniga</h1>

              <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent
        text-2xl md:text-3xl">Desarrollador full-stack</h3>
              <p className="md:text-base text-pretty text-sm text-gray-400">
                Soy desarrollador full-stack con experiencia principalmente en Spring Boot, React, Docker y manejo de bases de datos tanto relacionales como no relacionales.
                 Me enfoco en crear soluciones robustas y escalables, cubriendo tanto el frontend como el backend. Si te interesa colaborar o necesitas apoyo en
                  el desarrollo de software, no dudes en contactarme.</p>
            </motion.div>
          </div>  
    </div>
  )
}

export default Hero;