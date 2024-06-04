import React from 'react';
import Image from "next/image";

import BotPersona from '../sam_ideate/bot_persona';
import UserFlowsPartOne from '../sam_ideate/user_flows_part_one';
import UserFlowsPartTwo from '../sam_ideate/user_flows_part_two';
import SamPrototype from './sam_approach_3_prototype';

export default function SamIdeate() {
  return (
    <div className='
      mb-10 max-w
      leading-8 sm:mb-10
      p-20
      scroll-mt-28
      h-auto
      bg-violet-100'
      id="ideate">
      <h1 className='text-3xl font-semibold mb-10'>Ideate</h1>
      {/**BOT PERSONA */}
      <BotPersona />
      {/**User Conversational Flows */}
      <UserFlowsPartOne />
      {/**USER FLOWS*/}
      <UserFlowsPartTwo />
    </div>
  )
}
