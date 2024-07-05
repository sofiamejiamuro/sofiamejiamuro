import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function SamApproachSteps() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-4 gap-10 mt-10 px-20'>
      {/** <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image src="/sam/dt_2.png"
              quality={"100"}
              width={"700"}
              height={"510"}
              alt="Sam phone"
              className='max-w'>
        </Image>        
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Empathize</div>
          <ul className="text-gray-700 leading-relaxed text-xl">
            <li> UX Research </li>
          </ul>
        </div>
      </div>*/}
      
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Link
          href='#discover'
        >
          <Image src="/sam/dt_4.png"
                quality={"100"}
                width={"700"}
                height={"510"}
                alt="discover"
                className='max-w'>
          </Image>        
          <div className="px-6 py-4 bg-white  hover:bg-violet-200">
            <div className="font-bold text-xl mb-2">Discover</div>
            <ul className="text-gray-700 leading-relaxed text-xl">
              <li>User Persona </li>
              <li>Address the problem</li>
              <li>Mapping Topics</li>
            </ul>
          </div> 
        </Link>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:bg-violet-200">
        <Link
          href="#define"
        >
          <Image src="/sam/dt_3.png"
                quality={"100"}
                width={"700"}
                height={"510"}
                alt="define"
                className='max-w'>
          </Image>        
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Define</div>
            <ul className="text-gray-700 leading-relaxed text-xl">
              <li>Bot Persona</li>
              <li>Conversation Flows</li>
            </ul>
          </div>
        </Link>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg  bg-white hover:bg-violet-200">
        <Link
          href="#develop"
        >
          <Image src="/sam/dt_5.png"
                quality={"100"}
                width={"700"}
                height={"510"}
                alt="develop"
                className='max-w'>
          </Image>        
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Develop</div>
            <ul className="text-gray-700 leading-relaxed text-xl">
              <li>System Prompt</li>
              <li>LLM evaluation methodolgy</li>
            </ul>
          </div>
        </Link>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:bg-violet-200">
        <Link
          href="#deliver"
        >
          <Image src="/sam/dt_6.png"
                quality={"100"}
                width={"700"}
                height={"510"}
                alt="deliver"
                className='max-w'>
          </Image>        
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Deliver</div>
            <ul className="text-gray-700 leading-relaxed text-xl">
              <li>Post Launch</li>
            </ul>
          </div>
        </Link>
      </div>
    </div>
  )
}
