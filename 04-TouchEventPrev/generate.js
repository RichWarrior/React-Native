import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback,StyleSheet } from 'react-native';

const Nav = (props) => (
    <TouchableWithoutFeedback
        onPress={()=>props.onPressMethod()}
        //onLongPress={()=>alert('Long Touched Text Tag')}
        //onPressIn = {()=>alert('On Press In')}
        //onPressOut = {()=>alert('OnPressOut')}
        //onLongPress = {()=>alert("On Long Press")}
        //delayLongPress = {3000}
    >
        <Text style={Styles.container}>Please Touch Me</Text>
    </TouchableWithoutFeedback>

)

const Styles = StyleSheet.create({
    container :{
        color:'black',        
        alignItems: 'center',  
        paddingTop: '50%',        
        fontSize: 25,  
    }

});

export default Nav;