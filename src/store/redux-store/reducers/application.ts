import * as reducers from "@src/interfaces/reducers"
import { SET_HEADER_TITLE } from "../actions/actionType";

const initialState: reducers.AppState = {
    headerTitle: null,
}

const applicationReducer = (state = initialState, action: any) => {
    const { payload } = action;
    switch (action.type) {
        case SET_HEADER_TITLE:
            return {
                ...state,
                headerTitle: payload
            }
        default:
            return state;
    }
}

export default applicationReducer;