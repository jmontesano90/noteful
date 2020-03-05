import React, { Component } from 'react';
import dummy from './dummy-store'
import './App.css'
import {Route, Link} from 'react-router-dom'
import FolderList from './FolderList'
import NoteList from './NoteList'
import NotePage from './NotePage'
import homePage from './homePage'
import {getNotesForFolder, findNote, findFolder} from './notes-helpers';

class App extends Component{
  state = {
    notes: [],
    folders: []
};

componentDidMount() {
    // fake date loading from API call
    setTimeout(() => this.setState(dummy), 600);
    console.log(this.state.notes);
    setTimeout(() => console.log(this.state.folders), 1000);
    setTimeout(() => console.log(this.state.notes), 1000);
    //???????????????????????????????? HOW
}


  render() {
  

    // {dummy.notes.map(note =>
    //   <Note key={note.id} date={note.modified} name={note.name} id={note.id}/>)}
    return(
      <div>
        <nav>
          <Link to='/' className="name">Noteful</Link>
        </nav>
        <main>
        <Route path="/" component={FolderList}/>
        <Route exact path='/' component={NoteList}/>
        <Route
            path='/note/:noteId'
             component={(props) => {
               console.log(props.match.params.noteId)
               return <NotePage noteId={props.match.params.noteId} noteInfo={findNote(this.state.notes, props.match.params.noteId)}/>
             }}
            />
        </main>
      </div>
    )
  }
}

//needs to redone, route not properly linked
//folder route links to custom folder id, done in william statespear
//folderlist already dynamically changes url so thats good
//after that examine live app, I'm unsure how note is supposed to properly function

export default App;
