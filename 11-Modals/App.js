import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomModals from './src/Modals/CustomModals';
export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>        
        <CustomModals/>      
      </View>
    );
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
});
