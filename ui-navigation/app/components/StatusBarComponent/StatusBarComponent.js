import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class StatusBarComponent extends Component{
    constructor(){
        super();
        this.state = {
            barColor: this.props.barColor
        }
    }

    static defaultProps = {
        barColor: "steelblue"
}

    render(){
        return (
        <View>
            <StatusBar
                backgroundColor = {this.state.barColor}
                barStyle = "dark-content"
                hidden = {false}
                translucent = {false}
            />
        </View>
        )
    }
}

AppRegistry.registerComponent('StatusBarComponent', () => StatusBarComponent);