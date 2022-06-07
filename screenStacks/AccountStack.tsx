import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import AccountInfoScreen from "../screens/AccountInfoScreen";
import InnerAccountInfoScreen from "../screens/InnerAccountInfoScreen";


const Stack = createNativeStackNavigator();

export default function AccountStack() {

    return (
        <NavigationContainer>
            <Stack.Screen name="AccountScreen" component={AccountInfoScreen}/>
            <Stack.Screen name="InnerAccountScreen" component={InnerAccountInfoScreen} options={{gestureEnabled:true, headerBackTitle:"Saved Screen", headerBackVisible: true}}/>
        </NavigationContainer>
    );

}






