import React from 'react'

const BudgetExpenseReport = ({data}) => {
  return (
    <div className='border-1 p-10 text-white mt-10 flex items-center gap-7 justify-center'>
            <div className='border-1 text-white-900 px-8 bg-green-500 rounded-xl p-6  m-2'>
                <p> Budget</p>
                <hr className="border-white-400 my-2" />
                <p> {data.budget}</p>
            </div>
            <div className='border-1 text-white-900 px-6 bg-yellow-500 rounded-xl p-6 m-2'>
                <p> Expense</p>
                <hr className="border-white-400 my-2" />
                <p> {data.total_expense}</p>
            </div>
            <div className='border-1 text-white-900 px-6 bg-green-500 rounded-xl p-6 m-2'>
                <p> Remains</p>
                <hr className="borde-white-400 my-2" />
                <p> {data.budget - data.total_expense }</p>
            </div>
        </div>
    )
}

export default BudgetExpenseReport