import React from 'react'
import TestMethodology2 from './test_methodology_cards'
import MethodologyCreation from './test_methodology_creation'

export default function TestMethodology() {
  return (
    <div>
        <h2 className='text-2xl font-semibold mb-10'>Methodology</h2>
        <p className='my-3 leading-relaxed text-xl'>This evaluation aims to assess various aspects of the responses, including relevance, completeness, accuracy, and adherence to specific guidelines. The following sections detail the criteria used for evaluation, the process of systematizing annotations, and the tools employed to analyze the data. Through this systematic approach, we aim to identify areas for improvement and ensure that the chatbot delivers high-quality, accurate, and user-relevant interactions.</p>
        <h3 className='text-2xl font-semibold mt-6 mb-3'>Define evaluation criteria</h3>
        <TestMethodology2 />
        <MethodologyCreation />
    </div>
  )
}
