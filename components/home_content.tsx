"use client";

import React from 'react';
import { latestProjects } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function HomeContent() {

{/*const { ref } = useSectionInView("LatestProjects", 0.5);
añadir en section =  ref={ref} 
*/}
    
    return (
        <section 
            id="latest-projects" 
            className="
                scroll-mt-28  mt-16 sm:mb-40       
                bg-no-repeat bg-cover bg-center bg-fixed
                
                "
        >
            <div>
                <h2 className="text-neutral-50 text-3xl sm:text-5xl 
                font-medium capitalize m-4 sm:mb-8 text-center">
                Latest Projects
                </h2>
            </div>
            <div className="md:columns-2 m4">
                <div className='mb-3'>
                    {latestProjects.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                    ))}
                </div>  
            </div>
            <div className="
                flex flex-col sm:flex-row items-center justify-center gap-7 
                px-4 text-lg font-medium">
                <a
                    className="
                        bg-gray-600 bg-opacity-20 p-4 text-neutral-800 border-none
                        hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15]
                        hover:scale-[1.15] active:scale-105 
                        transition cursor-pointer borderBlack "
                    href="/work"
                >
                    See more work
                </a>
            </div>      
        </section>
        
    )
}
