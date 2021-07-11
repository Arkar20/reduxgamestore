import React from 'react'
import { Skeleton } from '@material-ui/lab';
import { Grid, Card, CardContent, CardMedia, Typography, CardActions, Button ,CardActionArea} from '@material-ui/core'
import style from "../../style/style"

const SkeletonLoader = () => {
    const classes=style()
    return (
        
        <Grid  item xs={6} lg={3} md={4} xl={3} spacing={10}>
             <Skeleton animation="wave" variant="rect" width={'90%'} height={300}  />  
             <Skeleton variant="rect" width={200} height={30} animation="wave" style={{marginTop: 10}} /> 
             <Skeleton variant="rect" width={100} height={30} animation="pulse" style={{marginTop: 10}} />          
        </Grid>
        
    )
}
export default SkeletonLoader;