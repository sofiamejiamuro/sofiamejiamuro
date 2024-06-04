"use client";

import React from 'react';
import SectionHeading from "./section-heading";
import {resourcesData } from "@/lib/data";
import {resourcesData_2 } from "@/lib/data";
import Resource from "./resource";
import Resource_2 from './resource_2';
import { useSectionInView } from "@/lib/hooks";

export default function Resources() {
    const { ref } = useSectionInView("Resources", 0.5);

    return (
        <section 
            ref={ref} 
            id="resources" 
            className="
                scroll-mt-28 mb-10 sm:mb-40
                bg-no-repeat bg-cover bg-center bg-fixed">
            <div >
                <SectionHeading>Resources</SectionHeading>
            </div>
            <div className="md:columns-2">
                <div className='mb-3'>
                    {resourcesData.map((resource, index) => (
                    <React.Fragment key={index}>
                        <Resource {...resource} />
                    </React.Fragment>
                    ))}
                </div>
                <div>
                    {resourcesData_2.map((resource_2, index) => (
                    <React.Fragment key={index}>
                        <Resource_2 {...resource_2} />
                    </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}
