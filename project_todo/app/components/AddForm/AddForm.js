import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TextInput, Switch, Button, AsyncStorage} from 'react-native';

export default class AddForm extends Component{
    constructor(){
        super();
        this.state = {
            id: '',
            text: '',
            completed: false,
            todos: []
        }
    }

    componentDidMount(){
        this.generateId();
        this.getTodos()
    }

    getTodos(){
        AsyncStorage.getItem('todos').then((value) => {
            if(value != undefined){
                this.setState({todos: JSON.parse(value)});
            }
        });
    }

    generateId(){
        let id = Math.floor(Math.random() * 1000000000);
        this.setState({id});
    }

    onTextChange(value){
        this.setState({text: value});
    }

    onCompletedChange(value){
        this.setState({completed: value});
    }

    onSubmit(){
        console.log('Adding Todo...');
        let todos = this.state.todos;

        todos.push({
            id: this.state.id,
            text: this.state.text,
            completed: this.state.completed
        });

        AsyncStorage.setItem('todos', JSON.stringify(todos));

        this.props.navigator.push({
            id: 'todos'
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

AppRegistry.registerComponent('AddForm', () => AddForm);