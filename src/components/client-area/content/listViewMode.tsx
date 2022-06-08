import List from '@mui/material/List';

import ListItemLoading from './ListItemLoading'

import ListItemContent from './ListItemLoaded'

import {useSelector} from 'react-redux'

export default function ListViewMode() {
 
    
    const cardsLoading = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const newsList = useSelector((state:any)=>state.news.articles)
 
    const startAtIndex  = useSelector((state:any)=>state.searchFilters.startIndex)
    const finishAtIndex  = useSelector((state:any)=>state.searchFilters.finishIndex)

    function loadListItems(){
        const storedCardItems = []
       
       
            for(let listIndex = startAtIndex; listIndex < finishAtIndex;listIndex++){
                
            const item = newsList[listIndex]
            if(item == null)break
            storedCardItems.push(<ListItemContent index={listIndex} key={listIndex}  cardItem={item}/> )
           
           
            
        }
      
        return storedCardItems
    }

  return (
    <List >
        


        {newsList.length >= 1 &&
               
               loadListItems()
               }

            {/*  no news show skeleton */}
            {
                newsList.length === 0 && 
                cardsLoading.map((item:any,index:number) => (
                    <ListItemLoading index={index} key={index}/> 
                  ))
            }
     
    </List>
  );
}