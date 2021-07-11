import React from 'react'
import { Grid, Card, CardContent, CardMedia, Typography, CardActions, Button ,CardActionArea} from '@material-ui/core'
import {Link} from "react-router-dom"
import style from "../../style/style"
import {Zoom} from "@material-ui/core"
const GameCard = ({ data, index }) => {
     
        const classes = style()
    return (
        
        
             <Grid  item xs={6} lg={3} md={4} xl={3} >
            <Zoom direction="up" in={Boolean(data)} key={index}
            {...(Boolean(data) ? { timeout: 200+100*index } : {})}
            >
                                    <Card className={classes.cardcontent}>
                <CardActionArea component={Link} to={`/game/${data.slug}`}>
                
                    <CardMedia
                        component="img"
                        className={classes.imgsize}
                        src={data.img1}
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