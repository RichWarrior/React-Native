import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

const TopBar = (props) => (
    <View>
        <TouchableWithoutFeedback
            onPressOut={props.onPress}
        >
            <Text style={Styles.container}>{props.Text}</Text>            
        </TouchableWithoutFeedback>              
    </View>
)

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        textAlign: 'center',
        color: 'red',
        fontSize: 25
    }
})
export default TopBar;