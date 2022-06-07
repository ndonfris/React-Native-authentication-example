import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import CreateAccountScreen from "../screens/LoginScreen";
import LoginScreen from "../screens/LoginScreen";


const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <NavigationContainer>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="AccountScreen" component={CreateAccountScreen} /> 
        </NavigationContainer>
    );
}






