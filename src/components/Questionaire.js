import React from "react";

//DECONSTRUCT FOR HOOKS + DOUBLE DECONSTRUCTION
//RECEIVES QUESTION AND RENDERS DATA
//DATA DECONSTRUCTED PROPS
const Questionaire = ({
  showAnswers,
  handleAnswer,
  handleNextQuestion,
  data: { question, correct_answer, answers },
}) => {
  return (
    <div>
      <div>
        <h1 className="m-1 text-6xl p-8 text-red-600 flex justify-center items-center font-serif Georgia text-white">
          Quiz Me Baby One More Time!
        </h1>
      </div>
      <div className="bg-blue-200 flex justify-center text-black p-8 rounded-xl shadow-md font-semibold">
        <h2
          className="text-2xl"
          dangerouslySetInnerHTML={{ __html: question }}//PARSES HTML 
        />
      </div>
      <div className="flex flex-wrap mt-4 justify-around grid gap-x-6 gap-y-8 grid-cols-2">
        {answers.map((answer, index) => {//GRID APPLIED 
          //MAP OVER BUTTONS TO SHOW ANSWER AFTER CLICK - RED FOR WRONG / GREEN FOR CORRECT
          const bgColor = showAnswers
            ? answer === correct_answer
              ? "bg-green-300"
              : "bg-red-300"
              : "bg-green-100";
          return (
            <button
              key={index} //KEY FOR PROPS
              className={`${bgColor} p-4 text-black font-semibold rounded-xl shadow mb-4 bg-red-100 hover:bg-blue-200`}
              onClick={() => handleAnswer(answer)}
              dangerouslySetInnerHTML={{ __html: answer }}//PARSES HTML
            />
          );
        })}
      </div>
      {showAnswers && (//SHOWS NEXT ANSWER + HANDLES_NEXT_QUESTION + BUTTON
        <div className="flex justify-center items-center">
          <button
            onClick={handleNextQuestion}
            className={`p-3 text-black font-semibold rounded-xl shadow mb-4 bg-blue-100 hover:bg-yellow-400`}
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
};

export default Questionaire;
