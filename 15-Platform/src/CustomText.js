import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class MyCustomText extends Component{   
    render(){
        {
            
        }
        return(            
            <Text style={Styles.text}>
                {
                    Platform.OS === 'ios' ?
                        'Your Operation System is IOS'
                    :
                        'Your Operation System is Android'
                }
            </Text>
        )
    }
}

const Styles = StyleSheet.create({
    text:{
        ...Platform.select({
            ios :{backgroundColor : 'red'},
            android : {backgroundColor : 'green'}
        })
            
    }
})

export default MyCustomText;