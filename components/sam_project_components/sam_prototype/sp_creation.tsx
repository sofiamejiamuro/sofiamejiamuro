import React from 'react';

export default function SPCreation() {
  return (
    <div >
        <h2 className='text-lg sm:text-2xl font-semibold sm:mt-10 mb-5'>System Prompt</h2>
        <p className='leading-relaxed text-justify sm:text-xl'>
            In developing SAM, we focused on key elements for effectiveness. 
            Detailed system prompts, clear response formats, and data retrieval functions ensured accurate, engaging communication. 
            User interaction guidelines and filtering maintained a safe, user-friendly environment. 
            It is important to mention that achieving the final versions involved significant iteration on the system prompts, as no guides existed before. 
            This approach resulted in a robust assistant that enhanced user engagement and support for the company.
        </p>
        <h3 className='sm:text-2xl font-semibold sm:mt-6 text-center'>Key Elements</h3>
        <h4 className='sm:text-2xl font-semibold my-2 text-violet-950'>System Prompts</h4>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 sm:mt-4 text-justify'>
            <div>
                <p className='leading-relaxed sm:text-xl'><span className='font-bold'>Context Definition: </span>Detailed context descriptions were created for SAM’s interactions on both the website and Slack.</p>
            </div>
            <div>
                <p className='leading-relaxed sm:text-xl italic'>Example: </p>
                <p className='leading-relaxed sm:text-xl italic'>You are SAM, a virtual assistant for Santex. Your role is to assist users on our website with their queries about digital transformation solutions and to help new employees on Slack with onboarding questions.</p>
            </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4 text-justify'>
            <div>
                <p className='leading-relaxed sm:text-xl'><span className='font-bold'>Approach: </span> Specific guidelines were developed to handle different types of inquiries, such as sales, solutions, specific topics, and general inquiries.</p>
            </div>
            <div>
                <p className='leading-relaxed sm:text-xl italic'>Example: For inquiries about sales, highlight how the solutions of Santex can improve their business. For specific topics like AI or B Corp, discuss the expertise and how these impact the user’s business.</p>
            </div>
        </div>
        <h4 className='sm:text-2xl font-semibold my-2 text-violet-950'>Response Format</h4>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4 text-justify'>
            <div>
                <p className='leading-relaxed sm:text-xl'><span className='font-bold'>Tone and Style: </span>For the website, a tech-savvy and straightforward tone was used, while for Slack, a friendly and optimistic tone with emojis was preferred.</p>
            </div>
            <div>
                <p className='leading-relaxed sm:text-xl italic'>Example: Website: Our AI solutions can revolutionize your business operations. Would you like to know more about AI implementation or our success stories?</p>
                <p className='leading-relaxed sm:text-xl italic'>Example: Slack: Welcome to Santex! 😊 I am here to help you with any questions. How can I assist you today?</p>
            </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4 text-justify'>
            <div>
                <p className='leading-relaxed sm:text-xl'><span className='font-bold'>Word Limit: </span> Responses were kept concise, never exceeding 100 words.</p>
            </div>
            <div>
                <p className='leading-relaxed sm:text-xl italic'>Example: In prioritizing emerging technologies for your digital transformation strategy, several key areas should be considered: AI, IoT, Cloud Computing. Which of these interests you most?</p>
            </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4 text-justify'>
            <div>
                <p className='leading-relaxed sm:text-xl'><span className='font-bold'>Formatting: </span>Use of bullet points and lists to enhance readability.</p>
            </div>
            <div>
                <p className='leading-relaxed sm:text-xl italic'>Example:
                    Key areas of focus:
                   
                    - Artificial Intelligence (AI)
                 
                    - Internet of Things (IoT)
                    - Cloud Computing
                    Let us know which area you would like to explore further.
                </p>
            </div>
        </div>
        <h4 className='sm:text-2xl font-semibold my-2 text-violet-950'>Function Integration</h4>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4 text-justify'>
            <div>
                <p className='leading-relaxed sm:text-xl'><span className='font-bold'>Data Retrieval Functions: </span>Implemented a function (santex_data) to fetch accurate and up-to-date information relevant to user inquiries.</p>
            </div>
            <div>
                <p className='leading-relaxed sm:text-xl italic'>Example: Using santex_data to fetch the latest information: According to our latest data, integrating AI into your business can increase efficiency by up to 40%. Would you like to learn more about our AI solutions?</p>
            </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4 text-justify'>
            <div>                
                <p className='leading-relaxed sm:text-xl'><span className='font-bold'>Clarifying Questions: </span>Developed strategies to ask follow-up questions for better understanding of user needs.</p>
            </div>
            <div>
                <p className='leading-relaxed sm:text-xl italic'>Example: Could you tell me more about your business and how you are currently approaching digital transformation? This will help us provide more tailored advice.</p>
            </div>
        </div>
        <h4 className='sm:text-2xl font-semibold my-2 text-violet-950'>User Interaction Guidelines</h4>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4 text-justify'>
            <div>
                <p className='leading-relaxed sm:text-xl'><span className='font-bold'>Website Users: </span>Focused on collecting contact information from interested users and highlighting Santex’s solutions.</p>
            </div>
            <div>
                <p className='leading-relaxed sm:text-xl italic'>Example: We offer comprehensive digital transformation solutions tailored to your needs. Can I have your name and email to send you more detailed information?</p>
            </div>
        </div>
        <h4 className='sm:text-2xl font-semibold my-2 text-violet-950'>Filtering and Error Handling:</h4>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4 text-justify'>
            <div>
                <p className='leading-relaxed sm:text-xl'>Developed filters to manage inappropriate content and prepared messages for handling performance issues.</p>
            </div>
            <div>
                <p className='leading-relaxed sm:text-xl italic'>Example of Filtering: I am sorry, but I can not engage in conversations that promote hate. I am here to answer all your questions related to Santex.</p>
                <p className='leading-relaxed sm:text-xl italic'>Example of Error Handling: Sorry... I missed that. For now, I am experiencing some performance issues, which are beyond my control. Rest assured I will be back shortly. Please ping me again in a few minutes.</p>
            </div>
        </div>
    </div>
  )
}
