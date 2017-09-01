import React, {Component} from 'react';
import {AppRegistry, Text, View, Switch} from 'react-native';

export default class SwitchComponent extends Component{
    constructor(){
        super();
        this.state = {
            value: this.props.value
        }
    }

    static defaultProps = {
        value: false
    }

    onValueChange(value){
        console.log(value);
        this.setState({value: value});
    }

    render(){
        let toggle = this.state.value ? 'ON' : 'OFF';
        return (
        <View>
            <Text>{toggle}</Text>
            <Switch 
                onValueChange={(value) => this.onValueChange(value)}
                value={this.state.value}
                onTintColor='red'
                tintColor='black'
            />
        </View>
        )
    }
}

AppRegistry.registerComponent('SwitchComponent', () => SwitchComponent);