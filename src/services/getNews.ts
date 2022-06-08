import type {GetNews} from '../types/getNews'

import {getNewsApi} from '../api/newsApiSauceGetters'


export async function getNews({articlesLimit,fromDate,query,sortBy}:GetNews){
 
 return await getNewsApi({articlesLimit,fromDate,query,sortBy})

}