import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/LoginScreen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { AppDrawerNavigator } from './components/AppDrawerNavigator'
export default function App() {
  return (
    <AppContainer />
  );
}

const SwitchNavigator = createSwitchNavigator({
  LoginScreen: { screen: LoginScreen },
  Drawer: { screen: AppDrawerNavigator }
})
const AppContainer = createAppContainer(SwitchNavigator)
