import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyAnimation from './src/Animations/Anim_One';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyAnimation />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
