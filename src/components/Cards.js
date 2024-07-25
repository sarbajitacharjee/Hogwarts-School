import React from 'react'

const Cards = () => {
  return (
    <>

<div className="profile bg-white p-6  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img  src='./images/mypicture.jpg' alt='sarbajit' className='h-[400px] w-[450px] object-contain rounded-full'/>
          <h3 className="text-xl font-semibold mb-2">Er. Sarbajit Acharjee</h3>
          <p className="text-gray-700 mb-4">Frontend Engineer </p>
          <button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">Read More</button>
        </div>
      
    </>
  )
}

export default Cards
