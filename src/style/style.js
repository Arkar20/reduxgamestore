import {fade, makeStyles } from '@material-ui/core';


const style = makeStyles(theme => ({
    h2text: {
        ...theme.typography.h2
    },
    h1text: {
        ...theme.typography.h1 
    },
    h3text: {
        ...theme.typography.h3
    },
    body1text: {
        ...theme.typography.body1
    },
    //header styles
navcontainer:{

               transition: "background 1s",
               backgroundColor:theme.palette.common.bgcolor

            },
    tabtext: {
        color: theme.palette.common.textcolor,
        minWidth:15
    },
    tabcontainer: {
       marginLeft:"auto",
        padding: 0,
    },
    logo: {
        height: "3em",
        color: "yellow",
        [theme.breakpoints.down('sm')]:{
            height: "1.7em"
        }
    },
    logocontainer: {
        padding: 10,
        margin: 0,
        "&:hover": {
            backgroundColor: 'transparent'
        },
    },
       
    headerMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1.5em",
    [theme.breakpoints.down("md")]: {
       marginBottom: "1em",
    },
    [theme.breakpoints.down("sm")]: {
       marginBottom: "0em",
    },

    },
    drawer: {
        backgroundColor: theme.palette.common.bgcolor,
        margin:0,
    },
    listitem: {
       
        cursor: 'pointer',
       
    },
    listitemactive: {
         opacity:1,
        borderColor:theme.palette.common.purple,
        borderRight: `2px solid ${theme.palette.common.purple}`,
        backgroundColor: fade(theme.palette.common.textcolor, 0.15)
    },
    
    listitemtext: {
        ...theme.typography.tabs,
        color: theme.palette.common.textcolor,
        fontSize: '0.9em',
        padding: 10,
        textAlign: 'center',
        opacity: 0.6,
          "&:hover": {
            opacity:1
        },

    },
    listitemtextactive: {
        ...theme.typography.tabs,
        color: theme.palette.common.textcolor,
        fontSize: '0.9em',
        padding: 10,
        textAlign: 'center',
        opacity: 1.5,
       

    },
    
    searchcontainer: {
        position: 'absolute',
        backgroundColor: theme.palette.common.bgcolor,
        width: '15em',
        
  },
    //header styles
    homecontainer: {

        minWidth:"100vw",
        minHeight:"90vh",
        paddingLeft: 100,
        paddingRight: 100,
        backgroundColor: theme.palette.common.bgcolor,
         [theme.breakpoints.down('md')]: {
             paddingLeft: 40,
             paddingRight: 40,
        },
        [theme.breakpoints.down('sm')]: {
             paddingLeft: 10,
            paddingRight: 10,
        },
        transition: "background 1s",
      

    },
    cardcontainer: {
        marginTop: 20, 
        marginBottom: 100,
        
    },
    imgSlider: {
        width: "100vw", height: "60vh",
        [theme.breakpoints.down('sm')]: {
             height: "30vh"
        }
    },
    cardcontent: {
        minWidth:170,
        maxWidth: 220,
        margin:10,
        backgroundColor: theme.palette.common.cardbg,
        "&:hover": {
            backgroundColor: theme.palette.common.cardhover,  
        }
        
     
    },
    imgsize: {
       height:250
        
        
    },
    btn: {
      
        ...theme.typography.cardbtn,
    },
    cardbtn: {
        ...theme.typography.cardbtn,
        marginBottom: 10,
        marginLeft:10
    },
    tagText: {
        marginTop:20
    },
    splide: {
        color: 'purple',
     },
     detailcontainer: {
         padding: 20,
         borderBottom: '2px solid',
        [theme.breakpoints.down('sm')]:{
            padding: 0,
             marginTop:'0',

         }
     },
     detailimgcontainer: {
         marginTop: '1em',
           [theme.breakpoints.down('md')]: {
         marginLeft: 0,
             
         }
     },
     detailtextcontainer: {
         marginLeft: 40,
       
     },
     detailimg: {
         width: 900,
         height: 400,
            [theme.breakpoints.down('md')]: {
          width: 900,
         height: 400,
         },
            [theme.breakpoints.down('sm')]: {
          width: 300,
         height: 150,
         }
    },
     search: {
        position: 'relative',
        marginRight:20,
    borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.textcolor, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.textcolor, 0.25),
    },
    
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
    searchIcon: {
    opacity:1,
    padding:10,
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
      justifyContent: 'center',
  },
  inputRoot: {
      color: theme.palette.common.textcolor,
      fontSize: "16px"
  },
  inputInput: {
    padding: theme.spacing(1.5, 1, 1.5, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '10em',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
    [theme.breakpoints.down('sm')]: {
      width: '7ch',
      '&:focus': {
        width: '15ch',
      },
    },
    },
    downloadtext: {
        padding: 0,
        margin: 0,
        
    },
    footercontainer: {
        position: 'static',
        bottom:0,
        shadow: "10px",
        paddingTop:10,
        padding: 10,
        width: "100vw",
        backgroundColor: theme.palette.common.cardbg,
     
    },
    footertext: {
        color:theme.palette.common.purple
    },
   
 }))

export default style;