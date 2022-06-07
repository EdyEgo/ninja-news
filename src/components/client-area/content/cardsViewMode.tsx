import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardLoading from './CardLoading'
import CardLoaded from './CardContent'
import type {Article} from '../../../types/newsResult'
import {useSelector,useDispatch} from 'react-redux'
import {changeLastLoadedItemIndex} from '../../../store/serachFilters'

export default function CardsViewMode() {
    const dispatch = useDispatch()
    const cardsLoading = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const newsList = useSelector((state:any)=>state.news.articles)
    const maxItemsPerPage = useSelector((state:any)=>state.searchFilters.maxItemsPerPage)
    

    function loadCardsItems(){
        const storedCardItems = []
        let lastIndex = 0
        for(let cardIndex = 0; cardIndex < newsList.length;cardIndex++){
            const card = newsList[cardIndex]
            storedCardItems.push(  <Grid item key={cardIndex} xs={12} sm={17} md={6}>
                <CardLoaded cardItem={card} index={cardIndex}/>
            </Grid>)
             lastIndex = cardIndex
            if(cardIndex + 1 >= maxItemsPerPage)break
            
        }
        setTimeout(()=>dispatch(changeLastLoadedItemIndex(lastIndex)),100)// yup thats a hack
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