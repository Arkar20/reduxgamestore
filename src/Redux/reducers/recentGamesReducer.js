import {types} from "../constants/type"
const initialState = null

export const recentGamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case (types.ADD_RECENT_GAMES): {
            return action.payload
            break;
        }
        default: {
            return state;
            }
    }
}

