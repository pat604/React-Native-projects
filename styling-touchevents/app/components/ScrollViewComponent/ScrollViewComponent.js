import React, {Component} from 'react';
import {AppRegistry, Text, View, ScrollView} from 'react-native';

export default class ScrollViewComponent extends Component{
    constructor(){
        super();
        this.state = {
            
        }
    }

    render(){
        return (
        <View>
            <Button title="Scroll" onPress={_scrollView.scrollTo({y: 400})} />
            <ScrollView
                ref = {(scrollView) => {_scrollView = scrollView}}
                contentContainerStyle= {{padding: 20}}
                horizontal={false}
                onContentSizeChange = {(contentWidth, contentHeight) => 
                    {console.log("height: " + contentHeight + ", width: " + contentWidth);}}
                onScroll = {() => console.log("scrolling...")}
                pagingEnabled = {false}
                scrollEnabled = {true}
                showsHorizontalScrollIndicator = {false}
                showsVerticalScrollIndicator = {false}
            >
                <Text style={{fontsize: 96}}>Start scrolling!</Text>
                <Text style={{fontsize: 96}}>Start scrolling!</Text>
                <Text style={{fontsize: 96}}>Start scrolling!</Text>
                <Text style={{fontsize: 96}}>Start scrolling!</Text>
                <Text style={{fontsize: 96}}>Start scrolling!</Text>
                <Text style={{fontsize: 96}}>Start scrolling!</Text>
            </ScrollView>
        </View>
        )
    }
}

AppRegistry.registerComponent('ScrollViewComponent', () => ScrollViewComponent);