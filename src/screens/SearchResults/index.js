import React, {useState, useEffect} from 'react';
import {FlatList, View} from "react-native";
import Post from "../../components/post";
import {API, graphqlOperation} from "aws-amplify";
import {listPosts} from '../../graphql/queries';
import {useRoute} from "@react-navigation/native";


const SearchResultsScreen = () => {


    const [posts, setPosts] = useState([])
    const route =useRoute()


    useEffect(() => {

        const fetchPosts = async () => {
            try {
                const postResult = await API.graphql(
                    graphqlOperation(listPosts)
                )

                setPosts(postResult.data.listPosts.items);

            } catch (e) {
                console.log(e)
            }
        }

        fetchPosts();
    }, [])

    return (

        <View>

            <FlatList data={posts} renderItem={({item}) => <Post post={item}/>}/>

        </View>
    );
};

export default SearchResultsScreen;
