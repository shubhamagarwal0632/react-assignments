import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../src/slice/authslice"
import tasksReducer from './slice/taskslice'


export const store = configureStore({
    reducer:{
        auth:authReducer,
        tasks:tasksReducer
    }
})
