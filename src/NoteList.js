import React, { Component } from 'react'
import Note from './Note'
import './NoteList.css'
import dummy from './dummy-store'

class NoteList extends Component{

    render(){
        return(
            <div className="listNote">
                {dummy.notes.map(note =>
                    <Note key={note.id} date={note.modified} name={note.name} id={note.id}/>)}
            </div>
        )
    }
}

export default NoteList;

// {dummy.folders.map(folder =>
//     <li key={folder.id}>
//         <Link to={`/folder/${folder.id}`}>
//             {folder.name}
//         </Link>
//     </li>)}