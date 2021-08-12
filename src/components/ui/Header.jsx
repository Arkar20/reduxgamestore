import {
    AppBar,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Slide,
    SwipeableDrawer,
    Switch,
    Tab,
    Tabs,
    Toolbar,
    useScrollTrigger,
} from "@material-ui/core"
import React, { useEffect } from 'react'

import { Link } from "react-router-dom"
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import SearchList from "./SearchList"
import logo from "../../assets/logo.png"
import style from "../../style/style"
import { useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/styles';

function HideOnScroll(props) {
  const { children } = props;
  
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};
const Header = ({ value, setValue, tabChange, toggleTheme, muitheme }) => {
    const classes = style()
    const url = window.location.pathname
    const theme = useTheme();
    // const params = useParams();
    const matchesSm = useMediaQuery(theme.breakpoints.down('md'));
     const [openDrawer, setOpenDrawer] = React.useState(false);
   
    const toggleDrawer= () => {
    setOpenDrawer(!openDrawer)
    };
 const links = [
        {name:"Home",path:'/'},
        {name:"Games",path:`/games`},
        {name:"Most Popular",path:'/most-popular'},
        {name:"How To Download",path:'/how-to-download'},
    ]
    useEffect(() => {
   
        switch (url) {
                
                case ('/'): {
                     setValue(0)
                    break;
                }
                case ('/games'): {
                setValue(1)
              
                    break;
                }
                case ('/most-popular'): {
                     setValue(2)
                    break;
                }
                case ('/how-to-download'): {
                     setValue(3)
                    break;
                }
                default: {
                    setValue(1)
                }
            }
    },[url,setValue])
    

   
    const tabs = (
        <>
            
         <Tabs value={value}
                    onChange={tabChange}
                     aria-label="tabs-navigation"
                   
                    indicatorColor="secondary"
        >
            {
                links.map((link,index) => (
                    <Tab key={ index}  index={index} component={Link}  to={link.path} className={classes.tabtext} label={link.name} />
                ))
           }
                
               
            </Tabs>
            </>
    )

    const drawer = (
        <>
     
                  
                    <SwipeableDrawer
                        anchor="left"
                        open={openDrawer}
                        onClose={toggleDrawer}
                        onOpen={toggleDrawer}
                        classes={{paper:classes.drawer}}
                    >
                        <List style={{padding:0,margin:0}}>
                            {
                                links.map((link, index) => (
                                    <ListItem key={index} className={(value===index)?classes.listitemactive:classes.listitem} onClick={()=>{toggleDrawer();setValue(index)}} component={Link} to={link.path}>
                                        <ListItemText disableTypography className={(value===index)?classes.listitemtextactive:classes.listitemtext} >{ link.name}</ListItemText>
                                    </ListItem>

                                ))
                            }
                            <ListItem>
                                    <Switch
                                        checked={muitheme}
                                        onChange={toggleTheme}
                                        name="checked"
                                        color="secondary"
                                      />
                                    </ListItem>
                                    
                       </List>

                    </SwipeableDrawer>
        </>
    )
  
    return (<>
        <HideOnScroll>
          <AppBar className={classes.navcontainer} >
                <Toolbar>
                      <IconButton onClick={toggleDrawer}>
                        <MenuIcon color="secondary" size="medium"  edge="end"/>
                    </IconButton>
                {drawer}
                    
                <IconButton disableRipple disableFocusRipple className={classes.logocontainer} component={Link} to="/" onClick={()=>setValue(0)}>
                    <img alt="logo" src={logo} className={classes.logo} />
                    </IconButton>
                   
                    <div className={classes.tabcontainer}>
                        <SearchList />
                      </div>
                    
                    
                        {matchesSm ? '' : tabs}
                        
            </Toolbar>
            
            </AppBar>
        </HideOnScroll>
                    
<div className={classes.headerMargin} />

        </>
    )
}
export default Header