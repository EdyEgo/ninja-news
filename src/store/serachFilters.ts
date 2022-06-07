import {createSlice } from '@reduxjs/toolkit'

const initialState:{searchInput:boolean,searchInputValue:string | null,newsViewCardMode:boolean,selectedDate:null | string,sortByNewest:boolean} = {
    searchInput:false,
    searchInputValue:"",
    newsViewCardMode:false,// if false then is list
    sortByNewest:false,
    selectedDate:null
} 






export const searchFiltersSlice = createSlice({
    name:'searchFilters',
    initialState,
    reducers:{

        changeSelectedDate:(state,{payload})=>{
            state.selectedDate = payload
        },
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

export const { changeSelectedDate,changeSortByNewest,changeSearchInputValue,changeSearchInputOpenStatus,changeNewsViewMode } = searchFiltersSlice.actions

export default searchFiltersSlice.reducer