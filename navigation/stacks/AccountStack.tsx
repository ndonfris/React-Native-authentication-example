import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AccountInfoScreen from "screens/AccountInfoScreen";
import InnerAccountInfoScreen from "screens/InnerAccountInfoScreen";
import {InnerScreenOptions, OuterScreenOptions} from "themes/HeaderBars";


const AccountInnerStack = createNativeStackNavigator();

export default function AccountStack() {

    return (
        <AccountInnerStack.Navigator initialRouteName={"AccountInfoScreen"}>
            <AccountInnerStack.Screen name="AccountInfoScreen" component={AccountInfoScreen} options={OuterScreenOptions}/>
            <AccountInnerStack.Screen name="InnerAccountInfoScreen" component={InnerAccountInfoScreen} options={InnerScreenOptions}/>
        </AccountInnerStack.Navigator>
    );

}






