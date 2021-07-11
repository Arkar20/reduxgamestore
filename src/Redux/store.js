import { createStore } from "redux"
import { recentGamesReducer } from "./reducers/recentGamesReducer"
import  {searchlistreducer } from "./reducers/searchlistreducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    games: recentGamesReducer,
    searchlist:searchlistreducer
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
