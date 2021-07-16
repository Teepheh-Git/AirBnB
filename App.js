import 'react-native-gesture-handler'
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import HomeScreen from "./src/screens/Home";
import Post from "./src/components/post";
import feed from "./assets/data/feed";
import SearchResultsScreen from "./src/screens/SearchResults";
import DestinationSearchScreen from "./src/screens/DestinationSearch";
import GuestScreen from "./src/screens/Guests";


export default function App() {
    return (

        <>
            <SafeAreaView style={styles.container}>


                <StatusBar style="auto"/>
                <GuestScreen />
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
    },
});
