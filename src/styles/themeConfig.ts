import { createTheme } from "@mui/material/styles";
// import type {} from '@mui/x-date-pickers/themeAugmentation';

const theme = createTheme({
  palette: {
    secondary: {
      main: "#2B2F33",
    },
  },
  // components: {
  //   MuiDatePicker: {
  //     defaultProps: {
  //       displayWeekNumber: true,
  //     },
  //   },
  //   MuiDateRangeCalendar: {
  //     styleOverrides: {
  //       root: {
  //         backgroundColor: '#f0f0f0',
  //       },
  //     },
  //   },
  // },
});

export default theme;
