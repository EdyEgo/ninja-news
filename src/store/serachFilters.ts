import {createSlice } from '@reduxjs/toolkit'

const initialState:{searchInput:boolean,maxItemsPerPage:number,lastLoadedItemsIndex:number,searchInputValue:string | null,newsViewCardMode:boolean,selectedDate:null | string,sortByNewest:boolean} = {
    searchInput:false,
    searchInputValue:"",
    newsViewCardMode:false,// if false then is list
    sortByNewest:false,
    selectedDate:null,
    maxItemsPerPage:8,
    lastLoadedItemsIndex:0
} 






export const searchFiltersSlice = createSlice({
    name:'searchFilters',
    initialState,
    reducers:{
        
        changeLastLoadedItemIndex:(state,{payload})=>{
           state.lastLoadedItemsIndex = payload
        },

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
        },
     
     
      
    },

})

export const { changeSelectedDate,changeLastLoadedItemIndex,changeSortByNewest,changeSearchInputValue,changeSearchInputOpenStatus,changeNewsViewMode } = searchFiltersSlice.actions

export default searchFiltersSlice.reducer