import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import InnerSavedScreen from "screens/InnerSavedScreen";
import SavedScreen from "screens/SavedScreen";
//import {InnerScreenOptions} from "../../utils/themes/HeaderBars";
import {InnerScreenOptions} from "themes/HeaderBars";

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
            <SavedScreenStack.Screen key="InnerSavedScreen" name="InnerSavedScreen" component={InnerSavedScreen} options={InnerScreenOptions}/>           
        </SavedScreenStack.Navigator>
    );

}

