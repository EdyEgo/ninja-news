import Grid from '@mui/material/Grid';


import Container from '@mui/material/Container';
import CardLoading from './CardLoading'
import CardLoaded from './CardContent'

import {useSelector,useDispatch} from 'react-redux'


export default function CardsViewMode() {
    const dispatch = useDispatch()
    const cardsLoading = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const newsList = useSelector((state:any)=>state.news.articles)
  
    const startAtIndex  = useSelector((state:any)=>state.searchFilters.startIndex)
    const finishAtIndex  = useSelector((state:any)=>state.searchFilters.finishIndex)
    console.log('my items are',newsList)

    function loadCardsItems(){
        const storedCardItems = []
        let lastIndex = 0
        
        for(let cardIndex = startAtIndex; cardIndex < finishAtIndex;cardIndex++){
            const card = newsList[cardIndex]
          
            if(card == null)break
            storedCardItems.push(  <Grid item key={cardIndex} xs={12} sm={17} md={6}>
                <CardLoaded cardItem={card} index={cardIndex}/>
            </Grid>)
             lastIndex = cardIndex
            // if(cardIndex + 1 >= maxItemsPerPage)break
            
        }
        // setTimeout(()=>dispatch(changeLastLoadedItemIndex(lastIndex)),100)// yup, thats a hack
        return storedCardItems
    }
   
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
 
          <Grid container spacing={4}>
               {newsList.length >= 1 &&
               
               loadCardsItems()
               }

            {/*  no news show skeleton */}
            {
                newsList.length === 0 && 
                cardsLoading.map((card:any,index:number) => (
                    <Grid item key={index} xs={12} sm={17} md={6}>
                     <CardLoading  index={index}/>
                    </Grid>
                  ))
            }
            

          
          </Grid>
        </Container>
  );
}