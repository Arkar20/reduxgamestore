import React,{useState,useEffect} from "react"
import {Grid ,Typography,Button} from "@material-ui/core"
import { Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import style from "../style/style"
import GameCard from "./ui/GameCard"
import axios from "axios"
import {setRecentGames} from "../Redux/actions/game"
import LoadingV2 from "./ui/LoadingV2"
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom"
const Home = () => {
    
    const gamedata = useSelector(state => state.games);
    const dispatch=useDispatch()
  
    const classes = style()
    const [gamecardloader, setGamecardloader] = useState(false)

    useEffect(() => {
      
                axios.get('/api/games').then(res => {
                        
                        dispatch(setRecentGames(res.data))
                })
       
    },[dispatch])
    const options = {
                    drag:true,
                     type         : 'loop',
					gap          : '0rem',
					autoplay     : true,
					pauseOnHover : true,
					resetProgress: false,

            lazyload: true,
            
                    
    }
 
    const handlegamecard = () => {
        setGamecardloader(true)
    }
    console.log(process.env.REACT_APP_BASEURL)
    return (
        <div>
         
        { Boolean(gamedata)       
                  &&  <Splide options={options} >
                            {
                              gamedata  
                               &&( gamedata.data.map(data=>(
                                   <SplideSlide key={data.id}>
                                       <img src={process.env.REACT_APP_BASEURL+data.img1} alt="Image 1" className={classes.imgSlider}  />
                                   </SplideSlide>)
                                    ))
        
                          }
                 
                        </Splide>}
                
            
            <Grid container direction="column" className={classes.homecontainer}>
              { Boolean(gamedata) && <Grid item container direction="row" justify="space-between" alignItems="center" className={classes.tagText} >
                            <Grid item xs>
                                    <Typography className={classes.h2text}  paragraph>Recent Games</Typography>
                            </Grid>
                            <Grid item>
                                    <Button variant="outlined" className={classes.btn} component={Link} to="/games" >
                                        View More
                                </Button>
                            </Grid>

                </Grid>
                }
                <Grid item container direction="row" className={classes.cardcontainer} justify="space-around"> 
                               
                    {
                        Boolean(gamedata) 
                            ?
                       
                            gamedata.data.map((item, index) => (
                          
                           <GameCard
                               key={item.id}
                               data={item}
                                index={index}
                                classes={classes}
                                gamecardloader={gamecardloader}
                               
                                handlegamecard={handlegamecard}
                            
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