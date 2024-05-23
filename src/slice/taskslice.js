import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks:[],
}

const taskslice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        addTask:(state, action)=>{
            state.tasks.push(action.payload)
        }
        ,
        updateTask:(state, action)=>{
            const {id, details}= action.payload;
            const existingtask = state.tasks.find(task =>task.id === id);
            if(existingtask){
                existingtask.details = details;
            }
        },
        deleteTask:(state,action)=>{
            state.tasks = state.tasks.filter(task =>task.id !== action.payload);
            
        }
    }  
})

export const {addTask, updateTask, deleteTask} = taskslice.actions
export default taskslice.reducer