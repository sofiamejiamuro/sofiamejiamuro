
import React from 'react';
import Image from "next/image";

export default function AlviBriefEn() {
  return (
    <section 
        className="
          mb-0 max-w p-10
          leading-8 sm:mb-10
          scroll-mt-28 
          h-auto
         "
      >
        <h2 className="
        text-neutral-950 text-3xl sm:text-5xl font-medium capitalize mb-8 text-center">
        Alvi - AI Virtual Assistant
        </h2>
        <div className='
          grid grid-cols-1 sm:grid-cols-2
        ' >
          <div className='
            rounded-lg  place-content-center '
          >
            <Image
              src="/talleres/alvi-brief.png"
              quality={"100"}
              width={"1000"}
              height={"510"}
              alt="Sam phone"
              className='max-w'
            >
            </Image>
          </div>
          <div className='
         
            rounded-lg  text-neutral-950 
            place-content-center sm:p-12'>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-10'>Brief</h1>
            <p className='sm:mt-2 leading-relaxed text-justify text-lg sm:text-2xl'>
            Alvi is a <span className="font-bold text-neutral-950">passionate fan of Club Atlético Talleres de Córdoba</span>, one of the most beloved and followed football teams in Argentina.
            This virtual assistant is designed to <span className="font-bold text-neutral-950">connect with the club's members and provide them with an interactive and personalized 
            experience</span>. Alvi not only answers questions and resolves concerns but also <span className="font-bold text-neutral-950">plays a crucial role in promoting club membership</span>, 
            fostering a sense of community and belonging among fans.
            </p>
          </div>
        </div>
      </section>
  )
}