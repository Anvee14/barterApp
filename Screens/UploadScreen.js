import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, ScrollView, KeyboardAvoidingView, TouchableOpacity, Alert, TextInput, KeyboardAvoidingViewBase } from 'react-native';
import db from '../config'
import * as firebase from 'firebase'
import MyHeader from '../components/MyHeader'
export default class BookRequestScreen extends Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      itemName: "",
      price: ""
    }
  }
  createUniqueId() {
    return Math.random().toString(36).substring(7);
  }
  addRequest = (itemName, price) => {
    var userId = this.state.userId
    var randomRequestId = this.createUniqueId()
    db.collection('requested_items').add({
      "user_id": userId,
      "item_name": itemName,
      "price": price,
      "request_id": randomRequestId,
    })

    this.setState({
      itemName: '',
      price: ''
    })

    return alert("Requested Successfully")
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader title="Request Item" navigation={this.props.navigation} />
        <KeyboardAvoidingView style={styles.keyBoardStyle}>
          <TextInput
            style={[styles.formTextInput, { height: 100 }]}
            placeholder={"Enter item name"}

            onChangeText={(text) => {
              this.setState({
                itemName: text
              })
            }}
            value={this.state.itemName}
          />
          <TextInput
            style={[styles.formTextInput, { height: 100 }]}
            placeholder={"Price"}
            keyboardType='numeric'
            onChangeText={(text) => {
              this.setState({
                price: text
              })
            }}
            value={this.state.price}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => { this.addRequest(this.state.itemName, this.state.price) }}
          >
            <Text>Request</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

      </View>
    )
  }




}

const styles = StyleSheet.create({
  keyBoardStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formTextInput: {
    width: "75%",
    height: 35,
    alignSelf: 'center',
    borderColor: '#ffab91',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 20,
  },
  button: {
    width: "75%",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: "#ff5722",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: 20
  },
}
)
