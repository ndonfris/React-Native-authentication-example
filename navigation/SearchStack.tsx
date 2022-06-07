import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import InnerSearchScreen from "screens/InnerSearchScreen";
import SearchScreen from "screens/SearchScreen";


const SearchScreenStack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <SearchScreenStack.Navigator initialRouteName="SearchScreen">
            <SearchScreenStack.Screen name="SearchScreen" component={SearchScreen} />
            <SearchScreenStack.Screen name="InnerSearchScreen" component={InnerSearchScreen} /> 
        </SearchScreenStack.Navigator>
    );
}






