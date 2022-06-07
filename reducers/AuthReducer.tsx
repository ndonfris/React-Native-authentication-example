
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
            return {...state, isLoading: action.payload}; 
        case 'setIsLoggedIn':
            return {...state, isLoggedIn: action.payload};
        default:
            return initialAuthState;
    }
}


export default authReducer;
