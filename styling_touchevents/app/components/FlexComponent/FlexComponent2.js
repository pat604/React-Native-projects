import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

export default class FlexComponent2 extends Component{
    constructor(){
        super();
        this.state = {
            
        }
    }

    render(){
        return (
        <View>
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.boxText}>Box 1</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.boxText}>Box 2 - This is a flexbox.</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.boxText}>Box 3</Text>
                </View>

                <View style={styles.box}>
                    <Text style={styles.boxText}>Box 1</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.boxText}>Box 2 - This is a flexbox.</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.boxText}>Box 3</Text>
                </View>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 100,
        justifyContent: "space-around",
        alignItems: "stretch",
        flexWrap: "wrap"
    },
    box: {
        width: 100,
        backgroundColor: "#FF5300",
        padding: 10,
        marginRight: 2,
        marginTop: 2
    }
});

AppRegistry.registerComponent('FlexComponent2', () => FlexComponent2);