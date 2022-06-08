
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import SearchIcon from '@mui/icons-material/Search';




export default function SearchInput({visible,redirectOnClick,setSearchInputValue}:{visible:boolean,redirectOnClick:()=>void,setSearchInputValue:(inputValue:string)=>void}) {
    const visibility = visible ? "visible" : 'pointer-events-none invisible'
   
  
  
 

  

  

  return (
    <Box
    className={visibility }
      component="form"
      sx={{
        '& > :not(style)': { width: '20ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <TextField  
      InputProps={{
        startAdornment: (
          <SearchIcon fontSize='small' className='cursor-pointer z-50 mx-1 text-blue-900 hover:text-blue-600 transition-all ease' onClick={()=>{redirectOnClick()}}/>
        ),
      }}
       onKeyUp={(event:any)=>{setSearchInputValue(event.target.value)}} id="standard-basic" variant="standard" className='m-0 p-0'/>
     
    </Box>
  ); 

  
}