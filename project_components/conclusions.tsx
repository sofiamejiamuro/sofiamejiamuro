import React from 'react';
import Image from "next/image";
import Conclusion from './conclusion';

export default function Conclusions({ content }) {
  return (
    <section className="mb-10 max-w leading-8 sm:mb-10 pb-20 scroll-mt-28 h-auto">  
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 mt-20 px-10 sm:px-24'>
        {content.map((text, index) => (
            <React.Fragment key={index}>
                <Conclusion {...text} />
            </React.Fragment>
        ))}
      </div>
    </section>
  )
}
