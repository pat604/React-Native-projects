import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class ToolbarAndroidComponent extends Component{
    constructor(){
        super();
        this.state = {
            
        }
    }

    render(){
        return (
        <View>
            <Text>Boiler Component</Text>
        </View>
        )
    }
}

AppRegistry.registerComponent('ToolbarAndroidComponent', () => ToolbarAndroidComponent);