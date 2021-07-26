import { applyMiddleware, compose, createStore } from "redux"
import { remoteReduxMiddleware, remoteReduxWrapReducer } from 'remote-redux'

import { combineReducers } from "redux"
import { recentGamesReducer } from "./reducers/recentGamesReducer"
import  {searchlistreducer} from "./reducers/searchlistreducer"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    games: recentGamesReducer,
    searchlist:searchlistreducer
})

const reducer = remoteReduxWrapReducer(rootReducer)
    

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
 composeEnhancers(applyMiddleware(thunk))
  
)
