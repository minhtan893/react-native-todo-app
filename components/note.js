import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Swipeout from 'react-native-swipeout';



export default class Note extends Component{
    constructor(props){
        super(props);
        this.state = {
            edit: false
        }
    }
    createStyle = (backgroundColor = '#ffffff') =>{
        return {
            backgroundColor: (this.state.edit) ? 'red' : '#ffffff',
            position: 'relative',
            padding: 20,
            paddingRight: 100,
            borderBottomWidth: 2,
            borderBottomColor: '#ededed'
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            edit: false,
        })
    }

    render(){
        const swipeoutOpts = {
            onOpen: ()=>{
               
            },
            onClose : ()=>{
                this.props.close();
            },
            autoClose: true,
            right:[
                {
                    onPress: () => {
                        Alert.alert('remove');
                    },
                    text: 'X', type: 'delete'
                },
                {
                    onPress: ()=> {
                        this.setState({
                            edit: true
                        })
                       this.props.editMethod();
                    },
                    text: 'Edit', type: 'primary'
                }
            ]
        }
        return(
            <Swipeout {...swipeoutOpts  }> 
                <View style={this.createStyle()} >
                    <Text style={ style.noteText}>{ this.props.note }</Text>
                </View>
        </Swipeout>
         ) 
        }
}

const style = StyleSheet.create({
    note:{
        backgroundColor: '#ffffff',
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed'
    },
    noteText:{
        paddingLeft:20,
        borderLeftWidth:15,
        borderLeftColor: '#E91E63'
    },

});