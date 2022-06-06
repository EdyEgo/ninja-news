
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchInput({visible}:{visible:boolean}) {
    const visibility = visible ? "visible" : 'pointer-events-none invisible'
  return (
    <Box
    className={visibility}
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