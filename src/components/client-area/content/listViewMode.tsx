import List from '@mui/material/List';

import ListItemLoading from './ListItemLoading'
import type {Article} from '../../../types/newsResult'
import ListItemContent from './ListItemLoaded'

import {useSelector} from 'react-redux'

export default function ListViewMode() {

    const cardsLoading = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const newsList = useSelector((state:any)=>state.news.articles)

  return (
    <List >
        


        {newsList.length >= 1 &&
               
               newsList.map((card:Article,index:number)=>{
                   
              return (  <ListItemContent index={index} key={index}  cardItem={card}/>)
               })
               }

            {/*  no news show skeleton */}
            {
                newsList.length === 0 && 
                cardsLoading.map((card:any,index:number) => (
                    <ListItemLoading index={index} key={index}/> 
                  ))
            }
     
    </List>
  );
}