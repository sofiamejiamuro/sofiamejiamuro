import React from 'react';
import Stage from './stage';

export default function ProcessStages({ content }) {
  return (
    <section 
    className="max-w leading-8 pb-10 sm:pb-20 scroll-mt-28 h-auto bg-neutral-100">
        <h2 className="text-3xl sm:text-5xl font-medium capitalize pt-6 sm:pt-16 text-center">
            Process
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-4 gap-10 mt-10 px-20'>
            {content.map((stage, index) => (
            <React.Fragment key={index}>
                <Stage {...stage} />
            </React.Fragment>
            ))}
        </div>
    </section>
  )
}
