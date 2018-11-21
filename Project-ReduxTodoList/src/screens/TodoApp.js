import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import AddTodo from '../containers/AddTodo';
import VisibleTodos from '../containers/VisibleTodos';

class TodoApp extends Component {

    state = {
        todos: []
    }

    render() {
        return (
            <View style={styles.container}>
                <AddTodo />
                <View>
                    <VisibleTodos />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginHorizontal: 20,
    },
});

export default TodoApp;