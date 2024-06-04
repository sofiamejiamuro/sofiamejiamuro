import React from 'react';

export default function MethodologyCreation() {
  return (
    <div>
        <h3 className='sm:text-2xl font-semibold mt-8 mb-3'>Creating the methodology</h3>
        {/**Creation of Annotation Scripts */}
        <p className='leading-relaxed sm:text-xl text-violet-950 font-bold'>Creation of Annotation Scripts</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-2 mb-6 text-justify'>
            <div>
                <p className='leading-relaxed sm:text-xl'><span className='font-medium'>Objective: </span>
                Develop scripts to manipulate and format data, enabling the creation of a structured annotation system.</p>
            </div>
            <div>
                <p className='leading-relaxed sm:text-xl'><span className='font-medium'>Implementation: </span>
                Write scripts in Python and Google Apps Script to process chatbot conversation data, standardize the format, and prepare it for annotation.</p>
            </div>
        </div>
         {/**Generation of Analytical Reports */}
        <p className='leading-relaxed sm:text-xl  text-violet-950 font-bold'>Generation of Analytical Reports</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-2 mb-6 text-justify'>
            <div>
                <p className='leading-relaxed sm:text-xl'><span className='font-medium'>Objective: </span>
                Produce comprehensive reports that summarize the annotations and analyze the conversations.</p>
            </div>
            <div>
                <p className='leading-relaxed sm:text-xl'><span className='font-medium'>Implementation: </span>
                Create detailed reports highlighting key findings from the annotations. These reports should include metrics on relevance, completeness, accuracy, error types, topic adherence, language consistency, and response length.</p>
            </div>
        </div>
          {/**Manual Annotation and Systematization*/}
          <p className='leading-relaxed sm:text-xl  text-violet-950 font-bold'>Manual Annotation and Systematization</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-2 mb-6 text-justify'>
            <div>
                <p className='leading-relaxed sm:text-xl'><span className='font-bold'>Initial Phase </span></p>
                <p className='leading-relaxed sm:text-xl'><span className='font-medium'>Method: </span>
                Perform manual annotations to evaluate chatbot responses based on the defined criteria (relevance, completeness, accuracy, etc.).</p>
                <p className='leading-relaxed sm:text-xl'><span className='font-medium'>Outcome: </span>
                Gain a thorough understanding of the data and refine the evaluation methodology.</p>
            </div>
            <div>
                <p className='leading-relaxed sm:text-xl'><span className='font-bold'>Systematized Phase </span></p>
                <p className='leading-relaxed sm:text-xl'><span className='font-medium'>Method: </span>
                Once the methodology was validated through manual annotation, the process was systematized using Tableau and ChatGPT.</p>
                <p className='leading-relaxed sm:text-xl'><span className='font-medium'>Implementation: </span>
                Use Tableau to automate the annotation and analysis process, enabling efficient and scalable evaluation of chatbot conversations.</p>
            </div>
        </div>
    </div>
  )
}
