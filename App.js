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
  Alert,
  AsyncStorage
} from 'react-native';
import Note from './components/note';
import firebase from './src/firebase';

const database = firebase.database();

export default class App extends Component {

  constructor(props){
    super(props);
    this.notes = database.ref('notes');
    this.state = {
      notes: {}
    }
  }

  componentDidMount(){
    this.notes.on('value', (snapshot) => {
      this.setState({notes: snapshot.val()})
    });
  }
 
  edit(){
      Alert.alert('edit');
  }

  renderNotes(){
    if(Object.keys(this.state.notes).length){
      var notes = this.state.notes;
      return Object.keys(notes).map(function(key) {
        return <Note note={notes[key]} key={key} />
    });
    }
  }

  addNote(){
    if(this.state.noteText){
       this.notes.push(this.state.noteText);
    }
  }
  render() {
    return (
        <View style={ style.container }>
          <View style={ style.header }>
              <Text style={ style.headerText }>Note</Text>
          </View>
          <ScrollView style={ style.scrollView }>
            {this.renderNotes()}
          </ScrollView>
          <View style={ style.footer } >
            <TouchableOpacity style={ style.addNoteButton } onPress = {this.addNote.bind(this)}>
              <Text style={ style.addNoteButtonText }>+</Text>
            </TouchableOpacity>
            <TextInput onChangeText={(noteText) => this.setState({noteText})} style={ style.textInput } placeholderTextColor ="white" underlineColorAndroid="transparent" value={this.state.noteText}></TextInput>
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
