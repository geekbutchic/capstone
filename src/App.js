import React from 'react'

const API_URL = 'https://opentdb.com/api.php?amount=20&category=11&difficulty=easy&type=multiple'


function Body() {
    return (
        <div className='container'>
            <div className='bg-white text-purple-800 p-10 rounded-lg shadow-md'>
              <h2 className='text-2xl'>
              THIS BOX CONTAINS THE QUESTION
              </h2>
            </div>
            <div className='flex flex-wrap mt-4 justify-between'>  
            <button className='bg-white w-1/2 p-4 text-purple-800 font-semibold rounded shadow'>ANSWER A</button>
            <button className='bg-white w-1/2 p-4 text-purple-800 font-semibold rounded shadow'>ANSWER B</button>
            <button className='bg-white w-1/2 p-4 text-purple-800 font-semibold rounded shadow'>ANSWER C</button>
            <button className='bg-white w-1/2 p-4 text-purple-800 font-semibold rounded shadow'>ANSWER D</button> 
            </div>
        </div>
    )
}

export default Body