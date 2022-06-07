import {createContext} from "react";
import {initialAuthState, authAction, authState} from "reducers/AuthReducer";

export const AuthContext = createContext({
    state: initialAuthState as authState,
    dispatch: ({type, payload}: authAction) => {},
});








