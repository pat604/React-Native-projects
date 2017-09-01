import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

export default class StyledComponent extends Component{
    constructor(){
        super();
        this.state = {
            
        }
    }

    render(){
        return (
        <View>
            <Text style={styles.textStyle}>Styled Component</Text>
            <View style={styles.viewStyle1}></View>
            <View style={styles.viewStyle2}></View>
            <View style={styles.viewStyle3}></View>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    textStyle: {
        color: 'blue', 
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: {width: 1, height:1},
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        padding: 5
    },
    viewStyle1: {
        width: 100,
        height: 50, 
        backgroundColor: "#FF5300"
    },
    viewStyle2: {
        width: 200,
        height: 100, 
        backgroundColor: "#FF7431"
    },
    viewStyle3: {
        width: 300,
        height: 150, 
        backgroundColor: "#FF9700"
    }
});

AppRegistry.registerComponent('StyledComponent', () => StyledComponent);