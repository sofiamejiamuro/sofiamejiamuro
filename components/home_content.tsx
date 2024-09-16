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
                scroll-mt-28       
                bg-no-repeat bg-cover bg-center bg-fixed
                p-10
                "
        >
            <div>
                <h2 className="text-neutral-50 text-3xl sm:text-5xl 
                font-medium capitalize m-4 sm:mb-8 text-center">
                Latest Projects
                </h2>
            </div>
            <div className="sm:columns-2">
                <div className="">
                    {latestProjects.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                    ))}
                </div>  
            </div>
            <div className="
                flex flex-col sm:flex-row items-center justify-center gap-7 
                px-4 text-lg font-medium my-10">
                <a
                    className="
                        bg-violet-950 bg-opacity-50 p-5 text-neutral-100 text-xl
                        hover:text-neutral-100 flex items-center gap-2 rounded-full focus:scale-[1.15]
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
