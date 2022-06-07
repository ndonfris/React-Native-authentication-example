import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ChangePageButton from "../components/ChangePageButton";


export default function InnerSearchScreen() {

    return (
        <View style={styles.container}>
            <Text>More info about your Search Result...</Text>
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


