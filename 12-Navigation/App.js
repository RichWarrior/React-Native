import React from 'react';
import {StackNavigator} from 'react-navigation';
import HomeComponent from './src/home/index';
import ProfileComponent from './src/profile/index';

const App = StackNavigator({
  Home:{
    screen : HomeComponent,
  },
  Profile:{
    screen : ProfileComponent
  }
})

export default App;