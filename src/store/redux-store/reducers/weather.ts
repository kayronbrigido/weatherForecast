import * as reducers from "@src/interfaces/reducers"
import { GET_WEATHER, GET_WEATHER_ARR } from "../actions/actionType";

const initialState: reducers.WeatherState = {
    weather: null,
    weatherArr: null
}

const weatherReducer = (state = initialState, action: any) => {
    const { payload } = action;

    switch (action.type) {
        case GET_WEATHER:
            return {
                ...state,
                weather: payload
            }
        case GET_WEATHER_ARR:
            return {
                ...state,
                weatherArr: payload
            }
            
        default:
            return state;
    }
}

export default weatherReducer;