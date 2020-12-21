import React, { Component } from 'react';
import { Header, Icon, Badge } from 'react-native-elements';
import { View, Text, StyeSheet, Alert } from 'react-native';
export default class MyHeader extends Component {

    render() {
        return (
            <Header
                leftComponent={<Icon name='bars' type='font-awesome' color='#696969' onPress={() => this.props.navigation.toggleDrawer()} />}
                centerComponent={{ text: this.props.title, style: { color: '#90A5A9', fontSize: 15, fontWeight: "bold", } }}

                backgroundColor="#eaf8fe"

            />
        );
    };
}


