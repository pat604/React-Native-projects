import React, {Component} from 'react';
import {AppRegistry, Text, View, StatusBar, Navigator} from 'react-native';

import SceneComponent1 from './app/components/SceneComponents/SceneComponent1'
import SceneComponent2 from './app/components/SceneComponents/SceneComponent2'

export default class mymobileapp extends Component{

  renderScene(route, navigator){
    switch(route.id){
      case "scene1" : 
        return (<SceneComponent1 navigator={navigator} title="scene1"/>)
      case "scene2" : 
        return (<SceneComponent2 navigator={navigator} title="scene2"/>)
      }
  }

  render(){
    return (
      <Navigator
         initialRoute={{id: "scene1"}}
         renderScene={this.renderScene}
         configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      />
    )
  }
}

AppRegistry.registerComponent('mymobileapp', () => mymobileapp);

