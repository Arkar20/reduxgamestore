import React from 'react'
import { Skeleton } from '@material-ui/lab';
import { Grid} from '@material-ui/core'
import style from "../../style/style"
import useMediaQuery from '@material-ui/core/useMediaQuery';


const SkeletonLoader = () => {
      const matches = useMediaQuery('(min-width:300px)');
    const classes=style()
    return (
        
        <Grid  item xs={6} lg={3} md={4} xl={3} style={{marginTop:10}}>
             <Skeleton animation="wave" variant="rect" width={matches?'90%':'70%'} height={300}  className={classes.imgsize}/>  
             <Skeleton variant="rect" width={matches?120:200} height={30} animation="wave" style={{marginTop: 10}}  /> 
             <Skeleton variant="rect" width={matches?80:200} height={30} animation="pulse" style={{marginTop: 10}} />          
        </Grid>


        
    )
}
export default SkeletonLoader;