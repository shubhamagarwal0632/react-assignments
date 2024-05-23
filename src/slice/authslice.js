import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user:null
}
const authslice = createSlice({
    name:'auth',
    initialState,
    
    reducers:{
        signUp:(state, action)=>{
           
            state.user = action.payload;
        }
        ,
        signIn:(state,action)=>{
            state.user = action.payload;
        },
        signOut:(state)=>{
            state.user= null;
        }
    }

})

export const {signUp, signIn, signOut}= authslice.actions;
export default authslice.reducer;