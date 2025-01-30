'use client'
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles'


  
export default function DateCalendarValue() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

  
  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>
  );
}