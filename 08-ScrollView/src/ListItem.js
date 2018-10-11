import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const Item = (props) =>{
    return(
        props.items.map((item,i)=>(
            <Text>{item}</Text>
        ))
    )
}

export default Item;