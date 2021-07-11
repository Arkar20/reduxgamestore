import React, { useState }from 'react'
import dummyimg from "../../assets/Trio_dummy_loading.jpg"
import LazyLoad from 'react-lazyload';
import { Grid, Card, CardContent, CardMedia, Typography, CardActions, Button ,CardActionArea} from '@material-ui/core'
import {Link} from "react-router-dom"
import style from "../../style/style"
const GameCard = ({ data, index }) => {
        const [gamecardloader, setGamecardloader] = useState(false)
        const classes = style()
    return (
        
        <Grid key={index} item xs={6} lg={3} md={4} xl={3}>
                                    <Card className={classes.cardcontent}>
                <CardActionArea component={Link} to={`/game/${data.slug}`}>
                    <LazyLoad height={200} offset={100}>
                    <CardMedia
                        component="img"
                        className={classes.imgsize}
                        src={data.img1}
                        alt="REACT COOL IMG"
                        />
                        </LazyLoad>

                    
                 
                    

                                  
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
                                </Grid>
    )
}


export default GameCard;