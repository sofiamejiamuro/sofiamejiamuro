import React from 'react';
import SamBrief from '@/components/sam_es_project_components/sam_project_brief';
import SamOverview from '@/components/sam_es_project_components/sam_project_overview';
import SamProcess from '@/components/sam_es_project_components/sam_project_process';
import SamPostLaunch from '@/components/sam_es_project_components/sam_project_post_launch';
import SamConclusions from '@/components/sam_es_project_components/sam_project_conclusions';
import BackButton from '@/components/back_button';
import SpanishButton from '@/components/sam_es_project_components/sam_es_version_button';
import SamAchievements from '@/components/sam_project_components/sam_project_achievements';



export default function Sam() {
  return (
    <main className='bg-[#CDCBFE] pt-12 sm:pt-28'>
        <SpanishButton />
        <BackButton />
        <SamBrief />
        <SamOverview />
        <SamProcess />
        <SamPostLaunch />
        <SamAchievements />
        <SamConclusions />

    </main>
  )
}
