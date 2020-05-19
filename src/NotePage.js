import React, { Component } from 'react';
import './Note.css';
import './NotePage.css';
import ApiContext from './ApiContext';
import { API_ENDPOINT } from './config';

class NotePage extends Component {
  static contextType = ApiContext;

  handleClickDelete = (e) => {
    e.preventDefault();
    const noteId = this.props.match.params.noteId;
    console.log(noteId);
    console.log();

    fetch(`${API_ENDPOINT}/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        this.context.deleteNote(noteId);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    // if (!this.props.noteInfo){return "Loading"}

    const thisNote = this.context.notes.find(
      (note) => note.id === Number(this.props.match.params.noteId)
    );
    console.log(thisNote);
    return thisNote ? (
      <div>
        <div className='noteContents'>
          <div>
            <h2>{thisNote.name}</h2>
            <div className='lastModified'>
              Date Modified on {thisNote.modified}
            </div>
            <button onClick={this.handleClickDelete}>Delete Note</button>
          </div>
        </div>
        <h3>{thisNote.content}</h3>
      </div>
    ) : (
      'Loading'
    );
  }
}

export default NotePage;
