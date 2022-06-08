import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
 
const ListItemLoading = ({index}:{index:number}) => {
    return ( <>
       <ListItem alignItems="flex-start" key={index}>
        <ListItemAvatar key={index + 1}>
        <Skeleton variant="circular" width={40} height={40} />
        </ListItemAvatar>
        <ListItemText key={index + 2}
          primary="Loading your news......."
          secondary={
            <Skeleton
              animation="wave"
              height={10}
              width="100%"
              style={{ marginBottom: 6 }}
            />
          }
        />
      </ListItem>
    </> );
}
 
export default ListItemLoading;