/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import NavBar from './src/navigation-bar/Nav';
import Generator from './src/generator/generator';

export default class App extends Component {

  state = {
    nameOfApp : 'My Example App'
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <NavBar name={this.state.nameOfApp} />
          <Generator />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    alignItems : 'center',
    marginTop: 10,     
  }

});




