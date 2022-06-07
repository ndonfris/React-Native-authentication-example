import {NavigationContainer} from '@react-navigation/native';
import React, {useReducer, useEffect, useMemo, useState} from 'react';
import HomeScreen from 'screens/HomeScreen';
import Splash from 'screens/Splash';
import {AuthContext} from 'contexts/AuthContext';
import authReducer, {initialAuthState} from 'reducers/AuthReducer';




export default function App() {

    const [ showSplash, setShowSplash] = useState(true);
    const [ state, dispatch ] = useReducer(authReducer, initialAuthState);

    useEffect(() => {
        console.log(`state.isLoading: ${ state.isLoading }`)
    }, [state.isLoggedIn]);


    return (
        <AuthContext.Provider value={{state, dispatch}}>
            <NavigationContainer independent={true}>
                {state.isLoading ? <Splash showSplash={showSplash} /> : <HomeScreen />}
            </NavigationContainer> 
        </AuthContext.Provider>

    );
}
 
