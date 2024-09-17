import React from 'react';
import Image from "next/image";

export default function Brief({  content  }) {

  return (
    <section 
        className=" h-auto mb-0 p-10  max-w 
        leading-8 scroll-mt-28
        text-neutral-950">
        <h2 className="text-3xl sm:text-5xl font-medium capitalize mb-8 text-center">
            {content.project_title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:mt-10">
          <div className="rounded-lg  place-content-center">
            <Image
              src={content.img}
              quality={"100"}
              width={"1000"}
              height={"510"}
              alt={content.project_title}
              className='max-w'
            >
            </Image>
        </div>
        <div className='rounded-lg place-content-center sm:p-12'>
            <p className='sm:mt-2 leading-relaxed text-justify text-lg sm:text-2xl'>
              {content.summary}
            </p>
          </div>
        </div>
    </section>
  )
}