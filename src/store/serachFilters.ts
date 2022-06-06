import {createSlice } from '@reduxjs/toolkit'

const initialState:{searchInput:boolean,newsViewCardMode:boolean,sortByNewest:boolean} = {
    searchInput:false,
    newsViewCardMode:false,// if false then is list
    sortByNewest:false
} 






export const searchFiltersSlice = createSlice({
    name:'searchFilters',
    initialState,
    reducers:{
        changeSortByNewest:(state)=>{
            state.sortByNewest = !state.sortByNewest
        },

        changeSearchInputOpenStatus:(state)=>{
            state.searchInput = !state.searchInput
        }, 
        changeNewsViewMode:(state)=>{
            state.newsViewCardMode = !state.newsViewCardMode
        }
     
      
    },

})

export const { changeSortByNewest,changeSearchInputOpenStatus,changeNewsViewMode } = searchFiltersSlice.actions

export default searchFiltersSlice.reducer