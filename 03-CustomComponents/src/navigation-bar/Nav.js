import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';


const NavBar = (props) => (
    <View>
        <Text style={{color:'red'}}>{props.name}</Text>
    </View>
)


export default NavBar;
