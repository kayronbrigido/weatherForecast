import * as reducers from "@src/interfaces/reducers"
import { GET_CITIES, GET_CITY, GET_STATE, SET_CITY } from "../actions/actionType";

const initialState: reducers.CityState = {
    UF: null,
    City: null,
    Cities: null,
    SetCity: null
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
        case GET_CITIES: {
            return {
                ...state,
                Cities: payload
            }
        }
        case SET_CITY: {
            return {
                ...state,
                SetCity: payload
            }
        }
        default:
            return state;
    }
}

export default cityReducer;