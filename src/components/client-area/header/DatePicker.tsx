import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import moment from 'moment';
import {useDispatch} from 'react-redux'
import {changeSelectedDate} from '../../../store/serachFilters'

export default function ViewsDatePicker() {
    const dispatch = useDispatch()
  const [value, setValue] = React.useState<Date | null>(new Date());
 
 
  function addSelectedDate(newValue:any){
      const formatDate = moment(newValue).format('YYYY/MM/DD');
      dispatch(changeSelectedDate(formatDate))
      setValue(newValue);
  }


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        
        <DatePicker
          views={['day']}
          label="Date"
          value={value}
          onChange={(newValue) => {
            addSelectedDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}