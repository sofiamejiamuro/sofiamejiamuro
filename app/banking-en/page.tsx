import React from 'react'
import ToBeUpdated from '@/components/to_be_updated';
import BackButton from '@/components/back_button';
import TranslationButton from '@/project_components/translation_button';
import Brief from '@/project_components/brief';
import Overview from '@/project_components/overview';

import { brief_en, overview_en, process_stages_en, conclusions_en } from '@/lib/projects_data/banking';
import ProcessStages from '@/project_components/process_stages';
import Conclusions from '@/project_components/conclusions';


export default function BankingEn() {
  {/* NEW STRUCTURE: FOLLOW THIS PROJECT AS TEMPLATE FOR NEXT ONES*/}
  const english_url="/banking-en"
  const spanish_url="/banking-es"

  return (
    <main className='bg-[#CDCBFE] pt-10 sm:pt-28 sm:mb-10'> 
      {/* Translation button send each urls for spanish and english version*/}
      <TranslationButton english={english_url} spanish={spanish_url}/>
      {/* Back button crear uno nuevo para el nuevo folder hasta que migre a este nuevo template todos los demas proyectos*/}
      <BackButton/>

      {/* Brief */}
      <Brief content={brief_en}/>
      {/* In a Nutshell */}  
      <Overview content={overview_en} />
      {/* The Problem */}
      <ProcessStages content={process_stages_en}/>
        {/* Empathize */}
        {/* Define*/}
        {/* Ideate*/}
        {/* Prototype and Test*/}
      {/* Results */}
      {/* Post Launch*/}
      {/* For the Future*/}
      {/* What would I have done differently?*/}
      {/* Lessons Learned */}
      <Conclusions content={conclusions_en}/>
      {/* <ToBeUpdated />*/}
    </main>
  )
}