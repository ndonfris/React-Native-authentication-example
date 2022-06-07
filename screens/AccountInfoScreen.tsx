import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ChangePageButton from "components/ChangePageButton";


export default function AccountInfoScreen() {
    
    return (
        <View style={styles.container}>
            <Text>Account Info Screen</Text>
            <ChangePageButton action={"logout"} newPageName={"Logout"} /> 
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


