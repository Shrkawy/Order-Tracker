import * as React from 'react';
import { useContext } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Context from '../../state/Context';

export default function InstallationDateBox() {
  const { installationDate, setInstallationDate } = useContext(Context);
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Installation Date"
        value={installationDate}
        onChange={(newValue) => {
          setInstallationDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        minDate={Date().toLocaleString()}
      />
    </LocalizationProvider>
  );
}

export function GoLiveDateBox() {
  const { goLiveDate, setGoLiveDate } = useContext(Context);
  const { installationDate, setInstallationDate } = useContext(Context);
  
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Go-Live Date"
          value={goLiveDate}
          onChange={(newValue) => {
            setGoLiveDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
          minDate={ installationDate }
        />
      </LocalizationProvider>
    );
  }