import { createMuiTheme } from "@material-ui/core/styles"
const gamestPurple = "#8E45CE"
const gamesBg = "#f8f9fa"
const textcolor="#495057"
const cardbg="#f8f9fa"
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
            cardbg:`${cardbg}`
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
            fontWeight: 500,
            fontSize: "400",
           color: `${textcolor}`,
        },
        body1: {
            fontFamily:'Open Sans',
            fontWeight: 500,
            fontSize: "0.8em",
            color:`${textcolor}`,
        },
        cardbtn: {
            borderRadius:20,
            marginLeft:5,
            color: '#aaaaab',

            borderColor: `${textcolor}`,
            "&:hover": {
                          color: `${gamesBg}`,
                    borderColor: `${gamestPurple}`,
                    backgroundColor:`${gamestPurple}`
                }
            
            
        }
    }
})