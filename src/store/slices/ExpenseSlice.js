import { createSlice } from "@reduxjs/toolkit";

const expenceSlice = createSlice({
    name:"expense",
    initialState : [],
    reducers:{
        addExpense(state, action){
            state.push(action.payload)
        },
        removeExpense(state, action){
            console.log(state)
            console.log(action)
            return state.filter((item)=>item.id!==action.payload)
        },
        updateExpense(state, action){
            const updatedExpense = action.payload;
            return state.map((item) => (item.id === updatedExpense.id ? updatedExpense : item));
        }
    }
})


export const {addExpense, removeExpense, updateExpense} = expenceSlice.actions
export default expenceSlice.reducer