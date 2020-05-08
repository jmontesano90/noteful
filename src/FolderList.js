import React, { Component } from 'react';
import './FolderList.css';
import { Link } from 'react-router-dom';
import ApiContext from './ApiContext';

class FolderList extends Component {
  //class NoteList extends Component
  static contextType = ApiContext;
  render() {
    const { folders = [], notes = [] } = this.context;
    return (
      <div className='sideBar'>
        <ul>
          {folders.map((folder) => (
            <li key={folder.id}>
              <Link to={`/folder/${folder.id}`}>
                {folder.name}: (
                {notes.filter((note) => note.folderid === folder.id).length})
              </Link>
            </li>
          ))}
        </ul>
        <Link to='/new/Folder'>Add a folder</Link>
      </div>
    );
  }
}

export default FolderList;
//style={{backgroundColor: this.props.folderSelected === folder.id ? "gray" : "white"}}
