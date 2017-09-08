import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Share,
  TouchableHighlight
} from 'react-native';

import ShareComponent from "./app/components/ShareComponent/ShareComponent"

export default class reactnativeapi extends Component {
  render() {
    return (
      <View>
        <ShareComponent />
      </View>
    );
  }
}

AppRegistry.registerComponent('reactnativeapi', () => reactnativeapi);
