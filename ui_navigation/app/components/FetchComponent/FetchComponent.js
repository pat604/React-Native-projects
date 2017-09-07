import React, {Component} from 'react';
import {AppRegistry, Text, View, ListView, StyleSheet, TouchableHighlight} from 'react-native';

export default class FetchComponent extends Component{
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            todoDataSource: ds
        }

        this.pressRow = this.pressRow.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }

    componentDidMount(){
        this.fetchTodos();
    }

    fetchTodos(){
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    todoDataSource: this.state.todoDataSource.cloneWithRows(response)
                });
            })
    }

    pressRow(rowId){
        console.log('Row '+rowId+ ' Pressed...');
    }

    renderRow(todo, sectionId, rowId, highlightRow){
        return (
            <TouchableHighlight onPress={() => {
                this.pressRow(rowId);
                highlightRow(sectionId, rowId)
            }}>
                <View style={styles.row}>
                    <Text style={styles.text}>{todo.id}: {todo.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    render(){
        return (
        <ListView 
            dataSource={this.state.todoDataSource}
            renderRow={this.renderRow}
        />
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent:'center',
        padding:12,
        backgroundColor:'#f6f6f6',
        marginBottom:3
    },
    text:{
        flex:1
    }
});

AppRegistry.registerComponent('FetchComponent', () => FetchComponent);