import React from 'react';
import {Text, View} from "react-native";
import MapView from 'react-native-maps';

const SearchResultsMap = () => {
    return (
        <View style={{width: '100%', height: '100%'}}>
            <MapView
                // ref={map}
                style={{width: '100%', height: '100%'}}
                // provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 28.3279822,
                    longitude: -16.5124847,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                }}
            />
        </View>
    );
};

export default SearchResultsMap;
