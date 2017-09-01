import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import ButtonComponent from './app/components/ButtonComponent/ButtonComponent';


export default class firstreactnativeapp extends Component {

  render() {
    return (
      <View>
        <ButtonComponent />
      </View>
    )
  }
}

AppRegistry.registerComponent('firstreactnativeapp', () => firstreactnativeapp);
