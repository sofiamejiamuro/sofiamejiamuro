"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { PiCalendarHeartFill } from "react-icons/pi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";


export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
    <section
        ref={ref}
        id="home"
        className="  
        bg-gray-800 bg-opacity-10 backdrop-filter backdrop-blur-xl 
        max-w-[45rem] text-center  scroll-mt-[100rem] 
        py-4 sm:p-12
        mb-0 sm:mb-0 
        my-20 mx-8 sm:m-20
        rounded-2xl "
    >
        <div className='flex items-center justify-center'>
            <div className="relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    type: "tween",
                    duration: 0.2,
                    }}
                >
                    <Image 
                        src='/SMM.png'
                        alt='Sofia Mejia Muro portrait' 
                        width="192"
                        height="192"
                        quality="95"
                        priority={true}
                        className="
                        h-24 w-24 rounded-full object-cover border-[0.35rem] 
                        border-violet-100 shadow-xl"
                    />
                </motion.div>
                
                <motion.span 
                    className="absolute bottom-0 text-4xl"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    type: "spring",
                    stiffness: 125,
                    delay: 0.1,
                    duration: 0.7,
                    }}
                >💬</motion.span>
            </div>
        </div>   

        <motion.h1
            className="
                text-violet-100 sm:mt-4 font-normal 
                !leading-[1.5] text-lg sm:text-3xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <span className="font-bold ">Hello, I am Sofia.</span>

        </motion.h1>
        <motion.h1
            className="
                text-violet-100 mb-1 sm:mb-2 mt-2 sm:mt-4 sm:px-4 font-normal 
                !leading-[1.5] text-lg sm:text-3xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <span className="font-bold">Conversational AI Solutions Consultant </span> 
        </motion.h1>
        <motion.p
            className="
                text-violet-100 sm:mb-10  sm:px-4  font-normal 
                !leading-[1.5] text-lg sm:text-2xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <span className="font-bold">Specializing in Human-Computer Interaction Through Language</span> 
        </motion.p>
        {/**
        <motion.h1
            className="
                text-violet-100 mb-10 mt-4 px-4 text-lg font-normal 
                !leading-[1.5] sm:text-3xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
            Hola,
            <span className="font-bold "> Soy Sofia.</span> Soy {" "}
            <span className="font-bold">Consultora en Soluciones Conversacionales Inteligentes</span> 
            
        </motion.h1>
        
        */}

        {/*
        <motion.p
            className="text-neutral-100 mt-4 px-4 text-xl font-normal !leading-[1.5] sm:text-3xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}>
            I specialize in understanding business needs and crafting solutions that best achieve customer objectives. 
            My approach is data-driven, ensuring that decisions are informed and effective. 
            Additionally, I focus on continuous iteration and improvement to refine and enhance the outcomes.
            <br></br>
            <br></br>
            <span className="font-bold">Let’s talk future.</span> 
        </motion.p>
        */}
        
        {/*
        <motion.p
            className="mb-10 mt-4 px-4 text-xl font-normal !leading-[1.5] sm:text-3xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}>
            What I do:
            <ul className="list-disc list-inside">
                <li>Understand business needs.</li>
                <li>Create solutions that best fit and achieve the customer objectives.</li>
                <li>Make decisions based on a data-driven approach.</li>
                <li>Iterate for improvement.</li>
            </ul>
            <br></br>
            <br></br>
            <span className="font-bold">Let’s talk future.</span>
        </motion.p>
        */}

        <br></br>
        <br></br>
        <motion.div
            className="
                flex flex-col sm:flex-row items-center justify-center gap-7 
                px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
            delay: 0.1,
            }}
        >
            {/*
            <Link
                href="#contact"
                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                onClick={() => {
                    setActiveSection("Contact");
                    setTimeOfLastClick(Date.now());
                }}
            >
            Contact me here{" "}
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>
            */}
            <a
                className="
                    bg-gray-600 bg-opacity-20  text-neutral-800 border-none
                    hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] 
                    hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack 
                   
                    p-4"
                href="/SofiaMejia-Resume.pdf"
                download
            >
            My Résumé{" "}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>

            <a
                className="
                    bg-gray-600 bg-opacity-20 p-4 text-neutral-800 border-none
                    hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15]
                    hover:scale-[1.15] active:scale-105 
                    transition cursor-pointer borderBlack "
                href="https://www.linkedin.com/in/sofiamejiamuro/"
                target="_blank"
            >
                Get in touch{" "}
                <BsLinkedin />
            </a>
            {/*    
            <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com"
            target="_blank"
            >
                <FaGithubSquare />
            </a>
            */}
            <a
                className="
                    bg-gray-600 bg-opacity-20 p-4 text-neutral-800 border-none
                    hover:text-neutral-950 flex items-center 
                    gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 
                    transition cursor-pointer borderBlack "
                href="https://adplist.org/mentors/sofia-mejia?session=23901-mentorship-session"
            target="_blank"
            >
                Book a time{" "}
                <PiCalendarHeartFill />
            </a>
        </motion.div>
    </section>
    );
};
