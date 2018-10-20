import React, { Component } from 'react';
import { Text, View,TouchableOpacity } from 'react-native';

class HomeComponent extends Component {
    static navigationOptions = {
        title: 'Home'
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>This is my home page</Text>
                <TouchableOpacity
                    onPress={() =>{navigate('Profile')}}>
                    <Text>See My Profile Page</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default HomeComponent;