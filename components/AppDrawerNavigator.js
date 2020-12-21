import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { TabNavigator } from './TabNavigator'
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../Screens/SettingScreen';
import MyTrades from '../Screens/MyTrades'
export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: TabNavigator
    },
    Setting: {
        screen: SettingScreen
    },
    MyTrades: {
        screen: MyTrades
    }
},
    {
        contentComponent: CustomSideBarMenu
    },
    {
        initialRouteName: 'Home'
    })
