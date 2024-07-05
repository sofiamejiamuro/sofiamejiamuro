import React from 'react';
import SamApproachSteps from './sam_approach/sam_project_approach_steps';
import SamDefine from './sam_approach/sam_approach_1_define';
import SamIdeate from './sam_approach/sam_approach_2_ideate';
import SamPrototype from './sam_approach/sam_approach_3_prototype';
import SamTest from './sam_approach/sam_approach_4_test';
import SamTestOutcome from './sam_approach/sam_approach_4_test_2_outcome';


export default function SamProcess() {
  return (
    <section 
    className="
      mb-10 max-w
      leading-8 sm:mb-0   
      h-auto
      bg-neutral-100"
  >
    <h2 className="
       text-neutral-950 text-3xl sm:text-5xl font-medium capitalize pt-6 sm:pt-16 text-center">
        Proceso
    </h2>
    <SamApproachSteps />
    {/** 1. Define*/}
    <SamDefine />
    {/** 2. Ideate*/}
    <SamIdeate />
    {/** 3. Prototype*/}
    <SamPrototype />
    {/** 4. Test*/}
    <SamTest />
    {/** 4. Outcome*/}
    <SamTestOutcome />
  </section>
  )
}
