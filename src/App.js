import React, { useState, useEffect } from "react"; // IMPORT STATE - HOOK FROM REACT
import { Questionaire } from "./components";

//API_URL IN VARIABLE - SAVED IN VARIABLE
const API_URL = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple'//API URL//MOVIES


function App () {
  //SETS STATE FOR HOOKS 
  //BRACKETS ARE USED IN JAVASCRIPT SYNTAX DESTRUCTURING - CREATING TWO NEW VARIABLES
  const [questions, setQuestions] = useState([]);//RETURNS A PAIR OF VALUES - SIMILAR TO THIS.STATE.QUESTIONS + THIS.SET_STATE
  const [currentIndex, setCurrentIndex] = useState(0);//LET'S YOU ADD REACT STATE - REACT REMEMBERS COUNT DURING RE-RENDER
  const [value, setScore] = useState(0);//DECLARING STATE VARIABLE
  const [answers, setAnswers] = useState(false);//HOLDS CURRENT VALUE UNTIL CHANGED

  useEffect(() => {//RUNS AFTER RENDER 
    fetch(API_URL)//API CALL
      .then((res) => res.json())//PARSE DATA 
      .then((data) => {
        console.log(data.results);
        const questions = data.results.map((question) => ({//MAP OVER QUESTIONS 
          ...question,
          answers: [//SPREAD AND SORT QUESTIONS
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),//DISTRIBUTES POSITIVE AND NEGATIVE NUMBERS IN AN EQUAL MANNER
        }));
        setQuestions(questions);//CAPTURE SORTED QUESTIONS
      });
  }, []);//ACTS LIKE COMPONENT_DID_MOUNT -> ONLY RUNS ONCE - CLEANUP FUNCTION

  const handleAnswer = (answer) => {
    if (!answers) {
      if (answer === questions[currentIndex].correct_answer) {//IF ANSWER === QUESTIONS + CORRECT ANSWER ADD SCORE
        setScore(value + 1);
      }
    }
    setAnswers(true);//AFTER VALUE RESET 
  };

  const handleNextQuestion = () => {//RESET ANSWERS + VALUE ADDS TO CURRENT INDEX
    setAnswers(false);
    setCurrentIndex(currentIndex + 1);
  };

  return questions.length > 0 ? (//FOR EXAMPLE LENGTH: 10 
    <div className="container">
      {currentIndex >= questions.length ? (
        <h1 className="text-2xl text-white font-bold bg-red-400 rounded-xl p-2">
          GAME ENDED YOUR FINAL SCORE IS: {value}/10
        </h1>
      ) : (
        //PASSING IN PROPS 
        <Questionaire
          data={questions[currentIndex]}
          showAnswers={answers}
          handleNextQuestion={handleNextQuestion}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  ) : (
    <h1 className="text-4xl text-white font-bold">Loading...</h1> //SETS LOADING SCREEN IF DELAYED - USUALLY 1 TO 2 SECONDS WHILE WAITING FOR RENDER
  );
}

export default App;
