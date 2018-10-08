import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MyButton from './Generate';
import MyList from './ListItem';


export default class App extends Component {

  state = {
    items: [5,10,15]
  }

  random = () => {
    var key = Math.floor(Math.random()*100)+1
    this.setState((prevState)=>{
      return{
        items : [...prevState.items,key]
      }
    })
  }
  
  onItemDelete = (i) => {
    const newValue = this.state.items.filter((item,index)=>{
      return i !==index
    })
    this.setState({
      items:newValue
    })
  }

  render() {
    return (
      <ScrollView style={{flex:1}}>
        <MyButton onPress={this.random} Text='Sayı Oluştur' />
        <MyList items={this.state.items} delete={this.onItemDelete}/>
      </ScrollView>
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
