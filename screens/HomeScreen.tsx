import React, {useContext, useEffect, useState} from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View } from "react-native";
import SearchStack from "../screenStacks/SearchStack";
import SavedStack from "../screenStacks/SavedStack";
import AccountStack from "../screenStacks/AccountStack";
import {AuthContext} from "contexts/AuthContext";
import HomeStack from "screenStacks/HomeStack";
import AuthStack from "screenStacks/AuthStack";


export default function HomeScreen() {

    const {state, dispatch} = useContext(AuthContext);

    useEffect(() => {
        console.log(`state.isLoggedIn: ${state.isLoggedIn}`);
    }, [state.isLoggedIn]);


  /* return the bottom tabbar component and render the active page (initializes to Search)  */
  return (
          state.isLoggedIn
          ? <HomeStack />
          : <AuthStack />
  );

}


