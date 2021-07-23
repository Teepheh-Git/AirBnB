import React from 'react';
import {FlatList, View} from "react-native";
import feed from "../../../assets/data/feed";
import Post from "../../components/post";

const SearchResultsScreen = () => {
    return (

        <View>

            <FlatList data={feed} renderItem={({item}) => <Post post={item}/>}/>

        </View>
    );
};

export default SearchResultsScreen;
