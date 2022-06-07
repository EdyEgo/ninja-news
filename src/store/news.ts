import {createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

const initialState:{articles:any[],totalResults:number | null} = {
    articles:[],totalResults:null
} 






export const newsSlice = createSlice({
    name:'news',
    initialState,
    reducers:{

        addNews:(state,{payload})=>{
            const totalResults = payload.totalResults
            const articles  =payload.articles
            state.articles = articles
            state.totalResults  = totalResults
          
         
            const date = moment(new Date()).format('YYYY/MM/DD');
            const news = {articles,totalResults,date}
           
            const stringifyNews = JSON.stringify(news)

            localStorage.setItem('headlines',stringifyNews)
        }, 
    

     
      
    },

})

export const { addNews } = newsSlice.actions

export default newsSlice.reducer