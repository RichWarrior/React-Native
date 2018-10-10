import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput,TouchableOpacity } from 'react-native';

const ListItem = (props) => {
    return (
        props.myValue.map((item, i) => (
            <Text>{item}</Text>
        ))
    )
}

const Styles = StyleSheet.create({
    text: {
        color: 'red',
        textAlign: 'center',
        backgroundColor: 'black'
    }
})

export default ListItem;