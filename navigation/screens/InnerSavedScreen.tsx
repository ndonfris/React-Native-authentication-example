
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ChangePageButton from "components/ChangePageButton";


export default function InnerSavedScreen() {
    
    return (
        <View style={styles.container}>
            <Text>InnerSaved Screen</Text>
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


