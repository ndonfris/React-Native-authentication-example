import React, { useContext, useEffect } from "react";
import {AuthContext} from "contexts/AuthContext";
import HomeStack from "navigation/HomeStack";
import AuthStack from "navigation/AuthStack";


export default function HomeScreen() {

    const {state} = useContext(AuthContext);

    useEffect(() => {
        console.log(`state.isLoggedIn: ${state.isLoggedIn}`);
    }, [state.isLoggedIn]);


  /* return the bottom tabbar component and render the active page (initializes to Search)  */
  return ( state.isLoggedIn ? <HomeStack /> : <AuthStack /> );

}


