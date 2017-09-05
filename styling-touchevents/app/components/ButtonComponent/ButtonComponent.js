import React, {Component} from 'react';
import {AppRegistry, Text, View, Button, Alert} from 'react-native';

const alertMessage = 'This is your message';

export default class ButtonComponent extends Component{
    constructor(){
        super();
        this.state = {
            
        }
    }

    btnPress(){
        Alert.alert('Alert Title', alertMessage, [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
            {text: 'Ok', onPress: () => console.log('Ok Pressed!')},
        ]);
    }

    render(){
        return (
        <View>
            <Button 
                onPress={this.btnPress}
                title="Learn More"
                color="violet"
                accessibilityLabel="This is a standard button"
            />

            <Button 
                onPress={this.btnPress}
                title="Learn More"
                color="coral"
                disabled={true}
                accessibilityLabel="This is a standard button"
            />

            <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                <Button 
                onPress={this.btnPress}
                title="Learn More"
                color="violet"
                accessibilityLabel="This is a standard button"
            />

            <Button 
                onPress={this.btnPress}
                title="Learn More"
                color="coral"
                accessibilityLabel="This is a standard button"
            />
            </View>
        </View>
        )
    }
}

AppRegistry.registerComponent('ButtonComponent', () => ButtonComponent);