import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MyInput from './src/input';
import Item from './src/ListItem';

export default class App extends Component {

  state = {
    text : '',
    users : ['Michael','Johhny']
  }

  onTextChange = (value) => {
    this.setState({
      text : value
    })
  }

  onPressedButton = () =>{
    if(this.state.text!==null){
      this.setState(prevState=>{
        return{
          users : [...prevState.users,this.state.text]
        }
      })
    }else{
      alert('Please Enter The Name')
    }
  }
  

  render() {
    return (
      <ScrollView
        //onContentSizeChange={(width,heigth)=>alert(width+' '+heigth)}
        //onMomentumScrollBegin={()=>alert('Refresh')}  
        
      >
        <View style={styles.container}>
          <MyInput onValueChanged={this.onTextChange} onPres={this.onPressedButton}/>
          <Item items={this.state.users}/>
        </View>
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
