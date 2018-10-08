
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Generate from './generate';
import ListItem from './ListItem';

export default class App extends Component {

  state = {
    random : [15,25,35]
  }

  onAddRandom = () =>{
    const rand = Math.floor(Math.random()*100)+1
    this.setState(prevState => {
      return {
        random : [...prevState.random,rand]
      }
    })
  }

  render() {
    return (
      <View  style={{alignItems:'center'}}>
        <Generate onPressMethod={this.onAddRandom} />
        <ListItem items={this.state.random}/>
      </View>
    );
  }
}

