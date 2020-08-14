import React, { Component } from 'react';
import firebase from './firebase';
import './style.css';

export class Notes extends Component {

    removeNote(fullNote) {
        firebase.database().ref('notes').child(fullNote).remove();
    }
//Removes both the title and the content

    render() {
        return (
            <section className="notesSection">
                <h6>Create a note and build the wall! Click the x on the top right of the title of your note to delete.</h6>
                <div className="notes">
                    { this.props.notes.map(note => (
                        <div className="note" key={ note.fullNote }>
                            <div className="noteTitle">
                            <div className="removeNote" onClick={() => this.removeNote(note.fullNote)}>x</div>
                                <h3>{ note.title }</h3>
        {/* JSX that creates a note with a title section and a note section, and puts the contents of that note as the results from the input taken from the user.  */}
                            </div>
                            <div className="noteText">
                                <p>{ note.note }</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )
    }
}

export default Notes;
