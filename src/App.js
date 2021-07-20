import React, { useState, useEffect } from 'react'
import { Questionaire } from './components'; 
 
const API_URL = 'https://opentdb.com/api.php?amount=20&category=11&difficulty=easy&type=multiple'

function App() {
  const [ questions, setQuestions ] = useState([]);
  const [ currentQuestion, setCurrentQuestion ] = useState(undefined)

  useEffect (() => {
    fetch(API_URL) 
    .then((res) => res.json())
    .then((data) => {
      setQuestions(data.results)
      setCurrentQuestion(data.results[0])
    });
  }, []);

  const handleAnswer = (answer) => {
    //CHECK FOR ANSWER
    //SHOW ANOTHER QUESTION 
    //CHANGE SCORE IF CORRECT
  }

    return questions.length > 0 ? (
        <div className='container'>
          {currentQuestion && 
          (
          <Questionaire data={currentQuestion} 
            handleAnswer={handleAnswer}/>
          )} 
    </div>
      ) : (
        <h1 className='text-2xl text-white font-bold'>Loading...</h1>
      )
}

export default App