import {create} from 'apisauce'
import type {GetNews} from '../types/getNews'


const BASE_URL = 'https://newsapi.org/v2'
const API_KEY = '2ae5fb21e7c9460e94e3dd3fd5377e7c' // maybe move me to a dotEnv man :)

const api = create({
    baseURL: BASE_URL,
    // headers: { Accept: 'application/vnd.github.v3+json' },
  })

export async function getNewsApi({articlesLimit,fromDate,query,sortBy}:GetNews){
     try{
      return await api.get(`/${articlesLimit}?q=${query}&from=${fromDate}&sortBy=${sortBy}&apiKey=${API_KEY}`)
     }catch(e:any){
     return {errorMessage:e.message}
     }
}