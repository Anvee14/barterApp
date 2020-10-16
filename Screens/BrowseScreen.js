import React, { Component } from 'react';
import { StyleSheet, Text, View ,Modal, ScrollView, KeyboardAvoidingView, TouchableOpacity,TextInput} from 'react-native';
import db from '../config'
import * as firebase from 'firebase'
export default class RequestScreen extends Component{
    render(){
    return(
        <View >
          <Text style={StyleSheet.container}>Browse!</Text>
        </View>
    )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(247, 217, 143)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      fontSize:15,
      marginTop:10
    },
    scanButton: {
      
      width: 150,
      backgroundColor: 'lightblue',
      borderRadius: 25,
      borderColor: 'black',
      borderWidth: 3,
      fontWeight: 'bold',
      fontSize: 15,
      marginLeft: 'center',
      marginRight: 'center',
      textAlign: 'center',
      marginTop:10,
    },

  
    buttonText: {
      fontWeight: 'bold',
      fontSize: 15,
  
    },
    inputBox: {
      width: 300,
      height: 30,
      marginTop: 10,
      borderWidth: 1,
      fontWeight: 'bold',
      fontSize: 15,
      borderWidth: 3,
      borderRadius: 20,
      borderColor: 'black',
      lineHeight: 230,
      marginLeft: 'center',
      marginRight: 'center',
      textAlign: 'center',
    },
    submitButton:{
      height:30,
      width:150,
      backgroundColor: 'rgb(255, 190, 28)',
      borderRadius: 25,
      borderColor: 'black',
      borderWidth: 4,
      fontWeight: 'bold',
      fontSize: 17,
      marginLeft: 'center',
      marginRight: 'center',
      textAlign: 'center',
      marginTop:30,
    },
    bookImage: {
      width: 100,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 100
    }
  });