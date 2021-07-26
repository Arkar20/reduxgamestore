import axios from "axios"
import { types } from "../constants/type"

export const setRecentGames = () => {
    return async (dispatch,getState) => {
        const fetchGames = await axios.get('/api/games')
        dispatch({
        type: types.ADD_RECENT_GAMES,
        payload:fetchGames.data
    })
}

    // return {
    //     type: types.ADD_RECENT_GAMES,
    //     payload:games
    // }
}

export const setPagenation = (pageno) => {
    return async (dispatch,getState) => {
        const fetchGames =await axios.get(`/api/games?page=${pageno}`)
        dispatch({
        type: types.ADD_RECENT_GAMES,
        payload:fetchGames.data
    })
}

   
}
export const setSearchList = (games) => {
    return {
        type: types.ADD_SEARCH_LIST,
        payload:games
    }
}