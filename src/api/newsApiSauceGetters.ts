import {create} from 'apisauce'
import type {GetNews} from '../types/getNews'
import moment from 'moment'


const BASE_URL = 'https://newsapi.org/v2'
const API_KEY = '2ae5fb21e7c9460e94e3dd3fd5377e7c' // maybe move me to a dotEnv man :)

const api = create({
    baseURL: BASE_URL,
    // headers: { Accept: 'application/vnd.github.v3+json' },
  })

  //from date format 2022-06-06
export async function getNewsApi({articlesLimit,fromDate,query,sortBy}:GetNews){
     try{
      
       const formatDate = moment(fromDate).format('YYYY/MM/DD');
      return await api.get(`/${articlesLimit}?q=${query}&from=${formatDate}&sortBy=${sortBy}&apiKey=${API_KEY}`)
     }catch(e:any){
     return {errorMessage:e.message}
     }
}

export async function getHeadLines(country?:string){
   try{
     const countryQuery = country ?  country : 'us'
     return await api.get(`/top-headlines?country=${countryQuery}&apiKey=${API_KEY}`)
   }catch(e:any){
     return {errorMessage:e.message}
   }
}