'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function TranslationButton({ english ,spanish }) {

    const router = useRouter();
    return (
        <div className='flex flex-row-reverse px-14'>
            <Link 
            href={spanish}
            className='
            text-xl text-violet-600 
            rounded-md bg-violet-50 p-3 mx-2
            '>
                Es
            </Link>
            <Link 
            href={english}
            className='
            text-xl text-violet-600 
            rounded-md bg-violet-50 p-3 mx-2
            '>
                En
            </Link>
        </div>
    )
}