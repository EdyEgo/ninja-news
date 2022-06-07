import * as React from 'react';

import ListItem from '@mui/material/ListItem';


import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


import type {Article} from '../../../types/newsResult'



interface ListItemLoadedProps {
    cardItem:Article,
    index:number
}
 
const ListItemLoaded: React.FC<ListItemLoadedProps> = ({cardItem,index}) => {
    return (       <ListItem alignItems="flex-start" key={index}>
    <ListItemAvatar>
       
     {cardItem.urlToImage === null &&  <Avatar alt="New" variant='square' src="/static/images/avatar/1.jpg" />}
     { cardItem.urlToImage !== null &&  
     <a href={cardItem.urlToImage}>
       <Avatar alt="New" variant='square' src={cardItem.urlToImage} />
       </a>}
    </ListItemAvatar>
   
    <div className="content-container mb-2">
        <div className="title mb-1 font-bold">
            <a href={cardItem.url}>{cardItem.title}</a>
            
        </div>
        <div className="text text-sm">
        {cardItem.description || cardItem.content}
        </div>
    </div>
  </ListItem> );
}
 
export default ListItemLoaded;