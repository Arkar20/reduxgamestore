import React from 'react'
import { Skeleton } from '@material-ui/lab';
import { Grid} from '@material-ui/core'
import style from "../../style/style"

const SkeletonLoader = () => {
    const classes=style()
    return (
        
        <Grid  item xs={6} lg={3} md={4} xl={3} >
             <Skeleton animation="wave" variant="rect" width={'70%'} height={300}  className={classes.imgsize}/>  
             <Skeleton variant="rect" width={200} height={30} animation="wave" style={{marginTop: 10}}  className={classes.h3text}/> 
             <Skeleton variant="rect" width={100} height={30} animation="pulse" style={{marginTop: 10}} className={classes.cardbtn}/>          
        </Grid>


        
    )
}
export default SkeletonLoader;