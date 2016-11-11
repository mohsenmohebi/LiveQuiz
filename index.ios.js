import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import root from './components/Root'

export default class LiveQuiz extends Component {
  render() {
    return (
      <View style={styles.container}>
         <Artist url='https://github.com/facebook/react-native'/>
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


// AppRegistry.registerComponent('LiveQuiz', () => LiveQuiz);
AppRegistry.registerComponent('LiveQuiz', () => root);