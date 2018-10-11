import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

const MyInput = (props) =>{
    return (
        <View>
            <TextInput 
                style = {styles.textInput}
                placeholder='Username' 
                multiline={true}              
                onChangeText={props.onValueChanged}
            />
            <Button 
                title='Register User'
                style={styles.button}
                onPress={props.onPres} />
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        alignItems: 'center',
        flex : 1,
        justifyContent : 'center'        
    },
    textInput : {
        width : '100%',
        backgroundColor:'#f2f2f2',
        marginTop: 15,
    },
    button :{
        marginTop : 15
    }
})


export default MyInput;