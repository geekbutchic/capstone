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
            <div className='flex flex-wrap mt-4 justify-around'>  
            <button className='w-2/5 p-4 text-purple-800 font-semibold rounded shadow mb-4 bg-green-500 hover:bg-red-200'>ANSWER A</button>
            <button className='w-2/5 p-4 text-purple-800 font-semibold rounded shadow mb-4 bg-green-500 hover:bg-red-200'>ANSWER B</button>
            <button className='w-2/5 p-4 text-purple-800 font-semibold rounded shadow mb-4 bg-green-500 hover:bg-red-200'>ANSWER C</button>
            <button className='w-2/5 p-4 text-purple-800 font-semibold rounded shadow mb-4 bg-green-500 hover:bg-red-200'>ANSWER D</button> 
            </div>
        </div>
    )
}

export default Body