import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Swipeout from 'react-native-swipeout';



export default class Note extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const swipeoutOpts = {
            onOpen: ()=>{
               
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
                        this.props
                    },
                    text: 'Edit', type: 'primary'
                }
            ]
        }

        return(
            <Swipeout {...swipeoutOpts}> 
                <View style={style.note}>
                    <Text style={ style.noteText }>fkdlkflds</Text>
                    <Text style={ style.noteText }>fkdlkflds</Text>
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