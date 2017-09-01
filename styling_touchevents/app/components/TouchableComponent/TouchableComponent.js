import React, {Component} from 'react';
import {AppRegistry, Text, View, TouchableHighlight, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class TouchableComponent extends Component{
    constructor(){
        super();
        this.state = {
            toggle: true
        }
    }

    render(){
        let isToggle = this.state.toggle ? "Yes" : "No";
        return (
        <View>
            <Text>{isToggle}</Text>
            <TouchableHighlight 
                onPress={() => this.setState({toggle: !this.state.toggle})}
                underlayColor="red"
            >
                <Text style={styles.toggle}>Toggle</Text>    
            </TouchableHighlight>

            <TouchableOpacity
                onPress={() => this.setState({toggle: !this.state.toggle})}
            >
                <Image 
                    style={styles.button}
                    source={require("./button.png")}
                />
             </TouchableOpacity>   

        </View>
        )
    }
}

const styles = StyleSheet.create({
    toggle: {
        padding: 8, 
        backgroundColor: "#ccc"
    }
});

AppRegistry.registerComponent('TouchableComponent', () => TouchableComponent);