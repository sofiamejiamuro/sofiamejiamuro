'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function BackButton() {
    const router = useRouter();
    return (
        <div className='' onClick={router.back}>BackButton</div>
    )
}
