import { useSelector } from "react-redux";

import { ReduxState } from "@src/interfaces/reducers"

const useReduxState = () => useSelector((state: ReduxState) => state)

export default useReduxState;