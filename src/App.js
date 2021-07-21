import React, { useState, useEffect } from 'react'
import { Questionaire } from './components'; 
 
const API_URL = 'https://opentdb.com/api.php?amount=20&category=11&difficulty=easy&type=multiple'

function App() { 
  const [ questions, setQuestions ] = useState([]);
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const [score, setScore] = useState(0);

  useEffect (() => {
    fetch(API_URL) 
    .then((res) => res.json())
    .then((data) => {
      setQuestions(data.results)
    });
  }, []);

  const handleAnswer = (answer) => {
    const newIndex = currentIndex + 1
    setCurrentIndex(newIndex)

    if (answer === questions[currentIndex].correct_answer) {//IF ANSWER MATCHES INCREASE SCORE
      setScore(score + 1); //INCREASES SCORE
    }  
  }
  return questions.length > 0 ? (    
       <div className='container'>
         {currentIndex >= questions.length ? (
          <h1 className='text-3xl text-black font-bold'>YOUR SCORE WAS {score}/20</h1>
      ) : (
        <Questionaire
        data={questions[currentIndex]}
        handleAnswer={handleAnswer}/>
      )}
      </div>
      ):(
          <h1 className='text-2xl text-white font-bold'>Loading...</h1> 
      );
}


export default App