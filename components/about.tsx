"use client";

import React from 'react';
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");

    return ( 
    <motion.section
      ref={ref}
      className="
      bg-gray-800 bg-opacity-10 backdrop-filter backdrop-blur-xl
        max-w-[70rem] leading-8 scroll-mt-28 
        mb-10 sm:mb-40 text-center
        p-4 sm:p-14 rounded-2xl m-16 sm:m-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{  delay: 0.175 }}
      id="about"
    >
      <h2 className="text-neutral-950 text-3xl sm:text-5xl font-medium capitalize sm:mb-8 text-center">About me</h2>
      <motion.p
        className="text-neutral-950 mt-2 sm:mt-6 sm:px-4 text-lg font-normal !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        I am Sofía Mejía Muro. 
        I majored in <span className="font-bold">Linguistics</span> from the Universidad Autónoma Metropolitana in Mexico City
        and graduated as a <span className="font-bold">Frontend Developer</span> from Laboratoria.
      </motion.p>
      <motion.p
        className="text-neutral-950 mt-2 sm:mt-6 sm:px-4 text-lg font-normal !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        I specialize in <span className="font-bold">understanding business needs</span> and crafting solutions that best
        <span className="font-bold"> achieve customer objectives</span>. 
        My approach is <span className="font-bold"> data-driven</span>, ensuring that decisions are informed and effective. 
        I am particularly skilled in the design and development of conversational solutions, with a focus on 
        <span className="font-bold"> generative intelligent virtual </span> assistants. 
        My work centers on creating effective and natural conversational experiences that 
        <span className="font-bold"> enhance human-machine interaction. </span> 
      </motion.p>
      <motion.p
        className="text-neutral-950 mt-2 sm:mt-6 sm:px-4 text-lg font-normal !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        In addition to my professional career, I am an <span className="font-bold">Ambassador for Women in Voice Mexico</span>, an organization that promotes the participation 
        of women in the Conversational field. I am also a <span className="font-bold">Laboratoria evangelist</span>, advocating for the impact 
        and importance of their educational programs in transforming the lives of women through technology.  
      </motion.p>

      <br></br>
      <motion.p
        className="text-neutral-100 mt-2 sm:mt-6 sm:px-4 text-lg font-normal !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>

        <span className="font-bold text-neutral-950">Let’s talk future.</span> 
      </motion.p>
    </motion.section>
  )
}
