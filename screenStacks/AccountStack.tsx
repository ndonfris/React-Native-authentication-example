import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import AccountInfoScreen from "../screens/AccountInfoScreen";
import InnerAccountInfoScreen from "../screens/InnerAccountInfoScreen";


const AccountInnerStack = createNativeStackNavigator();

export default function AccountStack() {

    return (
        <AccountInnerStack.Navigator initialRouteName={"AccountInfoScreen"}>
            <AccountInnerStack.Screen name="AccountInfoScreen" component={AccountInfoScreen}/>
            <AccountInnerStack.Screen name="InnerAccountInfoScreen" component={InnerAccountInfoScreen} options={{gestureEnabled:true, headerBackTitle:"Saved Screen", headerBackTitleVisible:true, headerTransparent:true, headerShown:false}}/>
        </AccountInnerStack.Navigator>
    );

}






