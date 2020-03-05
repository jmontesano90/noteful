import React, { Component } from 'react'
import './Note.css'
import {Link} from 'react-router-dom'
import dummy from './dummy-store'


class NotePage extends Component{

  

    render(props){

        const note = dummy.find(n =>
            n.notes.id === props.match.params.noteId
          );        

        return(
            <div>
                <div className="noteContents">
                    <div>
                        <h2>{note.notes.id}</h2>
                        <div className="lastModified">Date Modified on {this.props.date}</div>
                    </div>
                    <button>Delete Note</button>
                </div>
            </div>
        )
    }
}

export default NotePage;