import React from 'react'


const Questionaire = ({ handleAnswer, data: {question, correct_answer, incorrect_answers} }) => {   
    const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5)
    return (
    <div>
        <div className='bg-red-50 text-blue-800 p-8 rounded-xl shadow-md font-semibold'>
        <h2 className='text-2xl' dangerouslySetInnerHTML={{ __html: question }}/>
        </div>
        <div className='flex flex-wrap mt-4 justify-around grid gap-x-8 gap-y-4 grid-cols-2'>
        
        {shuffledAnswers.map(answer => (//bg-purple-300
        <button
        className={`${correct_answer === answer ? '' : 'bg-white'} p-4 text-blue-700 font-semibold rounded-xl shadow mb-4 bg-red-50 hover:bg-red-200`}
        onClick={() => handleAnswer(answer)}
        dangerouslySetInnerHTML={{ __html: answer }}/>
        ))}
        </div>
    </div>
)};     

export default Questionaire;