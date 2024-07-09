import React from 'react';
import ToBeUpdated from '@/components/to_be_updated';
import BackButton from '@/components/back_button';
import TalleresSpanishButton from '@/components/talleres/talleres_lang_buttons';


export default function CATEn() {
  return (
    <div>
        <main className='bg-[#CDCBFE] pt-12 sm:pt-28'>
            <h1>ENGLISH</h1>
            <BackButton />
            <TalleresSpanishButton />
            {/**
             * Brief
             * Overview
             * Process
             * - Discover
             * - Define
             * - Develop
             * - Deliver
             * Achievements
             * Conclusions
             */}
            
        </main>
    </div>
  )
}
 