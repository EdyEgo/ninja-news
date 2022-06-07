import * as React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import type {Article} from '../../../types/newsResult'
import Skeleton from '@mui/material/Skeleton';
import {useNavigate} from 'react-router-dom'
 



interface CardContentProps {
    cardItem:Article,
    index:number
}
 
const CardContentNews: React.FC<CardContentProps> = ({cardItem,index}) => {
 
    const navigate = useNavigate()

    function redirectUserToArticlePage(){
            navigate(cardItem.url)
    }

    return ( <Card key={index}
        sx={{  display: 'flex', flexDirection: 'column' }}
      >
          {cardItem.urlToImage !== null &&
          <CardMedia
          component="img"
          
          image={cardItem.urlToImage}
          alt="random"
        />
          }
        
            {cardItem.urlToImage === null &&<Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />}
        <CardContent sx={{ flexGrow: 1 }}>
          
          <a href={cardItem.url} className="font-extrabold text-xl hover:text-gray-500 transition-all ease"> 
          <span>{cardItem.title}</span>
          
          </a>
          <Typography>
           {cardItem.description || cardItem.content}
          </Typography>
        
          <div className="author">
         
          {cardItem.author !== null && 
           <div className="font-semibold">
           By {cardItem.author}
          </div>
          }
          </div>
        </CardContent>
       
      </Card> );
}
 
export default CardContentNews;