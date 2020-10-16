import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import BrowseScreen from '../Screens/BrowseScreen'
import UploadScreen from '../Screens/UploadScreen'
import { createBottomTabNavigator } from 'react-navigation-tabs'

export const TabNavigator = createBottomTabNavigator
({
  Browse: { screen: BrowseScreen,
             navigationOptions:{
               tabBarIcon:<Image
               source={require("../assets/browse.png")}
               style={{ width: 80, height: 80 }}
             />
               
             }
           },
  Upload: { screen: UploadScreen,
    navigationOptions:{
    tabBarIcon:<Image
    source={require("../assets/Upload.png")}
    style={{ width: 80, height: 80 }}
  /> },
},

})
