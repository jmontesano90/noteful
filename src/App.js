import React, { Component } from 'react';
import './dummy-store'
import './App.css'
import {Route, Link} from 'react-router-dom'
import FolderList from './FolderList'
import NoteList from './NoteList'
import NotePage from './NotePage'
import homePage from './homePage'

class App extends Component{
  constructor(props){
    super(props);
    this.state= {
      selectedFolder: "",
      selectedNote: ""
    }
  }

  render() {
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
               console.log(props.match)
               return <NotePage />
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
