import React, {Component} from 'react';
import {AppRegistry, Text, View, Navigator, StyleSheet, Image, ListView, TouchableHighlight, AsyncStorage} from 'react-native';

export default class Todos extends Component{
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
        this.getTodos();
    }

    componentWillMount(){
        this.getTodos();
    }

    pressRow(todo){
        this.props.navigator.push({
            id:'details',
            todo: todo
        });
    }

    renderRow(todo){
        let image;
        if(todo.completed){
            image = <Image 
                style={styles.checkImage}
                source={require('./check.png')}
            />
        } else {
            image = <Text></Text>
        }
        return(
            <TouchableHighlight onPress={() => {
                this.pressRow(todo);
            }}>
                <View style={styles.row}>
                    <Text style={styles.text}>{todo.text}</Text>
                    <View style={styles.check}>
                        {image}
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    getTodos(){
        AsyncStorage.getItem('todos').then((value) => {
            console.log(value);
            if(value == undefined){
                console.log('No Todos...');
            } else {
                let todos = JSON.parse(value);
                this.setState({
                    todoDataSource: this.state.todoDataSource.cloneWithRows(todos)
                });
            }
        });
    }

    render(){
        return(
            <ListView 
                dataSource={this.state.todoDataSource}
                renderRow={this.renderRow}
            />
        )
    }
}

const styles ={
    row: {
        flexDirection:'row',
        justifyContent:'center',
        padding:12,
        backgroundColor: '#b0d4ff',
        marginBottom:3
    },
    text: {
        flex: 1
    },
    check:{
        flex:1
    },
    checkImage:{
        alignSelf:'flex-end'
    }
}

AppRegistry.registerComponent('Todos', () => Todos);