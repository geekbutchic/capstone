import React, { useState, useEffect } from 'react'
import { Questionaire } from './components'; 
 
const API_URL = 'https://opentdb.com/api.php?amount=20&category=11&difficulty=easy&type=multiple'

function App() { 
  const [ questions, setQuestions ] = useState([]);
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false)

  useEffect (() => {
    fetch(API_URL) 
    .then((res) => res.json())
    .then((data) => {
      setQuestions(data.results)
    });
  }, []);

  const handleAnswer = (answer) => {
    if(!showAnswers) {
    if (answer === questions[currentIndex].correct_answer) {//IF ANSWER MATCHES INCREASE SCORE
      setScore(score + 1); //INCREASES SCORE
    } 

  }
    setShowAnswers(true)
    // const newIndex = currentIndex + 1
    // setCurrentIndex(newIndex)
  }

  return questions.length > 0 ? (    
       <div className='container'>
         {currentIndex >= questions.length ? (
          <h1 className='text-2xl text-white font-bold bg-red-400 rounded-xl p-2'>GAME ENDED YOUR FINAL SCORE IS: {score}/20</h1>
      ) : (
        <Questionaire//PROPS  
        data={questions[currentIndex]}
        showAnswers={showAnswers}
        handleAnswer={handleAnswer}/>
      )}
      </div>
      ):(
          <h1 className='text-2xl text-white font-bold'>Loading...</h1> 
      );
}


export default App