import type {GetNews} from '../types/getNews'

import {getNewsApi} from '../api/newsApiSauceGetters'

//from date format 2022-06-06
export async function getNews({articlesLimit,fromDate,query,sortBy}:GetNews){
 
 return await getNewsApi({articlesLimit,fromDate,query,sortBy})

}