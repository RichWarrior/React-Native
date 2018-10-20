import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Modal,Button } from 'react-native';

class CustomModals extends Component {
    state = {
        modal: false
    }

    onMyPress = () => {
        this.setState({
            modal: this.state.modal ? false : true
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => this.onMyPress()}>
                    <Text style={styles.welcome}>Open Modals</Text>
                </TouchableOpacity>
                <Modal
                    visible={this.state.modal} animationType={'fade'}>
                    <View  style={{marginTop: 32,backgroundColor:'red'}}>
                        <Text>Hello My Friends!</Text>
                        <TouchableOpacity onPress={()=>this.onMyPress()}>
                        <Text>This is My Custom Modals</Text>
                        </TouchableOpacity>                        
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
})

export default CustomModals;