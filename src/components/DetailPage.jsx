import {
    Collapse,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Typography
} from "@material-ui/core"
import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux"

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from "react-router-dom"
import Loading from "./ui/Loading"
import axios from "axios"
import {setSearchList} from "../Redux/actions/game"
import style from "../style/style"
import {useParams} from "react-router-dom"

const DetailPage = ({history}) => {
    const { slug } = useParams()
    const classes= style()
    const [detaildata, setDetaildata] = useState(null);
    const [openlink, setOpenlink] = React.useState(false);
    
    const searchlist = useSelector(state => state.searchlist)
    const dispatch=useDispatch()


    
    useEffect(() => {
console.log("effect activee")
        !searchlist && (
            
                axios.get('/api/searchlists').then(res => {
                    dispatch(setSearchList(res.data))
                    console.log("search list not found and fetch from db")
                })
        )
        if (searchlist && !searchlist.find(data => data.slug === slug))
            return history.push('/404')
            
        
        searchlist &&  setDetaildata(searchlist.find(data => data.slug === slug))
        
   
       
    }, [slug, searchlist,detaildata,history,dispatch])
    const handleClick = () => {
            setOpenlink(!openlink)
        }
    const detailpage = (
         <>
            <Grid container direction="column"  className={classes.homecontainer}>
                <Grid item container  direction="column"  >
                    <Grid item container direction="row" className={classes.detailcontainer}>
                        <Grid item>
                            <IconButton component={Link} to="/games">
                                <ArrowBackIosIcon color="secondary"/>
                            </IconButton>
                        </Grid>
                            <Grid item>
                                <Typography variant="h1" style={{marginTop:5}} className={classes.h1text} >{detaildata && detaildata.title}</Typography>
                            </Grid>
                    </Grid>
                     <Grid item container className={classes.detailimgcontainer} justify="center">
                         <Grid item className={classes.detailimg}>
                            {detaildata &&
                                (
                                // <img src={detaildata && process.env.REACT_APP_BASEURL + `${detaildata.img1}`} alt={detaildata && detaildata.title} width="100%" height="100%" />
                                <img src={ `/${detaildata.img1}`} alt={detaildata && detaildata.title} width="100%" height="100%" />
                            )
                            }
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container className={classes.detailimgcontainer} direction="column">
                    <Grid item className={classes.detailtextcontainer}>
                        <Typography variant="h2" paragraph className={classes.h2text}>Description</Typography>
                        <Typography variant="body1" className={classes.body1text} paragraph>{detaildata &&  detaildata.desc}</Typography>
                    </Grid>
                    <Grid item className={classes.detailtextcontainer}>
                        <Typography variant="h2" className={classes.h2text}  paragraph>Requirements</Typography>
                        <Typography variant="body1" className={classes.body1text} paragraph>{detaildata &&  detaildata.desc}</Typography>
                    </Grid>
                    <Grid item style={{marginLeft:22}}>
                        {/* <Typography variant="h2"  className={classes.h2text} paragraph>Download</Typography> */}
                          <List component="div" disablePadding> 
                        <ListItem button onClick={handleClick}>
                            
                            <ListItemText disableTypography className={classes.h2text} >Download</ListItemText>
                                {openlink ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                        <Collapse in={openlink} timeout="auto" unmountOnExit>
    
                          
                                <ListItem button className={classes.nested}>
                                        <ListItemText disableTypography className={classes.body1text} >Ko may Ko Loe</ListItemText>
                                </ListItem>
                            
                        </Collapse>
                            </List>
                    </Grid>
                </Grid>
               
           </Grid>
        </ >
    )
    
    return (
        <>
            {
                searchlist ?
                        
                        detailpage 
                    :<Grid container direction="column" justify="center" className={classes.homecontainer} style={{ width:'100%',height:'100vh'}}>
                        <Loading />
                </Grid>
            }
        </>
    )
}
export default DetailPage;
