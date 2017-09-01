import React, {Component} from 'react';
import {AppRegistry, Text, View, Button} from 'react-native';

export default class ButtonComponent extends Component{
    constructor(){
        super();
        console.log("ssss");
        this.state = {
            
        }
    }

    btnPress() {
        console.log("The button was pressed");
    }

    render(){
        return (
        <View>
            <Button
                onPress={this.btnPress} 
                title="Click me"
                color="lightblue"
                accessibilityLabel="standard button"
            />
        </View>
        )
    }
}

AppRegistry.registerComponent('ButtonComponent', () => ButtonComponent);