import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';

class CounterApp extends Component {

  IncreaseCounter = () => {
    this.setState({count : this.state.count+1})
  }
  DecraseCounter = () => {
    this.setState({count : this.state.count-1})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row',width : 200,justifyContent:'space-around' }}>
          <TouchableOpacity onPress={this.props.IncreaseCounter}>
            <Text style={{color:'black',fontSize:18}}>Increase</Text>
          </TouchableOpacity>
          <Text style={{color:'black',fontSize:18}}>{this.props.count}</Text>
          <TouchableOpacity onPress={this.props.DecraseCounter}>
            <Text style={{color : 'black',fontSize:18}}>Decrase</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state){
    return{
        count : state.count
    }
}

function mapDispatchToProps(dispatch){
    return{
        IncreaseCounter : () => dispatch({type:'INCREASE_COUNTER'}),
        DecraseCounter : () => dispatch({type:'DECRASE_COUNTER'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterApp);

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
