import React, { Component } from 'react';
import { AppRegistry, Text, View, ToolbarAndroid, TouchableHighlight, StyleSheet } from 'react-native';

export default class SceneComponent2 extends Component {

    navScene2(){
        this.props.navigator.push({
            id: "scene1"
        });
    }

    render() {
        return (
            <View>
                <View>
                    <ToolbarAndroid title={this.props.title} />
                    <TouchableHighlight onPress={this.navScene2.bind(this)}>
                        <Text>Go to Scene 1</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    toolbar: {
        height: 58,
        backgroundColor: "#f6f6f6"
    }
});

AppRegistry.registerComponent('SceneComponent2', () => SceneComponent2);