import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ChangePageButton from "../components/ChangePageButton";

export default function InnerAccountInfoScreen() {

    return (
        <View style={styles.container}>
            <Text>More info about your Account...</Text>
            <ChangePageButton action={"back"} newPageName={""} /> 
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


