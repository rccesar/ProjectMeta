import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../src/icons/homeflat_106039.svg"
import Picture from "../src/icons/picture.svg"


import User from "../src/icons/user.svg"
import Feed from "./screens/Feed";

const MenuRoutes = {
    Feed: {
        name:'Feed',
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({tintColor})=>
            <Home size={30} fill={tintColor}></Home>
        }

    },
    Add: {
        name: 'AddPhoto',
        screen: Feed,
        navigationOptions: {
            title: 'Add Picture',
            tabBarIcon: ({tintColor})=>
            <Picture size={30} fill={tintColor}></Picture>
        }
    },
    Add: {
        name: 'AddPhoto',
        screen: Feed,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({tintColor})=>
            <User size={30} color={tintColor}></User>
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Feed',
    tabBarOptions: {
        showLabel: false,
    }

}

const MenuNavigator = createBottomTabNavigator(MenuRoutes,MenuConfig)
export default MenuNavigator