import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import SimpleComponent1 from './app/components/SimpleComponent1/SimpleComponent1';
import PickerComponent from './app/components/PickerComponent/PickerComponent'
import SwitchComponent from './app/components/SwitchComponent/SwitchComponent'
import SliderComponent from './app/components/SliderComponent/SliderComponent'
import TextInputComponent from './app/components/TextInputComponent/TextInputComponent'

export default class firstreactnativeapp extends Component {

  render() {
    return (
      <View>
        <TextInputComponent />
        <PickerComponent />
        <SliderComponent />
      </View>
    )
  }
}

AppRegistry.registerComponent('firstreactnativeapp', () => firstreactnativeapp);
