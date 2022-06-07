import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import InnerSavedScreen from "../screens/InnerSavedScreen";
import SavedScreen from "../screens/SavedScreen";

const Stack = createNativeStackNavigator();

export default function SavedStack() {

    return (
        <NavigationContainer>
            <Stack.Screen name="SavedScreen" component={SavedScreen} options={{headerShown:false}}/>
            <Stack.Screen name="InnerSavedScreen" component={InnerSavedScreen} options={{gestureEnabled:true, headerBackTitle:"Saved Screen", headerBackVisible: true}}/>
        </NavigationContainer>
    );

}

