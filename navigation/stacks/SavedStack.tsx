import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import InnerSavedScreen from "screens/InnerSavedScreen";
import SavedScreen from "screens/SavedScreen";

const SavedScreenStack = createNativeStackNavigator();

export default function SavedStack() {

    return (
        <SavedScreenStack.Navigator 
            initialRouteName="SavedScreen" 
            screenOptions={{
                headerShown: false,
                headerTransparent:true,
                gestureEnabled: false,
            }}
        >
            <SavedScreenStack.Screen key="SavedScreen" name="SavedScreen" component={SavedScreen}/>
            <SavedScreenStack.Screen key="InnerSavedScreen" name="InnerSavedScreen" component={InnerSavedScreen} options={{gestureEnabled:true, headerBackTitle:"Saved Screen"}}/>           
        </SavedScreenStack.Navigator>
    );

}

