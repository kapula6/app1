/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Main  from './Scenes/Main';
import Results  from './Scenes/Results';

export default class spotifyApi extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Main', index: 0 }}
        renderScene={(route, navigator) => this.renderScene(route, navigator)}
      />
    );
  }
  renderScene(route, navigator) {

   if(route.title === 'Main') {
     return (<Main navigator={navigator} />)
   } else if (route.title === 'Results') {
     return (<Results navigator={navigator}/>)
   }
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

AppRegistry.registerComponent('spotifyApi', () => spotifyApi);
