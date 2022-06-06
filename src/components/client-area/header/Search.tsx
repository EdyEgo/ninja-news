
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchInput() {
  return (
    <Box
    className='m-0 p-0'
      component="form"
      sx={{
        '& > :not(style)': { width: '20ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <TextField id="standard-basic" label="Search news" variant="standard" className='m-0 p-0'/>
    </Box>
  );
}