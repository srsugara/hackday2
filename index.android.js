import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import App from './app/index.js';

console.disableYellowBox = true;

class Other extends Component {
  render() {
    return (
      <App/>
    )
  }
}

AppRegistry.registerComponent('storyBook', () => Other);