import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#ae0fbf',
        },
        secondary: {
          main: '#d21818',
        },
        error: {
          main: 'rgba(232,228,39,0.83)',
        },
        warning: {
          main: '#4eb112',
        },
        info: {
          main: 'rgba(17,147,218,0.85)',
        },
        success: {
          main: '#14e81f',
        },
        background: {
            default: '#00BCD4',
            paper: '#D4E8E7',
        },
      },

    typography: {
        fontSize: 14,
        fontWeightLight: 200,
    },

    titleText: {
        background: 'linear-gradient(to right bottom, #36EAEF, #6B0AC9)',
        color: 'black',
    },

    redColorStyle: {
      color: 'red', 
      backgroundColor: 'lightgray', 
      fontWeight: 'bold'
    },

    blueColorStyle: {
      color: 'blue', 
      backgroundColor: 'lightgray', 
      fontWeight: 'bold'
    },

    greenColorStyle: {
      color: 'green', 
      backgroundColor: 'lightgray', 
      fontWeight: 'bold'
    },

    yellowColorStyle: {
      color: 'yellow', 
      backgroundColor: 'lightgray', 
      fontWeight: 'bold'
    },

    normalText: {
        color: 'black',
        fontWeight: 'bold'
    },

    container :{
        backgroundColor: 'white',
    }


});

export default theme;