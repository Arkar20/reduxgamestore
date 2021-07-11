import React from 'react'
import { Grid } from "@material-ui/core"
import style from "../style/style"
import ComingSoon from "./ui/ComingSoon"

const MostPopular = () => {
    const classes = style();
 
    return (
               <Grid container direction="column" justify="center" className={classes.homecontainer} style={{ width:'100%',height:'100vh'}}>
                        <ComingSoon />
                </Grid>
    )
}
export default MostPopular