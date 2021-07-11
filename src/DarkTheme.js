import { createMuiTheme } from "@material-ui/core/styles"
const gamestPurple = "#8E45CE"
const gamesBg = "#16161a"
const textcolor = "#F2F2FF"
const secondarytextcolor="#7F7F7F"
const cardbg = "#16161a"
const cardhover="16171a"
export default createMuiTheme({
    palette: {
        primary: {
            main:`${gamesBg}`,
        },
        secondary: {
            main:`${gamestPurple}`
        },
        common: {
            purple: `${gamestPurple}`,
            bgcolor: `${gamesBg}`,
            textcolor: `${textcolor}`,
            cardbg: `${cardbg}`,
            cardhover: `$${cardhover}`
        }
    },
    typography: {
        
        tabs: {
            fontFamily: 'Open sans',
            fontWeight: 700,
            fontSize:"1.5em"
        },
        h1: {
            fontFamily: 'Open sans',
            fontWeight: 200,
            
            fontSize: "2em",
            color: `${textcolor}`,
            textTransform:'capitalize'
        },
        h2: {   //font for recent games
            fontFamily:'Roboto',
            fontWeight: 700,
            fontSize: "1.2em",
            color: `${textcolor}`,
        },
        h3: {
            fontFamily:'Lato',
            fontWeight: 700,
            fontSize: "1em",
            color: `${textcolor}`,        },
        body1: {
            fontFamily:'Open Sans',
            fontWeight: 500,
            fontSize: "0.8em",
            color:`${secondarytextcolor}`,
        },
        cardbtn: {
            borderRadius:20,
            marginLeft:5,
                color: '#aaaaab',
            borderColor: `${textcolor}`,
            "&:hover": {
                 color: `${gamestPurple}`,
                    borderColor: `${gamestPurple}`,
                }
            
            
        }
    }
})