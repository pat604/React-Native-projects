import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import ScrollViewComponent from './app/components/ScrollViewComponent/ScrollViewComponent'

export default class mymobileapp extends Component{
  render(){
    return (
      <View>
        <ScrollViewComponent />
      </View>
    )
  }
}

AppRegistry.registerComponent('mymobileapp', () => mymobileapp);

