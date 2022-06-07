import {createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

const initialState:{articles:any[],totalResults:number | null} = {
    articles:[],totalResults:null
} 


function sortFunction(a:any,b:any){  
    var dateA = new Date(a.date).getTime();
    var dateB = new Date(b.date).getTime();
    return dateA > dateB ? 1 : -1;  
}; 



export const newsSlice = createSlice({
    name:'news',
    initialState,
    reducers:{

        addNews:(state,{payload})=>{
            const totalResults = payload.totalResults
            const sortbyNewest = payload.sortByNewest
            const doNotStore = payload?.doNotStore
            const articles  =payload.articles
            state.articles = sortbyNewest ? articles.sort(sortFunction) : articles.sort(sortFunction)
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