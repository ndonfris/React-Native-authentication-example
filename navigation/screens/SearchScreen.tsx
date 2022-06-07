import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ChangePageButton from "components/ChangePageButton";


export default function SearchScreen({}: {}) {
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Search Screen</Text>
            <ChangePageButton action={"newPage"} newPageName={"InnerSearchScreen"} /> 
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
        paddingTop: 50,
        fontSize: 30
    },
});  


