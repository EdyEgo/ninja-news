import {createSlice } from '@reduxjs/toolkit'

const initialState:{searchInput:boolean,maxItemsPerPage:number,startIndex: number,finishIndex: number,searchInputValue:string | null,newsViewCardMode:boolean,selectedDate:null | string,sortByNewest:boolean} = {
    searchInput:false,
    searchInputValue:"",
    newsViewCardMode:false,// if false then is list
    sortByNewest:false,
    selectedDate:null,
    maxItemsPerPage:10,
    startIndex:0,
    finishIndex:10

} 






export const searchFiltersSlice = createSlice({
    name:'searchFilters',
    initialState,
    reducers:{
        changeMaxItemsPerPage:(state,{payload})=>{
            state.maxItemsPerPage = payload
        },
        
        changeLastLoadedItemIndex:(state,{payload})=>{
           const startIndex = payload.startIndex
           const finishIndex = payload.finishIndex

           state.startIndex = startIndex
           state.finishIndex = finishIndex
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

export const { changeSelectedDate,changeMaxItemsPerPage,changeLastLoadedItemIndex,changeSortByNewest,changeSearchInputValue,changeSearchInputOpenStatus,changeNewsViewMode } = searchFiltersSlice.actions

export default searchFiltersSlice.reducer