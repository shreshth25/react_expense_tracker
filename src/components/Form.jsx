import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addExpense } from '../store/slices/ExpenseSlice'
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
    const [amount, setAmount] = useState('')
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    
    const handleAddExpense=(e)=>{
        const uniqueId = uuidv4();
        e.preventDefault()
        if(amount==0)
        {
            alert("Enter the amount")
            return
            
        }

        if(text==""){
            alert("Enter the text")
            return
        }

        dispatch(addExpense({id: uniqueId, "name":text, "amount":amount}))
        setAmount('')
        setText('')
    }
  return (
    <div className='container'>
        <div>Add the Expense</div>
        <form onSubmit={handleAddExpense}>
            <div className="mb-3 mt-2">
                <input type="text" className="form-control" value = {text} onChange={(e)=>setText(e.target.value)} placeholder='Enter the Text'/>
            </div>
            <div className="mb-3">
                <input type="number" className="form-control" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter the Amount'/>
            </div>
            <button type="submit" className="btn btn-primary" >Add Expense</button>
            </form>
    </div>
  )
}

export default Form
