import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions} from 'react-native';



export default class App extends Component {

  constructor(props){
    super(props)

    this.state={
      os : Platform.OS,
      orientation = Dimensions.get('window').height > 500 ? 'Portrait' : 'Landspace'
    }

    Dimensions.addEventListener("change",(ds)=>{
      this.setState({
        orientation : ds.window.height > 500 ? 'Portrait' : 'Landpsace'
      })
  })
  }

  render() {
    console.log('Your Operation System'+this.state.os)
    console.log('Orientation'+this.state.orientation)   

    

    return (
      <View style={styles.container}>
        <Text style={this.state.orientation === 'Portrait' ? styles.welcome : styles.welcome}>{this.state.os} Screen Position : {this.state.orientation}</Text>       
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
    color : 'red',
    margin: 10,
  },  
});
