import {types} from "../constants/type"
const initialState = {
    data: {},
    loading:true
}

export const recentGamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case (types.ADD_RECENT_GAMES): {
            return {loading:false,data:{...action.payload}}
        }
        case (types.RESET_GAMES): {
             return {loading:true}
        }
        default: {
            return state;
            }
    }
}

