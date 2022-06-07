import {useNavigation} from "@react-navigation/core";
import React, {useContext} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {authContext} from "../contexts/AuthContext";


interface ChangePageButtonProps {
    newPageName?: string;
    action?: string;
}

const ChangePageButton = ({ newPageName, action }: ChangePageButtonProps) => {

    const navigate = useNavigation();
    const {state, dispatch} = useContext(authContext);

    const onPress = () => {
        if (action === "back" && navigate.canGoBack()) {
            navigate.goBack();
        } else if (action === "create") {
            dispatch({type: "setIsLoggedIn", payload: true});
        } else if (action === "login") {
            dispatch({type: "setIsLoggedIn", payload: true});
        } else {
            navigate.navigate({ key: newPageName || "Home"});
        }
    }

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{newPageName}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "blue",
        width: 200,
        height: 100,
        borderRadius: 20,
    },
    text: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
});
export default ChangePageButton;
