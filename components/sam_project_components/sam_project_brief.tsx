
import React from 'react';
import Image from "next/image";

export default function SamBrief() {
  return (
    <section 
        className="
          mb-10 max-w p-10
          leading-8 sm:mb-10
          scroll-mt-28 
          h-auto
         "
      >
        
        <h2 className="
        text-neutral-950 text-5xl font-medium capitalize mb-8 text-center">
        SAM - Santex Virtual Assistant
        </h2>
        <div className='
          grid grid-cols-1 sm:grid-cols-2 mt-10
          
        ' >
          <div className='
          
            rounded-lg  place-content-center '
          >
            <Image
              src="/sam_phone_mockup_2.png"
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
            place-content-center p-12'>
            <h1 className=' text-4xl font-semibold mb-10'>Brief</h1>
            <p className='mt-2 leading-relaxed text-justify text-2xl'>
              SAM (Santex AI Member) is the <span className="font-bold text-neutral-950">virtual assistant powered by an LLM </span> from a tech company specializing in digital transformation.
              The goal of SAM is to <span className="font-bold text-neutral-950">answer questions related to Santex</span>, whether about solutions and services, 
              <span className="font-bold text-neutral-950 "> assist in lead generation </span>through an intelligent conversational experience, 
              and <span className="font-bold text-neutral-950">discuss</span> how the latest technologies, industry insights, and current tech news relate to the interests of the client.
            </p>
          </div>
        </div>
      </section>
  )
}
