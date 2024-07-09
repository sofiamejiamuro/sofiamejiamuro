import React from 'react';
import AlviApproachStepsEn from './process/en_talleres_steps';


export default function AlviProcessEn() {
  return (
    <section 
    className="
      mb-10 max-w
      leading-8 sm:mb-0 sm:pb-14  
      h-auto
      bg-neutral-100"
  >
    <h2 className="
       text-neutral-950 text-3xl sm:text-5xl font-medium capitalize pt-6 sm:pt-16 text-center">
        Process
    </h2>
    <AlviApproachStepsEn />
    
    {/** 1. Define*
     * <SamApproachSteps />
    <SamDefine />
    {/** 2. Ideate*
    <SamIdeate />
    {/** 3. Prototype*
    <SamPrototype />
    {/** 4. Test*
    <SamTest />
    {/** 4. Outcome
    <SamTestOutcome />
    */}
  </section>
  )
}
