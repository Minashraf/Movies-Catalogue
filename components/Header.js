import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function Header() {
    return (
        <View style = {styles.header}>
            <Text style = {styles.title}>
                My Film Database
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#e5e5e5',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
        marginBottom:10,
        paddingBottom:6,
    },
    title:{
        paddingLeft:10,
        fontSize: 25,
        fontStyle:'italic',
        alignSelf:'center',
    },
});
