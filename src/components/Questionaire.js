import React from 'react'

const Button = ({ answer }) => (
    <button className='p-4 text-purple-800 font-semibold rounded-xl shadow mb-4 bg-white hover:bg-red-200'>{ answer }</button>
)
 
const Questionaire = ({ handleAnswer, data: {question, correct_answer, incorrect_answers} }) => {   
    const shuffledAnswer = [correct_answer, ...incorrect_answers]
    return (
    <div>
                <div className='bg-white text-purple-800 p-10 rounded-xl shadow-md'>
          <h2 className='text-2xl' dangerouslySetInnerHTML={{ __html: question }}/>
        </div>
        <div className='flex flex-wrap mt-4 justify-around grid gap-x-8 gap-y-4 grid-cols-2'>  
        <Button onClick={() => handleAnswer(shuffledAnswer[0])} answer={shuffledAnswer[0]}/>
        <Button onClick={() => handleAnswer(shuffledAnswer[1])} answer={shuffledAnswer[1]}/>
        <Button onClick={() => handleAnswer(shuffledAnswer[2])} answer={shuffledAnswer[2]}/>
        <Button onClick={() => handleAnswer(shuffledAnswer[3])} answer={shuffledAnswer[3]}/>
        </div>
    </div>
)};    

export default Questionaire;