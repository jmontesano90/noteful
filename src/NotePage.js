import React, { Component } from 'react';
import './Note.css';
import './NotePage.css';
import ApiContext from './ApiContext';

class NotePage extends Component {
  static contextType = ApiContext;

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
