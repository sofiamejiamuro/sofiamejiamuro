import React from 'react';
import Carousel from '@/components/carousel';

export default function TravelBotProcess() {
    let slides = [
        "/travel_bot/tb-1.png",
        "/travel_bot/tb-1-2.png",
        "/travel_bot/tb-2.png",
        "/travel_bot/tb-3.png"
    ]
    return (
    <section  
    className="
      mb-0 max-w p-14
      leading-8
      scroll-mt-28 text-neutral-950
      h-auto bg-neutral-100 "
    id='ng-exercise-1'>
        <div className='
            text-lg sm:text-2xl leading-10
            content-center justify-self-center'>
            <h2 className='
                text-lg sm:text-4xl leading-10 
                font-medium mb-3'>Process</h2>
            <h3 className='text-lg sm:text-3xl font-medium my-3'>UX</h3>
            <ul  className='list-disc list-inside leading-relaxed'>
                <li>User Persona</li>
                <li>Journey Map actual en sitio web</li>
                <li>Bot Persona</li>
                <li>Journey Map con chatbot</li>
                <li>Dialog</li>
            </ul>
            <p className='leading-relaxed'>Miro board can be seen {' '}
              <a href='https://miro.com/app/board/o9J_lJEYRuQ=/?share_link_id=994568137214'
                target='_blank'
                className='underline underline-offsite-1'
              >here.</a></p>
            <div className='w-[80%] m-auto my-5'>
                <Carousel slides={slides}/>
            </div>
            <h3 className='text-lg sm:text-3xl font-medium my-3'>Implementation</h3>
            <p className='leading-relaxed'>
                The video showcases the chatbot in action, with Dialogflow integration displayed on the right side. 
                While the model is available for testing, please note that it's specifically trained to respond to the 
                inputs provided within the video.</p>
            <div className='flex justify-center py-5'>
                <iframe
                src="/travel_bot/guru-dialog-demo.mp4"
                width="400" height="450"
                />
            </div>
            <h3 className='text-lg sm:text-3xl font-medium my-3'>Metrics</h3>
            <ul  className='list-disc list-inside leading-relaxed'>
                <li>Number of users who start</li>
                <li>Number of users who finish</li>
                <li>Time it takes for the user to complete their search</li>
                <li>Moment in the flow where the user abandons</li>
                <li>Time of day when most queries are made</li>
                <li>Most frequent destinations, dates, and departure locations for purchases</li>
                <li>Most frequent destinations, dates, and departure locations for alerts</li>
            </ul>
            <h3 className='text-lg sm:text-3xl font-medium my-3'>Next Steps</h3>
            <ul  className='list-disc list-inside leading-relaxed'>
                <li>Creation of the conversational flow for alerts</li>
                <li>Consume API from Dialogflow for destination and departure information, offers, etc.</li>
                <li>Implement webhooks</li>
                <li>Implement Firebase</li>
                <li>Further train the model</li>
            </ul>
            <h3 className='text-lg sm:text-3xl font-medium my-3'>Tech Stack</h3>
            <div className='flex justify-center'>
                <code className='p-10'><img width="80" src="https://user-images.githubusercontent.com/25181517/189716855-2c69ca7a-5149-4647-936d-780610911353.png" alt="Firebase" title="Firebase"/></code>
                <code className='p-10'><img width="80" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/></code>
                <code className='p-10'><img width="80" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/></code>
                <code className='p-10'><img width="80" src="https://user-images.githubusercontent.com/25181517/183911547-990692bc-8411-4878-99a0-43506cdb69cf.png" alt="GCP" title="GCP"/></code>
                <code className='p-10'><img width="80" src="/travel_bot/dialogflow.svg" alt="GCP" title="GCP"/></code>
            </div>
        </div>            
    </section>    
  )
}
