import List from '@mui/material/List';

import ListItemLoading from './ListItemLoading'

import ListItemContent from './ListItemLoaded'

import {useSelector,useDispatch} from 'react-redux'

export default function ListViewMode() {
 
    const dispatch = useDispatch()
    const cardsLoading = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const newsList = useSelector((state:any)=>state.news.articles)
 
    const startAtIndex  = useSelector((state:any)=>state.searchFilters.startIndex)
    const finishAtIndex  = useSelector((state:any)=>state.searchFilters.finishIndex)

    function loadListItems(){
        const storedCardItems = []
        let lastIndex = 0
       
            for(let listIndex = startAtIndex; listIndex < finishAtIndex;listIndex++){
                
            const item = newsList[listIndex]
            if(item == null)break
            storedCardItems.push(<ListItemContent index={listIndex} key={listIndex}  cardItem={item}/> )
             lastIndex = listIndex
           
            
        }
        // setTimeout(()=>dispatch(changeLastLoadedItemIndex(lastIndex)),100)// yup thats a hack
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