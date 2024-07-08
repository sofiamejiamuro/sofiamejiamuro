import React from 'react';
import Carousel from '@/components/carousel';

export default function SamAchievements() {
    let slides = [
        "/sam/achievements_1.png",
        "/sam/achievements_2.png",
        "/sam/achievements_3.png",
      ]
    return (
        <section 
        className="
        mb-10 max-w
        leading-8 sm:mb-0   
        h-auto px-10 sm:px-24
        pb-10 sm:pb-24
        bg-neutral-100"
        >
            <h2 className="text-neutral-950 text-2xl sm:text-5xl font-medium capitalize pt-8 sm:pt-16 text-center">
                METAS LOGRADAS
            </h2>
            <p className='my-6 leading-relaxed text-justify sm:text-xl'>
            Como resultado de los cambios implementados, <span className="font-bold text-neutral-950 ">la tasa de rebote disminuyó al 25%, los leads generados se triplicaron, y el asistente virtual respondió exitosamente a más del 90% de las consultas de los usuarios.</span>
            </p>
            <div className='w-[70%] m-auto my-6'>
                <Carousel slides={slides}/>
            </div>

        </section>
        
    )
}
