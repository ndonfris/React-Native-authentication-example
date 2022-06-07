import {createContext} from "react";
import {initialAuthState, authAction, authState} from "../reducers/AuthReducer";

export interface AuthContextProps {
    cartState: authState;
    cartDispatch: React.Dispatch<authAction>;
}

export const AuthContext = createContext({
    state: initialAuthState,
    dispatch: ({type, payload}: authAction) => {},
});

//export default AuthContext;








