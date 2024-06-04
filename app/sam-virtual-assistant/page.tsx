import React from 'react';
import SamBrief from '@/components/sam_project_components/sam_project_brief';
import SamOverview from '@/components/sam_project_components/sam_project_overview';
import SamProcess from '@/components/sam_project_components/sam_project_process';
import SamPostLaunch from '@/components/sam_project_components/sam_project_post_launch';
import SamConclusions from '@/components/sam_project_components/sam_project_conclusions';



export default function Sam() {
  return (
    <section className='bg-[#CDCBFE] pt-12 sm:pt-28'> 
      <SamBrief />
      <SamOverview />
      <SamProcess />
      <SamPostLaunch />
      <SamConclusions />

    </section>
  )
}
