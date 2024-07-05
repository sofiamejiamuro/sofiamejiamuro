'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


export default function SpanishButton() {
    const router = useRouter();
    return (
        <div className='flex flex-row-reverse px-14'>
            <Link 
            href="/sam-asistente-virtual"
            className='
            text-xl text-violet-600 
            rounded-md bg-violet-50 p-3 mx-2
            '>
                Es
            </Link>
            <Link 
            href="/sam-virtual-assistant"
            className='
            text-xl text-violet-600 
            rounded-md bg-violet-50 p-3 mx-2
            '>
                En
            </Link>
        </div>
    )
}