
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ChangePageButton from "components/ChangePageButton";


export default function SavedScreen() {
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Saved Screen</Text>
            <ChangePageButton action={"newPage"} newPageName={"InnerSavedScreen"} />
            <ChangePageButton action={"newPage"} newPageName={"InnerSavedScreen"} />
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
        fontSize: 30,
        paddingTop: 50,
    },
});  


