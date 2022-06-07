// contains State's and Action's for the useRecucer hook

// the possible states for the auth type
export type authState = {
    isLoading: boolean,
    isLoggedIn: boolean,
}

// the initial state for the auth type
export const initialAuthState: authState = {
    isLoading: true,
    isLoggedIn: false,
}

// type = field to update
// payload = new value
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
            // typicaly throw error here
            return initialAuthState;
    }
}


export default authReducer;
