import React from 'react'

const Questionaire = ({ showAnswers, handleAnswer,handleNextQuestion, data: {question, correct_answer, answers} }) => {    
    return (
    <div>
        <div>
            <h1 className='text-6xl p-8 text-red-600 flex justify-center items-center font-serif Georgia text-white'>Quiz Me Baby One More Time</h1>
        </div>
        <div className='bg-white text-black p-8 rounded-xl shadow-md font-semibold'>
        <h2 className='text-2xl' dangerouslySetInnerHTML={{ __html: question }}/>
        </div>
        <div className='flex flex-wrap mt-4 justify-around grid gap-x-8 gap-y-4 grid-cols-2'>
        
        {answers.map((answer, idx) => {
        const bgColor = showAnswers ? answer === correct_answer ? 'bg-green-300' : 'bg-red-300' : 'bg-white';
        return (
        <button
        key={idx}
        className={`${bgColor} p-4 text-black font-semibold rounded-xl shadow mb-4 bg-white hover:bg-blue-300`}
        onClick={() => handleAnswer(answer)}
        dangerouslySetInnerHTML={{ __html: answer }}/>
        )})}

        </div>
        {showAnswers && (
            <div className="flex justify-center items-center">
            <button
            onClick={handleNextQuestion}
            className={`p-3 text-black font-semibold rounded-xl shadow mb-4 bg-blue-200 hover:bg-blue-400`}>
            Next Question
            </button>
            </div>
        )}
    </div>
)};     

export default Questionaire;