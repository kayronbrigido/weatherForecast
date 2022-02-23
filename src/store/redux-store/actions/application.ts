import { SET_HEADER_TITLE } from "./actionType"

export const setHeaderTitle = (title: string) => (dispatch: any) => {
    try{
        dispatch({
            type: SET_HEADER_TITLE,
            payload: title
        })
    } catch(err) {
        console.error(err)
    }
}