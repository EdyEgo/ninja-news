import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardLoading from './CardLoading'
import CardLoaded from './CardContent'
import type {Article} from '../../../types/newsResult'
import {useSelector} from 'react-redux'

export default function CardsViewMode() {
    const cardsLoading = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const newsList = useSelector((state:any)=>state.news.articles)
    console.log('waht',newsList)
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
 
          <Grid container spacing={4}>
               {newsList.length >= 1 &&
               
               newsList.map((card:Article,index:number)=>{
                   
              return (  <Grid item key={index} xs={12} sm={17} md={6}>
                 <CardLoaded cardItem={card} index={index}/>
               </Grid>)
               })
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