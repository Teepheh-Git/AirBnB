import React, {useState} from 'react';
import {FlatList, Text, TextInput, View} from "react-native";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import SuggestionRow from "./SuggestionRow";

const DestinationSearchScreen = () => {

    const [inputText, setInputText] = useState('');
    const navigation = useNavigation();


    return (
        <View style={styles.container}>

            {/*google autocomplete */}
                <GooglePlacesAutocomplete
                    placeholder='Where are you going?'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                        navigation.navigate('Guests',)
                        // { viewport: details.geometry.viewport });

                    }}
                    query={{
                        key: 'AIzaSyCuyNNQbJcq2x9nH6xNVORus9fUp690KJo',
                        language: 'en',
                        types: '(cities)',
                    }}
                    suppressDefaultStyles
                    renderRow={(item) => <SuggestionRow item={item}/>}
                />
            </View>
    );
};

export default DestinationSearchScreen;
