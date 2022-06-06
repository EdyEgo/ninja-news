import {createSlice } from '@reduxjs/toolkit'

const initialState:{searchInput:boolean} = {
    searchInput:false
} 






export const searchFiltersSlice = createSlice({
    name:'searchInput',
    initialState,
    reducers:{

        changeSearchInputOpenStatus:(state)=>{
            state.searchInput = !state.searchInput
        }, 

     
      
    },

})

export const { changeSearchInputOpenStatus } = searchFiltersSlice.actions

export default searchFiltersSlice.reducer