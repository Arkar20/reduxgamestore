import React from 'react';
import { Grid, GridItem,Typography} from "@material-ui/core"
import style from "../style/style"
const Footer = () => {
    const classes=style()
    return (
        <Grid container className={classes.footercontainer} justify="center">
            <Grid item>
                <Typography variant="body1">&copy; 2021
                    <span className={classes.footertext}> Trio Store</span>
                </Typography>
            </Grid>
        </Grid>
    )
}
export default Footer

