import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnimOne from './src/Animations/anim_one';
import AnimOneWithButton from './src/Animations/anim_one_button';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AnimOneWithButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
