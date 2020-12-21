import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AppStackNavigator } from './AppStackNavigator'
import UploadScreen from '../Screens/UploadScreen'
import { createBottomTabNavigator } from 'react-navigation-tabs'

export const TabNavigator = createBottomTabNavigator
  ({
    Browse: {
      screen: AppStackNavigator,
      navigationOptions: {
        tabBarIcon: <Image
          source={require("../assets/browse.png")}
          style={{ width: 30, height: 30 }}
        />
        ,
        tabBarLabel: "Browse"

      }
    },
    Upload: {
      screen: UploadScreen,
      navigationOptions: {
        tabBarIcon: <Image
          source={require("../assets/Upload.png")}
          style={{ width: 30, height: 30 }}
        />,
        tabBarLabel: "Upload"
      },
    }
  });
