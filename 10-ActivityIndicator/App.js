import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
export default class App extends Component {

  state = {
    isLoading : true
  }

  myOnPress = () => {    
    let isOk = false
    if(this.state.isLoading === true){
      isOk = false
    }else{
      isOk = true
    }    
    this.setState({
      isLoading : isOk
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          onPress={()=>this.myOnPress()}>
            <Text style={styles.welcome}>Hello Guys Push My Button</Text>            
        </TouchableOpacity>
        <ActivityIndicator size="large" color="red" animating={this.state.isLoading} />
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
