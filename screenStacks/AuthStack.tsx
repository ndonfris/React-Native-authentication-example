import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import InnerSearchScreen from "../screens/InnerSearchScreen";
import SearchScreen from "../screens/SearchScreen";


const Stack = createNativeStackNavigator();

export default function SearchStack() {
    return (
        <NavigationContainer>
            <Stack.Screen name="SearchScreen" component={SearchScreen}/>
            <Stack.Screen name="InnerSearchScreen" component={InnerSearchScreen}options={{gestureEnabled:true, headerBackTitle:"Saved Screen", headerBackVisible: true}}/> 
        </NavigationContainer>
    );
}






