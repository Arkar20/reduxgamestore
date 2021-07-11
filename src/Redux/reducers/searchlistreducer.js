import { types } from "../constants/type"

const initialState = null

export const searchlistreducer = (state = initialState, action) => {
    switch (action.type) {
        case (types.ADD_SEARCH_LIST): {
            return action.payload
        }
        default:
            return state
    }
}