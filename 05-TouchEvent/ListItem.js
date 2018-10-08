import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity,TouchableHighlight, View } from 'react-native';

const List = (props) => {
    return (
        props.items.map((item, i) => (
            <TouchableOpacity
                onPress={()=> props.delete(i)}
                key={i}
            >
                <View style={Styles.container}>
                    <Text style={Styles.item}>{item}</Text>
                </View>
            </TouchableOpacity>
        ))
    )
}

const Styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,     
    },
    item:{
        textAlign:'center',
        fontSize:20,
        marginTop: 5,
        color:'black'
    }    
})


export default List;