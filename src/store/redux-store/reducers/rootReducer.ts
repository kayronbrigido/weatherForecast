import { combineReducers } from "redux";
import cityReducer from "./city";

const appReducer = combineReducers({
    city: cityReducer,
})

const rootReducer = (state: any, action: any) => {
    return appReducer(state, action)
}

export default rootReducer