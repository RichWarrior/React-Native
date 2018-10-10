import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import MyContainer from './src/MyButton';
import AddButton from './src/Add';
import MyList from './src/ListItem';

export default class App extends Component {

  state = {
    text: null,
    users: ['John', 'Michael']
  }

  // onTextChanged = (value) => {
  //   this.setState({
  //     text: value
  //   })
  // }

  // onPress = () => {
  //   if (this.state.text === null) {
  //     alert('Please Enter the Name')
  //   } else {
  //     alert('Hi ' + this.state.text)
  //   }
  // }

  onTextChanged = (value) => {
    this.setState({
      text: value
    })
  }

  onPress = () =>{
    if(this.state.text!=null){
      this.setState(prevState => {
        return{
          users : [...prevState.users,this.state.text]
        }
      })
      this.setState({
        text: null
      })
    }else{
      alert('Please Enter the Value')
    }
  }  

  render() {
    return (
      <View style={styles.container}>
        <MyList myValue={this.state.users} />
        <AddButton onChanged={this.onTextChanged} press={this.onPress}/>
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
