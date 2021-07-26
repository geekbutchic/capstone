import React, { useState, useEffect } from 'react'// REACT HOOKS - DECONSTRUCTED 
import { Questionaire } from './components'; 

const API_URL = 'https://opentdb.com/api.php?amount=20&category=11&difficulty=easy&type=multiple'//API URL 

function App() {//SETS STATE FOR HOOKS
  const [ questions, setQuestions ] = useState([]);
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const [score, setScore] = useState(0);
  const [ answers, setAnswers] = useState(false)

  useEffect (() => {
    fetch(API_URL) 
    .then((res) => res.json())
    .then((data) => {
      const questions = data.results.map((question) => 
      ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5)
        }));
      setQuestions(questions);
    });
  }, []); 

  const handleAnswer = (answer) => {
    if(!answers) {
    if (answer === questions[currentIndex].correct_answer) {
      setScore(score + 1); 
    } 
  }
    setAnswers(true)
  };

  const handleNextQuestion = () => {
    setAnswers(false);
    setCurrentIndex(currentIndex + 1)
  }

return questions.length > 0 ? (    
     <div className='container'>
       {currentIndex >= questions.length ? (
        <h1 className='text-2xl text-white font-bold bg-red-400 rounded-xl p-2'>GAME ENDED YOUR FINAL SCORE IS: {score}/20</h1>
    ) : (//PASSING IN PROPS 
      <Questionaire
      data={questions[currentIndex]}
      showAnswers={answers}
      handleNextQuestion={handleNextQuestion}
      handleAnswer={handleAnswer}
      />
    )}
    </div>
    ):(
        <h1 className='text-2xl text-white font-bold'>Loading...</h1>//SETS LOADING SCREEN IF DELAYED - USUALLY 1 TO 2 SECONDS 
    );
}


export default App