import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ChangePageButton from "../components/ChangePageButton";


export default function CreateAccountScreen() {
    
    return (
        <View style={styles.container}>
            <Text>Create Account Screen</Text>
            <ChangePageButton action={"newPage"} newPageName={"CreateAccountScreen"} />
            <ChangePageButton action={"create"} newPageName={"create"} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 30
    },
});  


