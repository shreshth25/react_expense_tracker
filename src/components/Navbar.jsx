import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const expenses = useSelector((state)=>state.expense)
  let amount = 0
  expenses.forEach(element => {
    amount+=parseInt(element.amount)
  });
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-6'>
                <div>Count: {expenses.length}</div>
            </div>
            <div className='col-6'>
                <div>Total: {amount}</div>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar
