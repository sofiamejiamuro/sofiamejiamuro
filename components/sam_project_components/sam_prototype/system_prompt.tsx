import React from 'react';
import SPCards from './sp_cards';
import SPCreation from './sp_creation';
import { SlPencil } from "react-icons/sl";
import { IoKeyOutline } from "react-icons/io5";
import { BsArrowRepeat } from "react-icons/bs";


export default function SystemPrompt() {
  return (
    <div>
      <h2 className='text-2xl font-semibold'>Getting ready</h2>
      <p className='my-3 leading-relaxed text-xl'>
      Creating a robust and effective System Prompt for the implementation of a Large Language Model (ChatGPT) involves a comprehensive and methodical approach.
      As it was our first time working with such advanced technology, my journey began with a deep dive into understanding the fundamentals.
      Additionally, we had to innovate and develop our own methodologies and testing tools during the prototyping phase, as the novelty of the technology meant existing resources were insufficient. 
      </p>
      {/**CARDS */}
      <div>
        <div className='flex'>
          <div className='place-self-center'>
            <SlPencil color='black' fontSize='3em'/>
          </div>
          <p className="ml-5 leading-relaxed text-xl text-justify"><span className='font-bold'>Initial training: </span>
          It is essential to understand how an LLM works before starting to work with it. Taking courses and getting trained in the functioning of language models like the one used in the System Prompt is a solid foundation to begin with.
          </p>   
        </div> 

        <div className='flex mt-3 '>
          <div className='place-self-center'>
            <IoKeyOutline color='black' fontSize='3em'/>
          </div>
          <p className="ml-5 leading-relaxed text-xl text-justify"><span className='font-bold'>Understanding key concepts: </span>
          Understanding concepts such as tokenization (the process of dividing text into smaller units), hallucinations (errors or inconsistent outputs from the model), and RAG (Retrieve, Add, Generate) is crucial for effectively working with the model and addressing issues that may arise during the creation process.</p>   
        </div> 

        <div className='flex mt-3'>
          <div className='place-self-center'>
            <BsArrowRepeat color='black' fontSize='3em'/>
          </div>
          <p className="ml-5 leading-relaxed text-xl text-justify"><span className='font-bold'>Accuracy: </span>
          This step shows an iterative and continuously developing approach. Building the parts of the System Prompt, such as the context, approach, and response format, involves trial and error, adjustments, and refinements to achieve optimal results. Additionally, understanding how to relate specific functions and tools applied to the LLM is crucial to ensuring consistent and high-quality performance.
          </p>   
        </div> 
      </div>
      {/**<SPCards /> */}  
      {/**System Prompt*/}
      <SPCreation />
    </div>
  )
}
