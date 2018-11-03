import React, {Component} from 'react';
import {StyleSheet, Text, View,Animated,Easing,Button} from 'react-native';



export default class App extends Component {

  state={
    anim_one : new Animated.Value(1),
    my_opacity : 1
  }

  onPress = () => {    
    Animated.timing(this.state.anim_one,{
      toValue : this.state.my_opacity === 1 ? 0 : 1,
      duration : 2500,
      delay:1250,
      easing : Easing.bounce
    }).start()
    this.setState({
      my_opacity : this.state.my_opacity === 1 ? 0 : 1
    })    
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.Text style=
        {{
          fontSize:this.state.anim_one.interpolate({
            inputRange:[0,1],
            outputRange:[10,30]
          })

        }}        
        >
          <Text>Hello</Text>
        </Animated.Text>
        <Button title='Run Animation' onPress={this.onPress}/>
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
  }
});
