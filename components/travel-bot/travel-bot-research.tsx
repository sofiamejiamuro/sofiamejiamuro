import React from 'react';
import Carousel from '@/components/carousel';

export default function TravelBotResearch() {

    let slides = [
        "/danger_planet/dp-1.png",
        "/danger_planet/dp-2.png",
        "/danger_planet/dp-3.png",
        "/danger_planet/dp-5.png",
        "/danger_planet/dp-6.png"
        ]
    return (
        <section
        className="
        mb-0 max-w px-14 py-14
        leading-8
        scroll-mt-28 text-neutral-950
        h-auto bg-neutral-100 "
        id='research'>
        <div className='
             text-lg sm:text-2xl leading-10
             content-center justify-self-center text-justify'>
            <h2 className='text-lg sm:text-4xl font-medium mb-3'>Case: Gurú de Viaje (Travel Gurú)</h2>
            <p className='leading-relaxed'>Guru de Viaje is a Mexican flight search engine; they do not sell tickets. 
                They work with various airline websites and travel agencies to share offers 
                to destinations within Mexico and around the world.
            </p>
            <h3 className='text-lg sm:text-3xl font-medium my-3'>About</h3>
            <p className='leading-relaxed'>Site information:</p>
            <p className='leading-relaxed'>"We hunt for deals on the web. <br></br>
                We are DEAL-HUNTERS for flights, hotels, experiences, and everything travel-related. 
                Every day, we publish the best deals we find on various sites and tell you how and where 
                to buy them, so you can take advantage of them."
            </p>
            <p className='leading-relaxed'>
                "What We Do Sell: <br></br>
                We offer a variety of products such as tours and packages to different parts of the world, 
                which are sold directly by Gurú de Viaje, just like any traditional travel agency."
            </p>
            <p className='leading-relaxed'>According to its creators:</p>
            <p className='leading-relaxed'>
                It is a travel demand generator through offers.
                Customers primarily come from the website, but there is greater retention through 
                the mobile app. In 2019, the two platforms together accumulated a total of 18 million users.
            </p>
            <h3 className='text-lg sm:text-3xl font-medium my-3'>The Problem</h3>
            <p className='leading-relaxed'>Gurú de Viaje has two platforms: the mobile app and the website. 
            However, only the website has a Facebook Messenger Bot implemented, which is only visible in 
            the "About Us" section and does not contain any initial dialogue.
            </p>
            <p className='leading-relaxed'>Additionally, it offers the possibility to receive information through WhatsApp groups, 
                which are specialized in the pre-selection of a route of interest.</p>
            {/**VIDEOS */}
            <div className='grid sm:grid-cols-2 gap-10'>
                <div className='flex justify-center py-5'>
                    <iframe
                    src="/travel_bot/quienesSomos-guru.mp4"
                    width="600" height="600"
                    />
                </div>
                <div className='flex justify-center py-5'>
                    <iframe
                    src="/travel_bot/guru-alertasporWhatsApp.mp4"
                    width="600" height="600"
                    />
                </div>
            </div>

            <p className='leading-relaxed' > 
                In the case of creating personalized alerts, both in the mobile app and on the website, on the website, 
                after registering, you create the alert by choosing destinations presented alphabetically by city name.
                Once the destination is selected, it asks for the departure point and the month. In the mobile app,
                before the cities appear, you can pre-filter based on whether the user knows their destination or not.
            </p>
            {/**VIDEOS */}
            <div className='grid sm:grid-cols-2 gap-10'>
                <div className='flex justify-center py-5'>
                    <iframe
                    src="/travel_bot/guru-creaciondealertaendesktop.mp4"
                    width="600" height="600"
                    />
                </div>
                <div className='flex justify-center py-5'>
                    <iframe
                    src="/travel_bot/guru-creaciondealertasmobileapp.mp4"
                    width="600" height="600"
                    />
                </div>
            </div>
    
            <p className='leading-relaxed font-bold mt-3'>Pains</p>
            <ul className='mt-3 list-disc list-inside leading-relaxed'>
                <li>The user would have to join many WhatsApp groups if they wanted multiple destinations.</li>
                <li>The groups are reported as full.</li>
                <li>The personalized alerts do not have a search filter, so the user has to review the entire list or 
                    look for the specific letter of the destination they want to add.</li>
            </ul>
        </div>  
    </section>
  )
}
