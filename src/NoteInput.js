import React, { Component } from 'react';
import firebase from './firebase';
import './style.css';

//Imported necessary modules and refactored into a class component

export class NoteInput extends Component {

    //Setting the state of the NoteInput (default title and note so that the default is an empty string)
    constructor() {
        super();
        this.state = {
            title: '',
            note: '',
        }
    
    //This will be undefined when the function is called, therefore I use bind on (this).

        this.createNote = this.createNote.bind(this);
    }

    //This handles input and changes the state of the input field in real time, allowing the user to type in words.

    inputHandle(e, key) {
        this.setState({
            [key]: e.target.value
        })
    }

    //Checks to see if this.state.title is an empty string, if it is, the user is alerted. If it isn't, the data (title and note) are both pushed to the database

    createNote() {
        if (this.state.title === '' && this.state.note === '') {
            alert(`Aren't you missing something?`);
        } else if (this.state.title === '' || this.state.note === '') {
            alert('Fill out both title and text before submitting!');
        } else {
            firebase.database().ref('notes').push({
                title: this.state.title,
                note: this.state.note
            })
        }
    }

    //Using jsx to create two forms, one input and one textarea to allow user experience aka note taking, as well as one button for the user to submit their note.

    render() {
        return (
            <section className="formSection">
                <h2>Build the wall as you submit your notes!</h2>
                <div className="formOne">
                    <label htmlFor="formTitle">Title</label>
                    <input type="text" id="formTitle" name="formTitle" value={ this.state.title } onChange={(e) => this.inputHandle(e, 'title') }/>
{/* Because the input and textarea both have a value of an empty string (because of the value property) the onChange property which uses an arrow function and points to inputHandle which allows the user input to be saved in state. Also the button has an onClick to ensure that the createNote function has run. */}
                </div>
                <div className="formTwo">
                    <label htmlFor="formText">Note</label>
                    <textarea name="formText" id="formText" value={ this.state.note } onChange={(e) => this.inputHandle(e, 'note') }></textarea>

                </div>
                <button onClick={ this.createNote }>Create note</button>
            </section>
        )
    }
}

export default NoteInput;
