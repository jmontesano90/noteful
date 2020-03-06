import React, { Component } from 'react';
import dummy from './dummy-store'
import './App.css'
import {Route, Link} from 'react-router-dom'
import FolderList from './FolderList'
import NoteList from './NoteList'
import NotePage from './NotePage'
import homePage from './homePage'
import {getNotesForFolder, findNote, findFolder} from './notes-helpers';
import FolderSelected from './FolderSelected';

class App extends Component{
  state = {
    notes: [],
    folders: []
};

componentDidMount() {
    // fake date loading from API call
    setTimeout(() => this.setState(dummy), 600);
    // console.log(this.state.notes);
    // setTimeout(() => console.log(this.state.folders), 1000);
    // setTimeout(() => console.log(this.state.notes), 1000);
    //???????????????????????????????? HOW
}


  render() {
  
    return(
      <div>
        <nav>
          <Link to='/' className="name">Noteful</Link>
        </nav>
        <main>
        <Route exact path="/" component={FolderList}/>
        <Route path="/folder/:folderId"
              component={(props) => {
                return <FolderList folderSelect={props.match.params.folderId} />
              }}
        />
        <Route path="/folder/:folderId"
                component={(props) => {
                  return <NoteList notes={getNotesForFolder(this.state.notes, props.match.params.folderId)}/>
                }} 
              />
            

        <Route path="/note/:noteId"
                component={(props) => {
                  const noteInfo=findNote(this.state.notes, props.match.params.noteId)
                  return <FolderSelected folder={findFolder(this.state.folders, noteInfo.folderId)}/>
                }} 
              />

        <Route exact path='/' component={(props) => {
          return <NoteList notes={this.state.notes}/>
        }}/>

        <Route
            path='/note/:noteId'
             component={(props) => {
               return <NotePage noteId={props.match.params.noteId} noteInfo={findNote(this.state.notes, props.match.params.noteId)}/>
             }}
            />
        </main>
      </div>
    )
  }
}



export default App;
