import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import MyPicker from './src/picker/index';

export default class App extends Component {

  state = {
    selected_value : '',
    value : 0
  }

  onSelectedChanged= (value) =>{
    alert(value)
    this.setState({
      selected_value : value
    })
  }

  onValueChanged = (value) => {
    this.setState({
      value : parseInt(value)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <MyPicker value={this.state.value} item={this.state.selected_value} onChange={this.onSelectedChanged} onValueChanged={this.onValueChanged} />
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
});
