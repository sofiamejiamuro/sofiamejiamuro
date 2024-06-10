import React from 'react'

export default function TravelBotProposal() {
  return (
    <section  
    className="
      mb-0 max-w p-14
      leading-8
      scroll-mt-28 text-neutral-950
      h-auto bg-violet-100 "
    id='ng-exercise-1'>
        <div className='
        text-lg sm:text-2xl leading-10
        content-center justify-self-center'>
            <h2 className='
                text-lg sm:text-4xl leading-10 
                font-medium mb-3'>Proposal</h2>       
            <h4 className='text-lg sm:text-2xl font-medium my-3'>1. Define the Chatbot's Objectives</h4>
            <ul  className='list-disc list-inside leading-relaxed'>
                <li>Assist users in purchasing tours and travel packages.</li>
                <li>Help users create personalized travel alerts.</li>
            </ul>
            <h4 className='text-lg sm:text-2xl font-medium my-3'>2. Choose a Platform</h4>
            <ul  className='list-disc list-inside leading-relaxed'>
                <li>Integrate the chatbot on both the mobile app and the website.</li>
                <li>Consider platforms like Facebook Messenger, WhatsApp, and in-app chat for wider accessibility.</li>
            </ul>
            <h4 className='text-lg sm:text-2xl font-medium my-3'>3. Set Up Chatbot Framework</h4>
            <ul  className='list-disc list-inside leading-relaxed'>
                <li>Use a chatbot framework such as Dialogflow, Microsoft Bot Framework, or Amazon Lex.</li>
            </ul>
            <h4 className='text-lg sm:text-2xl font-medium my-3'>4. Design the Chatbot Flow</h4>
            <ul  className='list-disc list-inside leading-relaxed'>
                <li>Greeting and Onboarding</li>
                <li>Purchase Assistance Flow</li>
                <li>Personalized Alerts Creation Flow</li>
            </ul>
            <h4 className='text-lg sm:text-2xl font-medium my-3'>5. Implement Search and Filter Functionality</h4>
            <ul  className='list-disc list-inside leading-relaxed'>
                <li>Ensure the chatbot can search and filter destinations.</li>
                <li>Allow users to search by city name or by the first letter.</li>
            </ul>
            <h4 className='text-lg sm:text-2xl font-medium my-3'>6. Integrate with External Systems</h4>
            <ul  className='list-disc list-inside leading-relaxed'>
                <li>Connect with travel APIs for real-time information on flights, hotels, and packages.</li>
                <li>Ensure secure handling of user data and payment information.</li>
            </ul>
            <h4 className='text-lg sm:text-2xl font-medium my-3'>7. Testing</h4>
            <ul  className='list-disc list-inside leading-relaxed'>
                <li>Conduct thorough testing to ensure smooth user experience.</li>
                <li>Use beta testers to gather feedback and make improvements.</li>
            </ul>
            <h4 className='text-lg sm:text-2xl font-medium my-3'>8. Launch and Monitor</h4>
            <ul  className='list-disc list-inside leading-relaxed'>
                <li>Deploy the chatbot on both platforms.</li>
                <li>Monitor its performance and user interactions.</li>
                <li>Continuously update and improve the chatbot based on user feedback and new requirements.</li>
            </ul>

        </div>
    </section>
  )
}
