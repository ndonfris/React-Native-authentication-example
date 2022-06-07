import React, {useContext, useEffect} from "react";
import { View, Text, StyleSheet } from "react-native";
import {authContext} from "../contexts/AuthContext";



export default function LoadingScreen() {

    const {state, dispatch} = useContext(authContext);

    useEffect(() => {
        setTimeout(() => {
            console.log("loading...")
        }, 2000);
        dispatch({type: "setIsLoading", payload: false});
    }, [state.isLoading]);

    return (
        state.isLoading 
        ? <View style={styles.container}>
            <Text style={styles.text}>Loading...</Text>
          </View>
        : <View style={styles.container}> </View>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        fontWeight: "bold"
    }
});


