import React from 'react';
import ToBeUpdated from '@/components/to_be_updated';
import BackButton from '@/components/back_button';
import TalleresSpanishButton from '@/components/talleres/talleres_lang_buttons';
import AlviBriefEn from '@/components/talleres/en_talleres_1_brief';
import AlviOverviewEn from '@/components/talleres/en_talleres_2_overview';
import AlviProcessEn from '@/components/talleres/en_talleres_3_process';
import AlviAchievementsEn from '@/components/talleres/en_talleres_4_achievements';
import AlviConclusionsEn from '@/components/talleres/en_talleres_5_conclusions';


export default function CATEn() {
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
          <AlviBriefEn />
          <AlviOverviewEn />
          <AlviProcessEn />
          <AlviAchievementsEn />
          <AlviConclusionsEn />
        </main>
    </div>
  )
}
 