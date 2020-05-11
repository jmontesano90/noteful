import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import FolderList from './FolderList';
import NoteList from './NoteList';
import NotePage from './NotePage';
import { findNote } from './notes-helpers';
import FolderSelected from './FolderSelected';
import NewFolder from './NewFolder';
import NewNote from './NewNote';
import ApiError from './ApiError';
import ApiContext from './ApiContext';
import cors from 'cors';

class App extends Component {
  state = {
    notes: [],
    folders: [],
  };

  componentDidMount() {
    // fake date loading from API call
    // setTimeout(() => this.setState(dummy), 600);
    //???????????????????????????????? HOW
    fetch('https://nameless-atoll-42362.herokuapp.com/api/folders')
      .then((response) => response.json())
      .then((jsonData) => {
        this.setState({
          folders: jsonData,
        });
      });

    fetch('https://nameless-atoll-42362.herokuapp.com/api/notes')
      .then((response) => response.json())
      .then((jsonData) => {
        this.setState({
          notes: jsonData,
        });
      });
  }

  handleDeleteNote = (noteId) => {
    this.setState({
      notes: this.state.notes.filter((note) => note.id !== noteId),
    });
  };

  handleAddNote = (note) => {
    this.state.notes.push(note);
    this.setState({
      notes: this.state.notes,
    });
  };

  handleAddFolder = (folder) => {
    this.state.folders.push(folder);
    this.setState({
      folder: this.state.folders,
    });
  };

  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote,
      addNote: this.handleAddNote,
      addFolder: this.handleAddFolder,
    };

    return (
      <ApiContext.Provider value={value}>
        <div>
          <nav>
            <Link to='/' className='name'>
              Noteful
            </Link>
          </nav>
          <main>
            <ApiError>
              <Route exact path='/' component={FolderList} />
              <Route exact path='/' component={NoteList} />
            </ApiError>

            <ApiError>
              <Route path='/folder/:folderId' component={FolderList} />
              <Route path='/folder/:folderId' component={NoteList} />
            </ApiError>

            <ApiError>
              <Route path='/note/:noteId' component={FolderSelected} />
              <Route path='/note/:noteId' component={NotePage} />
            </ApiError>

            <ApiError>
              <Route path='/new' component={FolderList} />
              <Route
                className='newPath'
                path='/new/Folder'
                component={NewFolder}
              />
              <Route className='newPath' path='/new/Note' component={NewNote} />
            </ApiError>
          </main>
        </div>
      </ApiContext.Provider>
    );
  }
}

export default App;
