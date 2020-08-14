import React, { Component } from 'react';
import firebase from './firebase';
import Header from './Header';
import NoteInput from './NoteInput';
import Notes from './Notes';
import './style.css';

//Importing all relevant Components to the main App.js file

//App is refactored from a function into a class

class App extends Component {

  //Using the constructor in order to initialize it's state in the App class, we then assign notes an empty array and assigning state to notes.
  constructor() {
    super();
    
    this.state = {
      notes: []
  //empty array which represents the initial state of notes.
    }
  }

  changeDetection() {
    this.dbRef.ref('notes').on('child_added', snapshot => {

  //every time a child is added, the note is pushed and so a new note is added.
      let noteValue = {
        fullNote: snapshot.key,
        title: snapshot.val().title,
        note: snapshot.val().note
      }

      let notes = this.state.notes;
      notes.push(noteValue);

      this.setState({
        notes: notes
      });

    });
  // Detect when a note is removed and record new state.
    this.dbRef.ref('notes').on('child_removed', snapshot => {

      let notes = this.state.notes;
      notes = notes.filter(note => note.fullNote !== snapshot.key);

      this.setState({
        notes: notes
      });

    });
  }


  //We must load data from firebase, we instantiate the network request here to load the data from firebase, and also we call this.changeDetection()
  componentDidMount() {
    this.dbRef = firebase.database();

    this.changeDetection();
  }

  //Look for changes in the firebase database

  

  //Using JSX to print my components to the page
  
  render() {

    return (
      <div className="app">
        <Header />
        <main>
          <NoteInput />
          <Notes notes={ this.state.notes }/>
        </main>
      </div>
    );
  }
}

export default App;