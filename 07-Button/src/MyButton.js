import React, { Component } from 'react';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';

const Btn = (props) => {
    return (
        <View style={Styles.container}>
            <TextInput style={Styles.textInput}
                multiline={true}
                placeholder='Enter the Name'
                onChangeText={props.change}
            />
            <Button title='Text'
                onPress={props.press}
            />
        </View>
    );
}

const Styles = StyleSheet.create({
    textInput :{
        backgroundColor : '#f2f2f2',
        width: '100%',
        textAlign:'center',
        marginBottom: 10
    },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent : 'center'
    }
})

export default Btn;