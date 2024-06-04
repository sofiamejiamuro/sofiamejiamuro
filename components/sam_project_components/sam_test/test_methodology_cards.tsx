import React from 'react';
import Image from "next/image";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


export default function TestMethodology2() {
  const style = { color: 'blue', size: '50px',}

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-2 mb-6'>
        <div>
          <div className='flex'>
            <div className='place-self-center'>
              <IoIosCheckmarkCircleOutline color='black' fontSize='3em'/>
            </div>
            <p className="ml-5 leading-relaxed sm:text-xl text-justify"><span className='font-bold'>Relevance: </span>
            The response must directly address the question or topic raised.</p>   
          </div> 

          <div className='flex mt-3 '>
            <div className='place-self-center'>
              <IoIosCheckmarkCircleOutline color='black' fontSize='3em'/>
            </div>
            <p className="ml-5 leading-relaxed sm:text-xl text-justify"><span className='font-bold'>Completeness: </span>
            The response should adequately cover all important aspects of the question.</p>   
          </div> 

          <div className='flex mt-3'>
            <div className='place-self-center'>
              <IoIosCheckmarkCircleOutline color='black' fontSize='3em'/>
            </div>
            <p className="ml-5 leading-relaxed sm:text-xl text-justify"><span className='font-bold'>Accuracy: </span>
            The information provided in the response must be precise and correct. It should not contain false or inaccurate information.</p>   
          </div> 
        </div>
        <div>
          <div className='flex mt-2'>
            <div className='place-self-center'>
              <IoIosCheckmarkCircleOutline color='black' fontSize='3em'/>
            </div>
            <p className="ml-5 leading-relaxed sm:text-xl"><span className='font-bold'>Language: </span>
            The language in which the request was made and whether the virtual assistant continued the conversation in the same language or switched to English.</p>  
          </div>
          <div className='flex'>
            <div className='place-self-center'>
              <IoIosCheckmarkCircleOutline color='black' fontSize='3em'/>
            </div>
            <p className="ml-5 leading-relaxed sm:text-xl text-justify"><span className='font-bold'>Number of words: </span>
            The number of words in the response. Measure the response length to estimate costs associated with processing and generating responses.</p>   
          </div> 
          <div className='flex mt-3'>
            <div className='place-self-center'>
              <IoIosCheckmarkCircleOutline color='black' fontSize='3em'/>
            </div>
            <p className="ml-5 leading-relaxed sm:text-xl text-justify"><span className='font-bold'>Topic: </span>
            Record whether restricted topics are responded to or not.</p>   
          </div> 
        </div>      
      </div>  

      <div className='flex'>
        <div className='place-self-center'>
          <IoIosCheckmarkCircleOutline color='black' fontSize='3em'/>
        </div>
        <p className="ml-5 leading-relaxed sm:text-xl text-justify"><span className='font-bold'>Type of error: </span> <br></br> 
          <span className='font-semibold'>Missing Information: </span>Evaluate instances where the requested information is not found in the knowledge base with which the model was personalized through training. {' '}
          <span className='font-semibold'>Hallucinations: </span>Count the number of instances where the model generates information that is not grounded in the input data or real-world facts, resulting in inaccurate or fabricated content.{' '}
          <span className='font-semibold'>API Failures: </span>Document any failures in the OpenAI API during the interaction </p>
      </div> 
    </div>
  )
}
