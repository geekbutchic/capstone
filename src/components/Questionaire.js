import React from 'react'

const Questionaire = ({ data: {question, correct_answer, incorrect_answers} }) => (
    <div>
                <div className='bg-white text-purple-800 p-10 rounded-xl shadow-md'>
          <h2 className='text-2xl' dangerouslySetInnerHTML={{ __html: question }}/>
        </div>
        <div className='flex flex-wrap mt-4 justify-around grid gap-x-8 gap-y-4 grid-cols-2'>  
        <button className='p-4 text-purple-800 font-semibold rounded-xl shadow mb-4 bg-white hover:bg-red-200'>{correct_answer}</button>
        <button className='p-4 text-purple-800 font-semibold rounded-xl shadow mb-4 bg-white hover:bg-red-200'>{incorrect_answers[0]}</button>
        <button className='p-4 text-purple-800 font-semibold rounded-xl shadow mb-4 bg-white hover:bg-red-200'>{incorrect_answers[1]}</button>
        <button className='p-4 text-purple-800 font-semibold rounded-xl shadow mb-4 bg-white hover:bg-red-200'>{incorrect_answers[2]}</button> 
        </div>
    </div>
);

export default Questionaire;