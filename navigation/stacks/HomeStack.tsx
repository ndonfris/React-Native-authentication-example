
import React, {useState} from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text } from "react-native";
import SearchStack from "stacks/SearchStack";
import SavedStack from "stacks/SavedStack";
import AccountStack from "stacks/AccountStack";

const Tab = createMaterialBottomTabNavigator();

export default function HomeStack() {

  /* return the bottom tabbar component and render the active page (initializes to Search)  */
  return (
        <Tab.Navigator
            initialRouteName="SearchScreen"
            activeColor="navy"
            inactiveColor="#fff"
            sceneAnimationEnabled={true}
            labeled={false}
            barStyle={styles.barStyle}
        >
            <Tab.Screen
                name="SearchStack"
                component={SearchStack}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons name="magnify" color={focused ? "navy" : color} size={26} />
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
    unFocusedIcon: {
        borderRadius: 50,
        width: 70,
        height: 26,
        alignItems: 'center',
    },
    aroundIcon: {
        backgroundColor: '#fff',
        borderTopWidth: 5,
        borderColor: "#fff",
        borderRadius: 20,
        width: 70,
        height: 56,
        alignItems: 'center',
    },
    focusedIcon: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: 70,
        height: 26,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        textAlign: 'center',
    }
});

