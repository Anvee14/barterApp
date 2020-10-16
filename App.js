import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/LoginScreen'
import {TabNavigator} from './components/TabNavigator'
import { createAppContainer,createSwitchNavigator } from 'react-navigation'
export default class App extends Component{
  render(){
  return (
    <View style={styles.container}>
      <LoginScreen/>
      <TabNavigator/>
    </View>
  );
  }
}

const SwitchNavigator = createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  BottomTab:{screen:TabNavigator}
})
const AppContainer = createAppContainer(SwitchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
