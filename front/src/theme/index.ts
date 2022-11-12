import { createTheme } from "@mui/material"

export const theme = createTheme({
    palette: {
        primary: {
            main: '#01579B'
        },
        secondary: {
          main: "#FFFFFF"  
        },
        text: {
            primary: "#212121"
        }
    },
    typography: {
        fontFamily: "Open Sans",
        h1: {
            fontSize: "1.6rem",
            fontWeight: 400
        },
        h2: {
            fontSize: "1.4rem",
            fontWeight: 400
        },
        h3: {
            fontSize: "1.2rem",
            fontWeight: 400
        }
    },
});