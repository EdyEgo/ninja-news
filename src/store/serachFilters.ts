import {createSlice } from '@reduxjs/toolkit'

const initialState:{searchInput:boolean,searchInputValue:string | null,newsViewCardMode:boolean,sortByNewest:boolean} = {
    searchInput:false,
    searchInputValue:"",
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
        changeSearchInputValue:(state,{payload})=>{
              state.searchInputValue =  payload
            
        },

        changeSearchInputOpenStatus:(state)=>{
            state.searchInput = !state.searchInput
        }, 
        changeNewsViewMode:(state)=>{
            state.newsViewCardMode = !state.newsViewCardMode
        }
     
      
    },

})

export const { changeSortByNewest,changeSearchInputValue,changeSearchInputOpenStatus,changeNewsViewMode } = searchFiltersSlice.actions

export default searchFiltersSlice.reducer