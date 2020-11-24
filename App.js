import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/LoginScreen'
import { TabNavigator } from './components/TabNavigator'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
export default function App() {
  return (
    <AppContainer />
  );
}

const SwitchNavigator = createSwitchNavigator({
  LoginScreen: { screen: LoginScreen },
  BottomTab: { screen: TabNavigator }
})
const AppContainer = createAppContainer(SwitchNavigator)
