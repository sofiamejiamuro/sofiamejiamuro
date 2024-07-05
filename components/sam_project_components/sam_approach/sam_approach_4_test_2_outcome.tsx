import React from 'react';
import Image from "next/image";


export default function SamTestOutcome() {
  return (
    <div className='
    sm:mx-12 text-neutral-950 
    place-content-center p-10'
    id="deliver">
        <h1 className='text-3xl font-semibold mb-10'>Deliver</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
            <div className=' flex justify-center'>
                <div className='w-[40%] self-center'>
                   <Image 
                src="/sam/iterate.png"
                quality={"100"}
                width={"300"}
                height={"900"}
                alt="Sam phone"
                className='max-w'
                style={{
                borderRadius: "10px",
                }}>
                </Image>   
                </div>
                
            </div>
            <div>
                <h2 className='sm:text-2xl font-semibold'> What insights emerged?</h2>
                <ul className='
                leading-relaxed text-justify sm:text-xl 
                list-decimal list-inside my-3'>
                    <li><span className='font-bold'>Data Source Organization: </span>
                    It became evident that improving the organization of our data sources used for model training is crucial. We recognized the necessity to restructure content into a more concise question-and-answer format to enhance the effectiveness of the chatbot.</li>
                    <li><span className=' font-bold'>Error Margin Awareness: </span>Given the probabilistic nature of the model, we acknowledged the importance of considering error margins. Communicating these effectively to stakeholders helped in setting realistic expectations regarding the performance of the chatbot.</li>
                    <li><span className='font-bold'>Response Length Optimization: </span>The generative nature of the model led us to address the issue of lengthy responses, which could overwhelm users, particularly on certain devices. We conducted tests to condense responses, ensuring they are concise and minimize cognitive load on users.</li>
                </ul>
                <p className='my-3 leading-relaxed text-justify sm:text-xl'>These insights guided us in refining the functionality of the bot and user experience, aligning it more closely with user expectations and device capabilities.</p>
            </div>
        </div>

    </div>
        
  )
}
