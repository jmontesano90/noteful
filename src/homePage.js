import React, { Component } from 'react'
import './homePage.css'
import FolderList from './FolderList'
import NoteList from './NoteList'

class homePage extends Component{

    render(){
        return(
            <main className="psuedoMain">
                <FolderList />
                <NoteList />
            </main>
        )
    }
}

export default homePage;