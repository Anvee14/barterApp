import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import MyHeader from '../components/MyHeader'
export default class MyTrades extends Component {

    render() {
        return (
            <View style={styles.subContainer}>
                <MyHeader navigation={this.props.navigation} title="My Trades" />
                <Text style={styles.textStyle}> Trades</ Text>
            </View>
        )
    }





}
const styles = StyleSheet.create({
    subContainer: {
        flex: 1,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: "bold",
    }



})
