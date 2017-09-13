import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TextInput, Switch, Button, AsyncStorage} from 'react-native';

export default class EditForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.todo.id,
            text: this.props.todo.text,
            completed: this.props.todo.completed,
        }
    }


    onTextChange(value){
        this.setState({text: value});
    }

    onCompletedChange(value){
        this.setState({completed: value});
    }

    onSubmit(){
        console.log('Updating Todo...');

        AsyncStorage.getItem('todos').then((value) => {
            let todos = JSON.parse(value);

            for(i = 0; i < todos.length; i++){
                if(todos[i].id == this.state.id){
                    todos.splice(i, 1);
                }
            }

            todos.push({
                id: this.state.id,
                text: this.state.text,
                completed: this.state.completed
            });

            AsyncStorage.setItem('todos', JSON.stringify(todos));

            this.props.navigator.push({
                id: 'todos'
            });
        });
    }

    render(){
        return(
        <View style={styles.addForm}>
            <TextInput 
                value={this.state.text}
                placeholder="Todo Text"
                onChangeText = {(value) => this.onTextChange(value)}
            />
            <View style={styles.completed}>
                <Text>Completed:</Text>
                <Switch 
                    value={this.state.completed}
                    onValueChange={(value) => this.onCompletedChange(value)}
                />
            </View>
            <View style={styles.submit}>
            <Button 
                style={styles.btn}
                onPress={this.onSubmit.bind(this)}
                title="Submit"
                color="black"
            />
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
   completed: {
       flexDirection: 'row'
   },
   addForm: {
       backgroundColor:'#b0d4ff',
       padding:20
   },
   submit:{
       marginTop:20
   }
});

AppRegistry.registerComponent('EditForm', () => EditForm);