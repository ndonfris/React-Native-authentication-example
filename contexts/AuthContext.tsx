import {createContext} from "react";
import {initialAuthState, authAction} from "../reducers/AuthReducer";

export const authContext = createContext({
    state: initialAuthState,
    dispatch: ({type, payload}: authAction) => {},
});










