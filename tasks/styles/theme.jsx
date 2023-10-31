import { createTheme } from "@mui/material";
const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#eca1ba',
        },
    },
    typography: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeightMedium: 500,
        fontWeightRegular: 400,
        fontWeightLight: 300,
        fontWeightBold: 700,
    }
});

export default theme;