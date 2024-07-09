import React from 'react';
import Carousel from '@/components/carousel';
import Image from "next/image";

export default function AlviAchievementsEn() {
    let slides = [
        "/sam/achievements_1.png",
        "/sam/achievements_2.png",
        "/sam/achievements_3.png",
      ]
    return (
        <section 
        className="
        mb-10 max-w
        leading-8 sm:mb-0   
        h-auto px-10 sm:px-24
        pb-10 sm:pb-24
        bg-neutral-100"
        >
            <h2 className="text-neutral-950 text-2xl sm:text-5xl font-medium capitalize pt-8 sm:pt-16 text-center">
                GOALS ACHIEVED
            </h2>
            <p className='my-6 leading-relaxed text-justify sm:text-xl'>
            Alvi is still in the testing phase; however, to measure whether the objectives have been achieved and to evaluate its functionality qualitatively, the following metrics are proposed:
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
                <div className='place-content-center rounded-lg' >
                    <Image
                    src="/talleres/alvi-goals-1.png"
                    quality={"100"}
                    width={"500"}
                    height={"510"}
                    alt="Alvi phone"
                    className='max-w'
                    style={{
                        borderRadius: "10px",
                    }}
                    ></Image>
                </div>
                <div className='place-content-center'>
                    <p className='leading-relaxed text-justify sm:text-xl'><span className="font-bold text-neutral-950">Improve Member Experience: </span></p>
                    <ul className='
                        sm:mt-2 leading-relaxed text-justify sm:text-xl 
                        list-disc list-inside'>
                        <li>Measure user satisfaction: Implement satisfaction surveys at the end of each interaction and calculate the Net Promoter Score (NPS).</li>
                        <li>Response time: Monitor the average time the assistant takes to respond to member inquiries.</li>
                        <li>First interaction resolution rate: Measure the percentage of inquiries resolved in the first interaction without the need for additional assistance.</li>
                    </ul>
                    <p className='sm:mt-2 leading-relaxed text-justify sm:text-xl'><span className="font-bold text-neutral-950">Promote Club Membership: </span></p>
                    <ul className='
                        sm:mt-2 leading-relaxed text-justify sm:text-xl 
                        list-disc list-inside'>
                        <li>Count new registrations: Track the number of new members registered through the virtual assistant each month.</li>
                        <li>Renewal rate: Measure the percentage of members who renew their membership using the assistant.</li>
                        <li>Conversion of inquiries to memberships: Evaluate the percentage of membership inquiries that result in a new registration.</li>
                    </ul>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 sm:mt-4'>
                
                <div className='place-content-center'>
                    <p className='leading-relaxed text-justify sm:text-xl'><span className="font-bold text-neutral-950">Foster a Sense of Community and Belonging: </span></p>
                    <ul className='
                        sm:mt-2 leading-relaxed text-justify sm:text-xl 
                        list-disc list-inside'>
                        <li>Measure recurring interactions: Count the number of members who interact with the assistant more than once a month.</li>
                        <li>Positive feedback: Collect and analyze positive comments and ratings from users about their sense of belonging to the club.</li>
                        <li>Engagement with exclusive content: Measure the number of views and interactions (likes, shares) with the exclusive content provided by the assistant.</li>
                    </ul>
                    <p className='sm:mt-2 leading-relaxed text-justify sm:text-xl'><span className="font-bold text-neutral-950">Optimize Club Communication:</span></p>
                    <ul className='
                        sm:mt-2 leading-relaxed text-justify sm:text-xl 
                        list-disc list-inside'>
                        <li>Frequency of updates: Monitor the regularity with which news and events are updated in the assistant.</li>
                        <li>Interaction rate with news/events: Measure the percentage of users who access news and events through the assistant.</li>
                        <li>Traffic to social media and website: Count the number of redirects from the assistant to the club's social media and official website.</li>
                    </ul>
                </div>
                <div className='place-content-center rounded-lg' >
                    <Image
                    src="/talleres/alvi-goals-2.png"
                    quality={"100"}
                    width={"500"}
                    height={"510"}
                    alt="Alvi phone"
                    className='max-w'
                    style={{
                        borderRadius: "10px",
                    }}
                    ></Image>
                </div>
            </div>
        </section>
        
    )
}