
'use client'
import React, { useState } from 'react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

export default function Carousel({slides}) {
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };
    
    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    return (
        <div className='overflow-hidden relative rounded-lg'>
            <div 
                className={`flex transition ease-out duration-40`}
                style={{
                transform: `translateX(-${current * 100}%)`,
                }}>
                {slides.map((s: string | undefined) => {
                    return <img src={s} />
                })}
            </div>
            
            <div className="absolute top-0 h-full w-full justify-between items-center flex text-[#fdd673] px-10 text-4xl">
                <button onClick={previousSlide}>
                    <FaRegArrowAltCircleLeft />
                </button>
                <button onClick={nextSlide}>
                    <FaRegArrowAltCircleRight />
                </button>
            </div>
            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {slides.map((s, i) => {
                return (
                    <div
                    onClick={() => {
                        setCurrent(i);
                    }}
                    key={"circle" + i}
                    className={`rounded-full w-5 h-5 cursor-pointer  ${
                        i == current ? "bg-[#fdd673]" : "bg-gray-500"
                    }`}
                    ></div>
                );
                })}
            </div>
        </div>
    )
}
