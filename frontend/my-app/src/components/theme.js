// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1E1E1E', // Lighter shade of black for the main background
      paper: '#121212',   // A bit darker shade for components such as cards, sheets, and menus
    },
    primary: {
      main: '#BB86FC',    // For example, a purple color for primary buttons or icons
    },
    secondary: {
      main: '#03DAC6',    // Another example, a teal color for secondary elements
    },
    // Add other custom colors as needed
  },
  // Define other theme customizations here
});

export default theme;
