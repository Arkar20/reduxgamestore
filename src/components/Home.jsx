import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import {Button, Grid, Typography} from "@material-ui/core"
import React,{useEffect} from "react"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useDispatch, useSelector } from "react-redux";

import GameCard from "./ui/GameCard"
import { Link } from "react-router-dom"
import LoadingV2 from "./ui/LoadingV2"
import {setRecentGames} from "../Redux/actions/game"
import style from "../style/style"

const Home = ({setValue}) => {
    
    const gamedata = useSelector(state => state.games);
    const dispatch=useDispatch()
  
    const classes = style()

    useEffect(() => {
                dispatch(setRecentGames())
    }, [dispatch])
    
    console.log(gamedata)
    const options = {
                    drag:true,
                     type         : 'loop',
					gap          : '0rem',
					autoplay     : true,
					pauseOnHover : true,
					resetProgress: false,

            lazyload: true,
            
                    
    }
 
  
    return (
        <div>
         
        { !gamedata.loading       
                  &&  <Splide options={options} >
                            {
                              gamedata  
                               &&( gamedata.data.data.map(data=>(
                                   <SplideSlide key={data.id}>
                                       {/* <img src={process.env.REACT_APP_BASEURL+data.img1} alt="Image 1" className={classes.imgSlider}  /> */}
                                       <img src={`${data.img1}`} alt="Image 1" className={classes.imgSlider}  />
                                   </SplideSlide>)
                                    ))
        
                          }
                 
                        </Splide>}
                
            
            <Grid container direction="column" className={classes.homecontainer}>
              {!gamedata.loading && <Grid item container direction="row" justify="space-between" alignItems="center" className={classes.tagText} >
                            <Grid item xs>
                                    <Typography className={classes.h2text}  paragraph>Recent Games</Typography>
                            </Grid>
                            <Grid item>
                                    <Button variant="outlined" className={classes.btn} component={Link} to="/games" onClick={()=>setValue(1)} >
                                        View More
                                </Button>
                            </Grid>

                </Grid>
                }
                <Grid item container direction="row" justify="flex-start" className={classes.cardcontainer} > 
                               
                    {
                       !gamedata.loading
                            ?
                       
                            gamedata.data.data.map((item, index) => (
                          
                           <GameCard
                               key={item.id}
                               data={item}
                                index={index}
                                classes={classes}
                                gamecardloader={gamedata.data}
                               
                               
                            
                            />
                       ))
                            : (
                                     <Grid item container direction="row" justify="center" alignItems="center" style={{width:'100%',height:'100vh'}} >
                                <LoadingV2 />    
                                </Grid>
                        )
                  }

                </Grid>
               
            </Grid>
          
        </div>
       
    );
}
export default Home;