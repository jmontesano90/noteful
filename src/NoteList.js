import React, { Component } from "react";
import Note from "./Note";
import "./NoteList.css";
import ApiContext from "./ApiContext";
import { getNotesForFolder } from "./notes-helpers";

class NoteList extends Component {
  static contextType = ApiContext;

  render() {
    const listOfNotes = !this.props.match.params.folderId
      ? this.context.notes
      : this.context.notes.filter(
          note => note.folderId === this.props.match.params.folderId
        );

    return !listOfNotes.length ? (
      "Loading"
    ) : (
      <div className="listNote">
        {listOfNotes.map(note => (
          <Note
            key={note.id}
            date={note.modified}
            name={note.name}
            id={note.id}
          />
        ))}
      </div>
    );
  }
}

export default NoteList;

// {dummy.folders.map(folder =>
//     <li key={folder.id}>
//         <Link to={`/folder/${folder.id}`}>
//             {folder.name}
//         </Link>
//     </li>)}

/* <div className="listNote">
{this.context.notes.map((note, index) =>
    <Note   key={this.context.notes[index].id} 
            date={this.context.notes[index].modified} 
            name={this.context.notes[index].name} 
            id={this.context.notes[index].id}/>)} */
