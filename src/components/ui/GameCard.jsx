import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'

import {Link} from "react-router-dom"
import React from 'react'
import {Zoom} from "@material-ui/core"
import style from "../../style/style"
const GameCard = ({ data, index }) => {
     
        const classes = style()
    return (
        
        
             <Grid  item xs={6} sm={4} lg={3} md={4} xl={3} >
            <Zoom direction="up" in={Boolean(data)} key={index}
            {...(Boolean(data) ? { timeout: 200+100*index } : {})}
            >
                                    <Card className={classes.cardcontent}>
                <CardActionArea component={Link} to={`/game/${data.slug}`}>
                
                    <CardMedia
                        component="img"
                        className={classes.imgsize}
                        // src={process.env.REACT_APP_BASEURL+data.img1}
                        src={`${data.img1}`}
                        alt="REACT COOL IMG"
                        />
                    

                    
                 
                    

                                  
                                        <CardContent style={{padding:10}}>
                                             <Typography variant="h3" className={classes.h3text}>{data.title }</Typography>
                                                    <Typography variant="body1" className={classes.body1text} >
                                                   {data.category.name}
                                             </Typography>
                               
                                        </CardContent>
                                        <CardActions style={{padding:0}}>
                                        <Button  variant="outlined" className={classes.cardbtn} >
                                                   VIEW
                                                </Button>
                                       </CardActions>
                                    </CardActionArea>
                </Card>
                    
            </Zoom>
            </Grid>
                               
    )
}


export default GameCard;