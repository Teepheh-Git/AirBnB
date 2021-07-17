import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/Home";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Fontisto from "react-native-vector-icons/Fontisto";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import ExploreNavigator from "./ExploreNavigator";


const Tab = createBottomTabNavigator();
const HomeTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#f15454',
            }}>
            <Tab.Screen
                name={'Explore'}
                component={ExploreNavigator}
                options={{
                    tabBarIcon: ({color}) => (
                        <Fontisto name="search" size={25} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name={'HomeScreen'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="heart-o" size={25} color={color}/>
                    ),
                }}
            />
            <Tab.Screen
                name={'HomeScreens'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome5 name="airbnb" size={25} color={color}/>
                    ),
                }}
            />
            <Tab.Screen
                name={'HomeScreenss'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <Feather name="message-square" size={25} color={color}/>
                    ),
                }}
            />
            <Tab.Screen
                name={'profile'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <EvilIcons name="user" size={25} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default HomeTabNavigator;
