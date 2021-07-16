import React from 'react';
import {ImageBackground, StyleSheet, Text, View, Dimensions, Pressable} from "react-native";

import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = (props) => {
    return (
        <View>
            <Pressable
                style={styles.searchButton}
                onPress={() => console.warn("search clicked"

                    // navigation.navigate('Destination Search'
                    )}>
                <Fontisto name="search" size={25} color={'#f15454'}/>
                <Text style={styles.searchButtonText}>Where are you going?</Text>
            </Pressable>


            <ImageBackground source={require('../../../assets/images/wallpaper.jpg')}
                             style={styles.image}>

                <Text style={styles.title}>Go Near</Text>

                <Pressable
                    style={styles.button}
                    onPress={() => console.warn('Explore Btn clicked')}>
                    <Text style={styles.buttonText}>Explore nearby stays</Text>
                </Pressable>

            </ImageBackground>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25,
    },
    button: {
        backgroundColor: '#fff',
        width: 200,
        height: 40,
        borderRadius: 10,
        marginTop: 25,
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    //
    searchButton: {
        backgroundColor: '#fff',
        height: 60,
        width: Dimensions.get('screen').width - 20,
        borderRadius: 30,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 50,
        zIndex: 100,
    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },

});
