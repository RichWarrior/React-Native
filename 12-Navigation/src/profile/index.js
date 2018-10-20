import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

class ProfileComponent extends Component { 
    static navigationOptions={
        title:'Profile'
    }
    render() {        
        return (
            <View>
                <Text>This is my profile screen</Text>                
            </View>

        )
    }
}

export default ProfileComponent;