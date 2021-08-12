import { Grid, Typography } from '@material-ui/core'
import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux"

import GameCard from './ui/GameCard'
import Paginator from "./ui//Paginator.jsx"
import SkeletonLoader from './ui/SkeletonLoader';
import { setRecentGames } from "../Redux/actions/game"
import style from "../style/style"

const GamePage = () => {

    const gamedata = useSelector(state => state.games)
    const dispatch=useDispatch()
    
    useEffect(() => {
           !gamedata.data && dispatch(setRecentGames())
    }, [dispatch])
    
    const classes = style();
    const showGameCard = (
            <>
                <Grid item container direction="row" justify="space-between" alignItems="center" className={classes.tagText} >
                            <Grid item xs>
                                    <Typography variant="h2" className={classes.h2text}  paragraph>All Games</Typography>
                            </Grid>
            </Grid>
            
                <Grid item container direction="row" className={classes.cardcontainer} justify="flex-start">
                   {        
                    (!gamedata.loading &&
                      

                        gamedata.data.data.map((item, index) => (
                            <GameCard
                                key={index}
                                data={item}
                                index={index}
                                gamecardloader={gamedata.data}
                               
                            />
                        ))

                        )
                  }
    
                    </Grid>

            <Grid item container direction="row" justify='center'
           >
                  <Grid item>
                     <Paginator />
                  </Grid>
                </Grid>
               </>
        
    )

    const loading = (
     <Grid item container direction="row" justify="center" alignItems="center" style={{width:'100%',height:'100vh'}} >
            {[1, 2, 3, 4,5,6,7,8].map(list => <SkeletonLoader key={list}/>)}
        </Grid>
   )

return (
    <Grid container direction="column" className={classes.homecontainer}>

      {  gamedata.loading?loading:showGameCard}
         </Grid>
    )
}
export default React.memo(GamePage)