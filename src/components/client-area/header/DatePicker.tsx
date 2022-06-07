import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import moment from 'moment';
import {useDispatch} from 'react-redux'
import {changeSelectedDate} from '../../../store/serachFilters'
import Box from '@mui/material/Box';

export default function ViewsDatePicker({invisible}:{invisible:boolean}) {
    const dispatch = useDispatch()
  const [value, setValue] = React.useState<Date | null>(new Date());
 
 
  function addSelectedDate(newValue:any){
      const formatDate = moment(newValue).format('YYYY/MM/DD');
      dispatch(changeSelectedDate(formatDate))
      setValue(newValue);
  }
 
  const invisibleClass = invisible ? "container mb-5 p-0 invisible pointer-events-none" : "container mb-5 p-0"

  return (
  
    <div className={invisibleClass}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Custom input"
            value={value}
            onChange={(newValue) => {
              addSelectedDate(newValue);
            }}
            renderInput={({ inputRef, inputProps, InputProps }) => (
              <Box sx={{}}>
                <input ref={inputRef} {...inputProps}  className="invisible w-0 h-0 pointer-events-none"/>
                {InputProps?.endAdornment}
              </Box>
            )}
          />
        </LocalizationProvider>
    </div>
 
  );
}