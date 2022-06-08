import * as React from 'react';
import Switch from '@mui/material/Switch';

export default function ControlledSwitches({checked,setChecked}:{checked:boolean, setChecked:(checked:boolean)=>void}) {


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}