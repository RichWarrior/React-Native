import React, {Component} from 'react';
import LottieView from 'lottie-react-native';


export default class App extends Component{
  render() {
    return (
      <LottieView
      source={require('./animatios/books.json')}
      autoPlay
      loop
    />
    )    
  }
}


