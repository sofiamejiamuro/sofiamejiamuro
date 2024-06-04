"use client";

import React from 'react';
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { projectsData_2 } from "@/lib/data";
import Project_2 from './project_2';
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import purple from "@/public/daniele-levis-pelusi-Vey6fioB1eI-unsplash.jpg";


export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);

    return (
        
        <section 
            ref={ref} 
            id="projects" 
            className="
                scroll-mt-28 mb-10 sm:mb-40       
                bg-no-repeat bg-cover bg-center bg-fixed
                "
        >
            <div>
                <SectionHeading>Projects</SectionHeading>
            </div>
            <div className="md:columns-2">
                <div className='mb-3'>
                    {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                    ))}
                </div>  
                <div>
                    {projectsData_2.map((project_2, index) => (
                    <React.Fragment key={index}>
                        <Project_2 {...project_2} />
                    </React.Fragment>
                    ))}
                </div>   
            </div>
                  
        </section>
    )
}
