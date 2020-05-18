import React from 'react';
import {View, Text, StyleSheet} from "react-native";

export const ResultScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Result Screen</Text>
        </View>
    )
};

ResultScreen.navigationOptions = {
    headerTitle: 'Results'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});