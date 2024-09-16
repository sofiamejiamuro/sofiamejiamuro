import React from 'react'
import ToBeUpdated from '@/components/to_be_updated';
import BackButton from '@/components/back_button';
import About from '@/components/about';
import Experience from '@/components/experience';
import Skill from '@/components/skills';
import Resources from '@/components/resources';

export default function AboutMe() {
  return (
    <main className="pt-10 sm:py-20 mb-10 "> 
      <BackButton/>
      <div className='flex flex-col items-center'>
        <About />
        <Resources />
        <Skill />
      </div>
      
    </main>
  )
}