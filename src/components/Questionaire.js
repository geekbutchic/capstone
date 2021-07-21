import React from 'react'


const Questionaire = ({ showAnswers, handleAnswer, data: {question, correct_answer, incorrect_answers} }) => {   
    const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5)
    return (
    <div>
        <div><h1 className='text-6xl p-8 text-red-600 flex justify-center items-center font-serif Georgia text-white'>Quiz Me Baby One More Time</h1></div>
        <div className='bg-white text-black p-8 rounded-xl shadow-md font-semibold'>
        <h2 className='text-2xl' dangerouslySetInnerHTML={{ __html: question }}/>
        </div>
        <div className='flex flex-wrap mt-4 justify-around grid gap-x-8 gap-y-4 grid-cols-2'>
        
        {shuffledAnswers.map((answer) => {
        const bgColor = showAnswers ? answer === correct_answer ? 'bg-green-500' : 'bg-red-500' : 'bg-white';
        return (
        <button
        className={`${bgColor} p-4 text-black font-semibold rounded-xl shadow mb-4 bg-white hover:bg-red-200`}
        onClick={() => handleAnswer(answer)}
        dangerouslySetInnerHTML={{ __html: answer }}/>
        )})}
        </div>
        <div className={'flex justify-center items-center p-3 text-black font-semibold rounded-xl shadow mb-4 bg-white hover:bg-red-300'}>
            <button>
                Next Question 
            </button>
        </div>
    </div>
)};     

export default Questionaire;