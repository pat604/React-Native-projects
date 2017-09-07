import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import CameraRollComponent from "./app/components/CameraRollComponent/CameraRollComponent"

export default class reactnativeapi extends Component {
  render() {
    return (
      <View>
        <CameraRollComponent />
      </View>
    );
  }
}

AppRegistry.registerComponent('reactnativeapi', () => reactnativeapi);
