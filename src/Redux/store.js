import { createStore,applyMiddleware } from "redux"
import { recentGamesReducer } from "./reducers/recentGamesReducer"
import  {searchlistreducer } from "./reducers/searchlistreducer"
import { combineReducers } from "redux"
import { remoteReduxMiddleware, remoteReduxWrapReducer } from 'remote-redux'
const rootReducer = combineReducers({
    games: recentGamesReducer,
    searchlist:searchlistreducer
})

const reducer = remoteReduxWrapReducer(rootReducer)

export const store = createStore(
    rootReducer,
  
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
