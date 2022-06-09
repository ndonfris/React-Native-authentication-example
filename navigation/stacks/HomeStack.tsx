import React, {ReactNode, useState} from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View } from "react-native";
import SearchStack from "stacks/SearchStack";
import SavedStack from "stacks/SavedStack";
import AccountStack from "stacks/AccountStack";


interface TabProps {
    name: string;
    iconName: any;
    iconLabel: string;
    component: React.FunctionComponent;
}
   

const TabScreen = ({name, component, iconName, iconLabel}: TabProps) => {
    return (
        <Tab.Screen
            name={name}
            component={component} 
            options={{
                tabBarLabel: iconLabel,
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name={iconName} color={color} size={26} />
                )
            }}
        />
    );
}

const Tab = createMaterialBottomTabNavigator();

export default function HomeStack() {

  /* return the bottom tabbar component and render the active page (initializes to Search)  */
  return (
        <Tab.Navigator
            initialRouteName="SearchScreen"
            activeColor="#fff"
            inactiveColor="#fff"
            sceneAnimationEnabled={true}
            barStyle={styles.barStyle}
        >
            <Tab.Screen
                name="SavedStack"
                component={SavedStack}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='magnify'  color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="SavedStack"
                component={SavedStack}
                options={{
                    tabBarLabel: 'Saved',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="heart" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="AccountStack"
                component={AccountStack}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
  );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    barStyle: {
        height: 80,
        position: 'absolute',
        bottom: 0,
    },
});

