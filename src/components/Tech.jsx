import React from 'react';
import { BiLogoDocker, BiLogoJavascript, BiLogoMongodb, BiLogoReact, BiLogoSpringBoot, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { TbSql } from 'react-icons/tb';
import { SiNextdotjs } from 'react-icons/si';
import ScrollReveal from '../utils/ScrollReveal';

const Tech = () => {
  
  const variants = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0}
  }

  return (
    <ScrollReveal>
      <div id="tech" className="flex min-h-[70vh] w-full flex-col
      items-center justify-center gap-16 md:gap-32">
        
        <h1 className="text-4xl font-light text-white md:text-6xl">Tecnologías</h1>

        <div className="flex flex-wrap items-center justify-center gap-10 p-5">
          
          <div>
            <BiLogoSpringBoot className="cursor-pointer text-[80px] text-green-600 transition-all
          duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </div>

          <div>
            <BiLogoDocker className="cursor-pointer text-[80px] text-sky-500 transition-all
          duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </div>

          <div>
            <BiLogoJavascript className="cursor-pointer text-[80px] text-yellow-500 transition-all
          duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </div>

          <div>
            <BiLogoTypescript className="cursor-pointer text-[80px] text-blue-700 transition-all
          duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </div>

          <div>
            <BiLogoReact className="cursor-pointer text-[80px] text-sky-500 transition-all
          duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </div>

          <div>
            <SiNextdotjs className="cursor-pointer text-[80px] text-sky-500 transition-all
          duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </div>

          <div>
            <BiLogoMongodb className="cursor-pointer text-[80px] text-green-400 transition-all
          duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </div>

          <div>
            <TbSql className="cursor-pointer text-[80px] text-green-400 transition-all
          duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </div>

          <div>
            <BiLogoTailwindCss className="cursor-pointer text-[80px] text-sky-500 transition-all
          duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

export default Tech;