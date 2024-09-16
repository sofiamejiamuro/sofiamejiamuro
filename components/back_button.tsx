'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";


export default function BackButton() {
    const router = useRouter();
    return (
        <div className='
        text-5xl text-violet-600 sm:px-14 pt-10 px-6
        '>
            <button  onClick={router.back}>
                <FaRegArrowAltCircleLeft />
            </button>    
        </div>
    )
}
