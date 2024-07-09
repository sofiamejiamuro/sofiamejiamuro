import React from 'react';
import ToBeUpdated from '@/components/to_be_updated';
import BackButton from '@/components/back_button';
import TalleresSpanishButton from '@/components/talleres/talleres_lang_buttons';
import AlviBriefEs from '@/components/talleres/es_talleres_1_brief';
import AlviOverviewEs from '@/components/talleres/es_talleres_2_overview';
import AlviProcessEs from '@/components/talleres/es_talleres_3_process';
import AlviAchievementsEs from '@/components/talleres/es_talleres_4_achievements';
import AlviConclusionsEs from '@/components/talleres/es_talleres_5_conclusions';


export default function CATEs() {
  return (
    <div>
      <main className='bg-[#CDCBFE] pt-12 sm:pt-28'>
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
            <AlviBriefEs />
            <AlviOverviewEs />
            <AlviProcessEs />
            <AlviAchievementsEs />
            <AlviConclusionsEs />

        </main>
    </div>
  )
}
