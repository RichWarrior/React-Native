import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import ContactsComponents from './src/Contacts/index';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <ContactsComponents />
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
