import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TextInput, View} from "react-native";
import search from "../../../assets/data/search";
import Entypo from "react-native-vector-icons/Entypo";

const DestinationSearchScreen = () => {

    const [inputText, setInputText] = useState('');

    return (
        <View style={styles.container}>

            {/*input component*/}
            <TextInput
                style={styles.textInput}
                placeholder='Where are you going?'
                value={inputText}
                onChangeText={setInputText}/>

            {/*list of destination*/}
            <FlatList data={search} renderItem={({item}) => (
                <View style={styles.row}>

                    <View style={styles.iconContainer}>
                        <Entypo name={"location-pin"} size={35} color={'blue'}/>
                    </View>
                    <Text> {item.description}</Text>

                </View>
            )}/>

        </View>
    );
};

export default DestinationSearchScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        height: '100%',
        backgroundColor: 'white'
    }
    ,
    textInput: {
        fontSize: 20,
        marginBottom:
            20,
    }
    ,
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth:
            1,
        borderColor: 'lightgrey',
    }
    , iconContainer: {
        backgroundColor: '#e7e7e7',
        padding: 7,
        borderRadius:
            10,
        marginRight: 15,
    }, locationText: {}
})
