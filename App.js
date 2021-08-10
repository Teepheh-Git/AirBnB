import 'react-native-gesture-handler'
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Router from "./src/navigations/Router";

import {withAuthenticator} from "aws-amplify-react-native";


const App: () => React$Node = () => {
    return (

        <>
            <SafeAreaView style={styles.container}>


                <StatusBar style="auto"/>

                <Router/>


            </SafeAreaView>
        </>
    );
}

export default withAuthenticator(App)

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
    },
});
