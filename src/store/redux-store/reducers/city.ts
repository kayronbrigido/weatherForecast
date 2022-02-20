import * as reducers from "@src/interfaces/reducers"
import { GET_CITY, GET_STATE } from "../actions/actionType";

const initialState: reducers.CityState = {
    UF: null,
    City: null,
}

const cityReducer = (state = initialState, action: any) => {
    const { payload } = action;
    switch (action.type) {
        case GET_STATE:
            return {
                ...state,
                UF: payload
            }
        case GET_CITY:
            return {
                ...state,
                City: payload
            }
        default:
            return state;
    }
}

export default cityReducer;