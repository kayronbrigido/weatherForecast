import { combineReducers } from "redux";
import cityReducer from "./city";
import weatherReducer from "./weather";

const appReducer = combineReducers({
    city: cityReducer,
    weather: weatherReducer
})

const rootReducer = (state: any, action: any) => {
    return appReducer(state, action)
}

export default rootReducer