import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, {useContext, useReducer} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {authContext} from './contexts/AuthContext';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import NavigationStacks from './NavigationStacks';
import authReducer from './reducers/AuthReducer';
import LoadingScreen from './screens/LoadingScreen';


export default function App() {


    const authStates = useContext(authContext);

    const [state, dispatch] = useReducer(authReducer, authStates as never);

    return (
        <SafeAreaProvider>
            {
                state.isLoading 
                    ? <LoadingScreen />
                    : <NavigationStacks />
            }
        </SafeAreaProvider>
    );
}
