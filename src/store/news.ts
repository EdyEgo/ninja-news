import {createSlice } from '@reduxjs/toolkit'

const initialState:{news:any[]} = {
   news:[]
} 






export const newsSlice = createSlice({
    name:'news',
    initialState,
    reducers:{

        addNews:(state,action)=>{
            state.news = action.payload
        }, 

     
      
    },

})

export const { addNews } = newsSlice.actions

export default newsSlice.reducer