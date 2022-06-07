import {useNavigation} from "@react-navigation/core";
import React, {useContext} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {AuthContext} from "contexts/AuthContext";


interface ChangePageButtonProps {
    newPageName: string;
    action?: string;
}

const ChangePageButton = ({ newPageName, action }: ChangePageButtonProps) => {

    const navigation = useNavigation();
    const {state, dispatch} = useContext(AuthContext);

    const onPress = () => {

        switch (action) {
            case "back":
                if (navigation.canGoBack()) {
                    navigation.goBack();
                }
                break;
            case "create":
                dispatch({type: "setIsLoggedIn", payload: true});
                break;
            case "login":
                dispatch({type: "setIsLoggedIn", payload: true});
                break;
            case "logout":
                dispatch({type: "setIsLoggedIn", payload: false});
                break;
            case "push":
                // @ts-ignore
                navigation.navigate({name: newPageName});
                break;
            default:
                // @ts-ignore
                navigation.navigate({name: newPageName});
                break;
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.text}>{newPageName}</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: "blue",
        width: 300,
        height: 100,
        borderRadius: 20,
        justifyContent: 'center',
    },
    text: {
        textAlign: "center",
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
});
export default ChangePageButton;
