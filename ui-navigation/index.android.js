import React, {Component} from 'react';
import {AppRegistry, Text, View, StatusBar} from 'react-native';

import ToolbarAndroidComponent from './app/components/ToolbarAndroidComponent/ToolbarAndroidComponent'

export default class mymobileapp extends Component{
  render(){
    return (
      <View>
        <ToolbarAndroidComponent />
      </View>
    )
  }
}

AppRegistry.registerComponent('mymobileapp', () => mymobileapp);

