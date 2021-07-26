import React,{useState,useEffect} from 'react';
import { Grid ,Typography} from '@material-ui/core'
import GameCard from './ui/GameCard'
import style from "../style/style"
import axios from 'axios';
import { setRecentGames } from "../Redux/actions/game"
import {useSelector,useDispatch} from "react-redux"

import Loading from "./ui/Loading"
import Paginator from "./ui//Paginator.jsx"
import SkeletonLoader from './ui/SkeletonLoader';

const GamePage = () => {

    const gamedata = useSelector(state => state.games)
    const dispatch=useDispatch()
    const [ paginationloading, setpaginationloading ] = useState(false);
    useEffect(() => {
        if(!gamedata)
            axios.get('/api/games').then(res => {
                dispatch(setRecentGames(res.data))
            })
    },[dispatch,gamedata])
     const [gamecardloader, setGamecardloader] = useState(false)
    const classes = style();
    
    const showGameCard = (
            <>
                <Grid item container direction="row" justify="space-between" alignItems="center" className={classes.tagText} >
                            <Grid item xs>
                                    <Typography variant="h2" className={classes.h2text}  paragraph>All Games</Typography>
                            </Grid>
            </Grid>
            
                <Grid item container direction="row" className={classes.cardcontainer} justify="flex-start">
                   {       paginationloading
                    ?
                    [1, 2, 3, 4,5,6,7,8].map(list => <SkeletonLoader key={list}/>)
                
                    
                    :       
                    (gamedata &&
                      

                        gamedata.data.map((item, index) => (
                            <GameCard
                                key={index}
                                data={item}
                                index={index}
                                gamecardloader={gamecardloader}
                                handlegamecard={() => { setGamecardloader(true) }}
                            />
                        ))
                    
                  
                        
                        )
                  }
    
                    </Grid>

            <Grid item container direction="row" justify='center'
           >
                  <Grid item>
                     <Paginator setskeleton={setpaginationloading} />
                  </Grid>
                </Grid>
               </>
        
    )

    const loading = (
     <Grid item container direction="row" justify="center" alignItems="center" style={{width:'100%',height:'100vh'}} >
            <Loading />
        </Grid>
   )

return (
    <Grid container direction="column" className={classes.homecontainer}>

      {  gamedata?showGameCard:loading}
         </Grid>
    )
}
export default React.memo(GamePage)