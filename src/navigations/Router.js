import React from 'react';
import {Dimensions, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import DestinationSearchScreen from "../screens/DestinationSearch";
import GuestScreen from "../screens/Guests";
import HomeTabNavigator from "./HomeTabNavigator";

const Stack = createStackNavigator();
const w = Dimensions.get("window").width
const h = Dimensions.get("window").height


const Router = () => {
    return (
        <View style={{
            // flex:1,
            width: w,
            height: '99%',
        }}>

        <NavigationContainer>
            <Stack.Navigator style={{width:'100%', height:'100%', flex:1}}>
                <Stack.Screen
                    name={"Home"}
                    component={HomeTabNavigator}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name={"Destination Search"}
                    component={DestinationSearchScreen}
                    options={{
                        title: "Search your destination"
                    }}
                />

                <Stack.Screen
                    name={"Guests"}
                    component={GuestScreen}
                    options={{
                        title: "How many people?"
                    }}
                />

                {/*<Stack.Screen*/}
                {/*    name={"Post"}*/}
                {/*    component={PostScreen}*/}
                {/*    options={{*/}
                {/*        title: "Accommodation"*/}
                {/*    }}*/}
                {/*/>*/}
            </Stack.Navigator>
        </NavigationContainer>
        </View>
    );
};

export default Router;
