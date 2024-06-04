import React from 'react';
import Carousel from '@/components/carousel';

export default function PostLaunch() {
  let slides = [
    "/sam/sam-up-3-large.png",
    "/sam/sam-careers-flow.png"
  ]
  let slides_goals = [
    "/sam/goals-1.png",
    "/sam/goals-2.png"
  ]
  return (
    <section 
    className="
      max-w
      sm:pb-20
      
      h-auto
      bg-violet-100"
    >
      <h2 className="
      text-neutral-950 text-2xl sm:text-5xl font-medium capitalize pt-16 text-center">
        Post Launch
      </h2>
      <div className='
          sm:mx-10 text-neutral-950 
          place-content-center px-10 m'>
        <p className='my-7 leading-relaxed text-justify sm:text-xl'>
        Following the deployment to production, the analysis of data collected from real users yielded the following insights:</p>
        <p className='leading-relaxed text-justify sm:text-xl'>
        <span className='font-bold'>1. Identification of an Unexpected User Group: </span></p>
        <p className='leading-relaxed text-justify sm:text-xl'>
        We discovered a segment of users who visited the site primarily to explore job opportunities. These users engaged with SAM to inquire about available positions, salary information, and tips for preparing for technical interviews.
        </p>
        <p className='leading-relaxed text-justify sm:text-xl'>
        Actions Taken: We created a detailed user persona for this group, mapped out potential conversational flows, and developed data sources to provide relevant information.
        </p>
        <div className='w-[70%] m-auto my-8'>
          <Carousel slides={slides}/>
        </div>
        <p className='leading-relaxed text-justify sm:text-xl'>
        <span className='font-bold'>2. Welcome Message Requirement: </span></p>
        <p className='leading-relaxed text-justify sm:text-xl'>There was a clear need for a welcome message to help users understand how SAM could assist them. Despite this, stakeholders decided against adding the message.</p>

        <p className='leading-relaxed text-justify sm:text-xl mt-5'> 
        <span className='font-bold'>3. Enhanced Visual Aids for Navigation:</span></p>
        <p className='leading-relaxed text-justify sm:text-xl'>Users required more visual aids to better navigate the site. Heatmap data revealed that users were searching the entire site for clickable elements, indicating confusion about navigation.</p>
        <p className='leading-relaxed text-justify sm:text-xl'>Future Actions: This behavior was anticipated, and thus, it highlighted the need for improved visual guidance.</p>

        <h2 className="
      text-neutral-950 text-2xl sm:text-5xl font-medium capitalize pt-8 sm:pt-16 text-center">
        GOALS ACHIEVED
        </h2>
        <div className='w-[70%] m-auto my-8'>
          <Carousel slides={slides_goals}/>
        </div>
      </div>
    </section>
    
  )
}
