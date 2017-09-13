import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, Share, AsyncStorage} from 'react-native';

export default class TodoDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.todo.id,
            text: this.props.todo.text,
            completed: this.props.todo.completed
        }
    }

    onEdit(){
        let todo = {
            id: this.state.id,
            text: this.state.text,
            completed: this.state.completed
        }

        this.props.navigator.push({
            id: 'edit',
            todo: todo
        });
    }

    onDelete(){
        AsyncStorage.getItem('todos').then((value) => {
            let todos = JSON.parse(value);

            for(i = 0; i < todos.length; i++){
                if(todos[i].id == this.state.id){
                    todos.splice(i, 1);
                }
            }

             AsyncStorage.setItem('todos', JSON.stringify(todos));

            this.props.navigator.push({
                id: 'todos'
            });
        });
    }

    onShare(){
        Share.share({
            message: this.state.text
        })
        .then(() => {
            this.props.navigator.push({
                id: 'todos'
            });
        })
        .catch((error) => console.log(error))
    }

    render(){
        return(
        <View style={styles.container}>
            <TouchableHighlight
                style={styles.editButton}
                onPress={this.onEdit.bind(this)}
            >
                <Text style={styles.text}>Edit Todo</Text>
            </TouchableHighlight>

            <TouchableHighlight
                style={styles.delButton}
                onPress={this.onDelete.bind(this)}
            >
                <Text style={styles.text}>Delete Todo</Text>
            </TouchableHighlight>

            <TouchableHighlight
                style={styles.shareButton}
                onPress={this.onShare.bind(this)}
            >
                <Text style={styles.text}>Share In Message</Text>
            </TouchableHighlight>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor: '#b0d4ff',
        padding:20
    },
    delButton:{
        backgroundColor:'#800000',
        padding:10
    },
    editButton:{
        backgroundColor:'#397d02',
        padding:10
    },
    shareButton:{
        backgroundColor:'#363636',
        padding:10
    },
    text: {
        color:'#ffffff',
        textAlign:'center'
    }
});

AppRegistry.registerComponent('TodoDetails', () => TodoDetails);