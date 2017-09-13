import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight} from 'react-native';

export default class AddButton extends Component{

    onPress(){
        this.props.navigator.push({
            id: 'add'
        });
    }

    render(){
        return(
        <TouchableHighlight 
            style={styles.button}
            onPress={this.onPress.bind(this)}>
            <Text style={styles.text}>Add Todo</Text>
        </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
   button: {
       backgroundColor:'#000000',
       padding:10,
       marginBottom:10
   },
   text:{
       color:'#ffffff',
       textAlign:'center'
   }
});

AppRegistry.registerComponent('AddButton', () => AddButton);