import React, {Component} from 'react';
import {StyleSheet, Text, View,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createMaterialTopTabNavigator} from 'react-navigation';

export default class App extends React.Component{
  render(){
    return(
      <SafeAreaView style={{flex:1}}>
        <MyTabNavigator />
      </SafeAreaView>
    )
  }
}

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Home Screen</Text>        
        
      </View>
    );
  }
}

class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Settings Screen</Text>        
       
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


createMaterialBottomTabNavigator({
  Home :{screen:HomeScreen,navigationOptions:{
    tabBarLabel:'Anasayfa',
    tabBarIcon:({tintColor}) => (
      <Icon name='home' size={24} color={tintColor} />
    )
  }},
  Settings:{screen:SettingsScreen,navigationOptions:{
    tabBarLabel : 'Ayarlar',
    tabBarIcon : ({tintColor}) =>(
      <Icon name='cog' size={24} color={tintColor} />
    )
  }}
},
{
  initialRouteName:'Home',
  order:['Home','Settings'],
  shifting:true,
  activeTintColor:'orange',  
  barStyle:{backgroundColor:'gray'}
})

const MyTabNavigator = createMaterialTopTabNavigator({
  Home :{screen:HomeScreen,navigationOptions:{
    tabBarLabel:'Anasayfa',
    tabBarIcon:({tintColor}) => (
      <Icon name='home' size={24} color={tintColor} />
    )
  }},
  Settings:{screen:SettingsScreen,navigationOptions:{
    tabBarLabel : 'Ayarlar',
    tabBarIcon : ({tintColor}) =>(
      <Icon name='cog' size={24} color={tintColor} />
    )
  }}
},
{
  initialRouteName:'Home',
  order:['Home','Settings'],
  shifting:true,
  activeTintColor:'orange',
  tabBarOptions:{
    style:{
      backgroundColor:'red',      
    },
    indicatorStyle:{
      height:1
    },
    showIcon:true
  },
  tabBarPosition:'bottom'
})