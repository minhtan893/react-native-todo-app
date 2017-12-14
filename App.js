/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import Note from './components/note';

export default class App extends Component {

  edit(){
      Alert.alert('edit');
  }

  render() {
    return (
        <View style={ style.container }>
          <View style={ style.header }>
              <Text style={ style.headerText }>Note</Text>
          </View>
          <ScrollView style={ style.scrollView }>
              <Note />
          </ScrollView>
          <View style={ style.footer } >
            <TouchableOpacity style={ style.addNoteButton }>
              <Text style={ style.addNoteButtonText }>+</Text>
            </TouchableOpacity>
            <TextInput style={ style.textInput } placeholderTextColor ="white" underlineColorAndroid="transparent"></TextInput>
          </View>
        </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
      flex : 1,
  },
  header: {
    backgroundColor: "#f91e63",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#ddd"
  },
  headerText: {
    color: "white",
    padding: 26,
    fontSize: 18
  },
  footer: {
      position: "absolute",
      alignItems : "center",
      bottom: 0,
      left:0,
      right:0
  },
  addNoteButton: {
    backgroundColor: "#E91E63",
    width:90,
    height:90,
    justifyContent:"center",
    elevation: 8,
    borderRadius:50,
    borderColor: "#ccc",
    alignItems: "center",
    marginBottom: -45,
    zIndex: 100,
  },
  addNoteButtonText: {
    fontSize: 40,
    color: "#fff"
  },
  textInput: {
    alignSelf: "stretch",
    color: "#fff",
    padding:20,
    paddingTop: 46,
    backgroundColor: "#252525",
    borderTopWidth:2,
    borderTopColor:"#ededed" ,
  }
});
