import React, { useState, useEffect } from 'react'
import { Questionaire } from './components'; 


const API_URL = 'https://opentdb.com/api.php?amount=20&category=11&difficulty=easy&type=multiple'

//FIRST FUNCTION
//GET QUESTIONS FROM API 
//SHOW RIGHT ANSWER WITH GREEN  
//SHOW WRONG ANSWER WITH RED
//GRAB NEXT QUESTION
//KEEP TRACK OF POINTS 


function App() {
  const [ questions, setQuestions ] = useState([]);

  useEffect (() => {
    fetch(API_URL) 
    .then((res) => res.json())
    .then((data) => {
      setQuestions(data.results)
    });
  }, []);

  const handleAnswer = (answer) => {
    console.log(answer);
  }

    return questions.length > 0 ? (
        <div className='container'>
          <Questionaire data={questions[0]} handleAnswer={handleAnswer}/>
    </div>
      ) : (
        <h1 className='text-2xl text-white font-bold'>Loading...</h1>
      )
}

export default App