import React, { Component } from 'react';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';

const MyButton = (props) =>{     
    
    return (
        <View style={Styles.container}>
            <TextInput 
                placeholder='Enter the User' 
                style={Styles.textInput} 
                onChangeText={props.onChanged}/>
            <Button 
                title='Add'
                style={Styles.button}
                onPress={props.press}/>
        </View>
    )
}

const Styles = StyleSheet.create({
    container : {
        alignItems: 'center',
        alignSelf: 'center',
        flex:1        
    },
    textInput :{
        width : '100%',
        backgroundColor : '#f2f2f2',
        marginTop: 10,
    }    
})

export default MyButton;