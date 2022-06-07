
// the possible states for the user type
export type authState = {
    isLoading: boolean,
    isLoggedIn: boolean,
}

// the initial state for a user
export const initialAuthState: authState = {
    isLoading: true,
    isLoggedIn: false,
}

// type is the field to update
// payload is the new value
export type authAction = 
      {type: 'setIsLoading', payload: boolean}
    | {type: 'setIsLoggedIn', payload: boolean};
    
const authReducer = (state: authState = initialAuthState, action: authAction) => {
    switch (action.type) {
        case 'setIsLoading':
            return {...state, token: action.payload};
        case 'setIsLoggedIn':
            return {...state, token: action.payload};
        default:
            Error('authReducer: unknown action type');
            return state;
    }
}


export default authReducer;
