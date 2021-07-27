import React, {useState} from 'react';
import {Text, View} from "react-native";
import MapView, {Marker} from 'react-native-maps';

import places from '../../../assets/data/feed'
import CustomMarker from "../../components/CustomMarker";


const SearchResultsMap = () => {

    const [selectedPlaceId, setSelectedPlaceId] = useState("null");

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
            >

                {places.map(place => (
                    <CustomMarker
                        coordinate={place.coordinate}
                        price={place.newPrice}
                        isSelected={place.id === selectedPlaceId}
                        onPress={() => setSelectedPlaceId(place.id)}
                    />)
                )}

            </MapView>
        </View>
    );
};

export default SearchResultsMap;
