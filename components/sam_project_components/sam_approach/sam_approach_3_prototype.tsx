import React from 'react'
import SystemPrompt from '../sam_prototype/system_prompt'

export default function SamPrototype() {
  return (
    <div className='
    mx-12 text-neutral-950 
    place-content-center p-10'
    id="prototype">
    <h1 className='text-3xl font-semibold mb-10'>Prototype</h1>
    <SystemPrompt />
  </div>
  )
}
