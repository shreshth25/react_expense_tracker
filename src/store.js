import { configureStore } from "@reduxjs/toolkit";
import expenceSlice from './store/slices/ExpenseSlice'

const store = configureStore({
    reducer:{
        expense: expenceSlice
    }
})

export default store