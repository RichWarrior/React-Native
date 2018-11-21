import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';

class AppTodo extends Component {

    state = {
        text : ''
    }

    addTodo = (text) => {
        this.props.dispatch({type:'ADD_TODO',text})
        this.setState({text:''})
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='Eg. Create New Video'
                    style={styles.textInput}
                    onChangeText={(value)=>this.setState({text:value})}
                    value={this.state.text}
                />
                <TouchableOpacity onPress={()=>this.addTodo(this.state.text)}>
                    <View style={{height:50,backgroundColor:'#eaeaea',alignItems:'center',justifyContent:'center',marginTop:5,padding:8}}>
                        <Text>Add</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 40
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#f2f2e1',
        backgroundColor: '#eaeaea',
        height: 50,
        flex: 1,
        margin: 5
    }
})

export default connect()(AppTodo);