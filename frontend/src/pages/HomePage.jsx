import React from 'react'
import PlansComponent from './Budgetplan';


const HomePage = () => {
  return (
    <div className = "container mx-auto">
    <div className="bg-[url('images/Happy_man.png')] bg-center bg-no-repeat h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className='grid-1 box-sm bg-gray-200  text-green-900 opacity-85 py-4 px-10 mb-10 '> Its easy to manage Money </h1>

      <h1 className='grid-1 box-sm bg-green-800 py-4  opacity-85 px-10 text-white'> Acheive Target!</h1>
    </div>
      < PlansComponent />
    </div>
  )
}

export default HomePage;