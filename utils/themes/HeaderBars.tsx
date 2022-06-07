

import {NativeStackNavigationOptions} from "@react-navigation/native-stack";

export const AuthScreenOptions: NativeStackNavigationOptions = {
    headerShown: true,
    gestureEnabled: true
};


export const InnerScreenOptions: NativeStackNavigationOptions = {
    headerShown: true,
    gestureEnabled: true,
    headerTransparent: true,
    headerBackVisible: true
};

export const OuterScreenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
}
