import { types } from "../constants/type"


export const setRecentGames = (games) => {
    return {
        type: types.ADD_RECENT_GAMES,
        payload:games
    }
}
export const setSearchList = (games) => {
    return {
        type: types.ADD_SEARCH_LIST,
        payload:games
    }
}