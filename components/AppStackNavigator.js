import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import BrowseScreen from '../screens/BrowseScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';

export const AppStackNavigator = createStackNavigator({
    TradesItemsList: {
        screen: BrowseScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    UserDetails: {
        screen: UserDetailsScreen,
        navigationOptions: {
            headerShown: false
        }
    }
},
    {
        initialRouteName: 'TradesItemsList'
    }
);
