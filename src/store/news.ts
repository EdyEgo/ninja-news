import {createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

const initialState:{articles:any[],totalResults:number | null} = {
    articles:[],totalResults:null
} 


function sortNewest(a:any,b:any){  
  
    var dateA = new Date(a.publishedAt).getTime();
    var dateB = new Date(b.publishedAt).getTime();
    
    return dateA < dateB ? 1 : -1;  
}; 

function sortOldest(a:any,b:any){
    var dateA = new Date(a.publishedAt).getTime();
    var dateB = new Date(b.publishedAt).getTime();
  
    return dateA > dateB ? 1 : -1;  
}


export const newsSlice = createSlice({
    name:'news',
    initialState,
    reducers:{

        addNews:(state,{payload})=>{
            const totalResults = payload.totalResults
            const sortbyNewestB = payload.sortByNewest
            const doNotStore = payload?.doNotStore
            const articles  =payload.articles
         
   
            state.articles = sortbyNewestB === true ? articles.sort(sortNewest) : articles.sort(sortOldest)
           
            state.totalResults  = totalResults
          
         
            const date = moment(new Date()).format('YYYY/MM/DD');
            if(doNotStore) return
            const news = {articles,totalResults,date}
           
            const stringifyNews = JSON.stringify(news)

            localStorage.setItem('headlines',stringifyNews)
        }, 
        sortedArticles:(state,{payload})=>{
            state.articles = payload
        }
    

     
      
    },

})

export const { addNews,sortedArticles } = newsSlice.actions

export default newsSlice.reducer