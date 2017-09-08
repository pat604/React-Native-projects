import React, { Component } from 'react';
import { AppRegistry, Text, View, Share, TouchableHighlight, StyleSheet } from 'react-native';

export default class ShareComponent extends Component {
    constructor() {
        super();
        this.state = {
            result: ""
        }
    }

    shareMessage() {
        Share.share({
            message: "This is the message to be shared."
        }).then(this.showResult)
            .catch((error) => this.setState({ result: "error " + error.message }))
    }

    showResult(result) {
        if (result.action === Share.sharedAction) {
            this.setState({ result: "Shared" });
        } else if (result === Share.dismissedAction) {
            this.setState({ result: "Dismissed" });
        }
    }

    render() {
        return (
            <View>
                <TouchableHighlight 
                    style={styles.wrap}
                    onPress={this.shareMessage}
                >
                    <View style={styles.button}>
                        <Text>Share Message</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrap: {
        marginBottom: 5
    },
    button: {
        backgroundColor: "#cccccc",
        padding: 10
    }
});

AppRegistry.registerComponent('ShareComponent', () => ShareComponent);