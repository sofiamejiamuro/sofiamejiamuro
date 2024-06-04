"use client";

import React from 'react';
import SectionHeading from './section-heading';
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
    const { ref } = useSectionInView("Experience", 0.5);
    const { theme } = useTheme();

    return (
        <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
            <SectionHeading>Experience</SectionHeading>
            <VerticalTimeline lineColor="">
            {experiencesData.map((item, index) => (
                <React.Fragment key={index}>
                    <VerticalTimelineElement

                        id="experience-card"
                        className="vertical-timeline-element--work"
                        visible={true}
                        
                        contentStyle={{
                            background: "rgba(31,41,55,0.1)",
                            boxShadow: "none",
                            border: "none",
                            textAlign: "left",
                            padding: "1.3rem 2rem",
                            color:"#3b0764",
                        }}
                        contentArrowStyle={{
                            borderRight:
                            theme === "light"
                                ? "0.4rem solid #9ca3af"
                                : "0.4rem solid rgba(255, 255, 255, 0.5)",
                        }}
                        date={item.date}
                        icon={item.icon}
                        iconStyle={{
                            background:
                            theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                            fontSize: "1.5rem",
                            color:"#3b0764"
                        }}
                        >
                        <h3 className="font-semibold text-neutral-50">{item.title}</h3>
                        {/*<p className="font-normal !mt-0 text-neutral-50">{item.location}</p>*/}
                        <p className="!font-normal text-neutral-50 dark:text-white/75">
                            {item.description}
                        </p>
                    </VerticalTimelineElement>
                </React.Fragment>
            ))}
        </VerticalTimeline>
        </section>
    )
}
