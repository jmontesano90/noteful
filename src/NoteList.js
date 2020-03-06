import React, { Component } from 'react'
import Note from './Note'
import './NoteList.css'
import dummy from './dummy-store'

class NoteList extends Component{

    render(){
        if (!this.props.notes){return "Loading"}
        return(
            <div className="listNote">
                {this.props.notes.map((note, index) =>
                    <Note key={this.props.notes[index].id} date={this.props.notes[index].modified} name={this.props.notes[index].name} id={this.props.notes[index].id}/>)}
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