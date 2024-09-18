import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import BackButton from '@/components/back_button';
import { AiProjects } from '@/lib/projects_data';
import { ConversationProjects } from '@/lib/projects_data';
import { MultimodalProjects } from '@/lib/projects_data';
import WorkAIProjects from '@/components/work_projects';


export default function Work() {
  return (
    <main className="bg-[#CDCBFE] pt-10 sm:py-20 mb-10"> 
      <BackButton />
      <h1 className='
      text-center text-2xl sm:text-4xl font-semibold text-gray-600
      m-10'>
        CONVERSATIONAL AI
      </h1>
      <div className='sm:columns-3 px-3 m-5'>
        {AiProjects.map((project, index) => (
          <React.Fragment key={index}>
            <WorkAIProjects {...project}/>
          </React.Fragment > 
          ))}
      </div>
      <h1 className='
      text-center text-2xl sm:text-4xl font-semibold text-gray-600
      m-10'>
        CONVERSATIONAL DESIGN
      </h1>
      <div className='sm:columns-3 px-3'>
        {ConversationProjects.map((project, index) => (
          <React.Fragment key={index}>
            <WorkAIProjects {...project}/>
          </React.Fragment > 
          ))}
      </div>
      <h1 className='
      text-center text-2xl sm:text-4xl font-semibold text-gray-600
      m-10'>
        MULTIMODAL
      </h1> 
      <div className='sm:columns-3 px-3 '>
        {MultimodalProjects.map((project, index) => (
          <React.Fragment key={index}>
            <WorkAIProjects {...project}/>
          </React.Fragment > 
          ))}
      </div>
    </main>
  )
}