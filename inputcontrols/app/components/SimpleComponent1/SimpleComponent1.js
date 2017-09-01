import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class SimpleComponent1 extends Component {

    constructor() {
        super();
        this.state = {
          showMessage: true
        }
    }

    static defaultProps = {
        message: 'Hello Brad'
    }

    hideMsg() {
        this.setState({showMessage: false});
    }

    componentWillMount() {
        this.hideMsg();
    }

  render() {
    let msg = this.state.showMessage ? this.props.message : 'No message';
    return (
      <View>
        <Text>{msg}</Text>
      </View>
    )
  }

}

SimpleComponent1.propTypes = {
    message: React.PropTypes.string
}

AppRegistry.registerComponent('SimpleComponent1', () => SimpleComponent1);
