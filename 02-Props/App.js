
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
class App extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}
export default class test extends Component{
  render(){
    return(
    <View style={{alignItems:'center'}}>
      <App name='Alice' />
      <App name='Michael' />
    </View>
    );
  }
}


