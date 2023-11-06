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
        ontWeightMedium: 500,
        fontWeightRegular: 400,
        fontWeightLight: 200,
        fontWeightBold: 700,
    },

    titleText: {
        background: 'linear-gradient(to right bottom, #36EAEF, #6B0AC9)',
        color: 'black',
    },

    redColorStyle: {
      color: 'black', 
      backgroundColor: '#DA2C20', 
      fontWeight: 'bold'
    },

    pinkColorStyle: {
      color: 'black', 
      backgroundColor: '#FFC0CB', 
      fontWeight: 'bold'
    },

    orangeColorStyle: {
      color: 'black', 
      backgroundColor: '#FFB700', 
      fontWeight: 'bold'
    },

    yellowColorStyle: {
      color: 'black', 
      backgroundColor: '#FFFF99', 
      fontWeight: 'bold'
    },

    lightGreenColorStyle: {
      color: 'black', 
      backgroundColor: '#90EE90', 
      fontWeight: 'bold'
    },

    darkGreenColorStyle: {
      color: 'white', 
      backgroundColor: '#1A8127', 
      fontWeight: 'bold'
    },

    lightBlueColorStyle: {
      color: 'black', 
      backgroundColor: '#ADD8E6', 
      fontWeight: 'bold'
    },

    darkBlueColorStyle: {
      color: 'black', 
      backgroundColor: '#3B4BD8', 
      fontWeight: 'bold'
    },

    lightPurpleColorStyle: {
      color: 'black', 
      backgroundColor: '#B19CD9', 
      fontWeight: 'bold'
    },

    darkPurpleColorStyle: {
      color: 'white', 
      backgroundColor: '#9370DB', 
      fontWeight: 'bold'
    },

    grayColorStyle: {
      color: 'black', 
      backgroundColor: '#D3D3D3', 
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