import React, { Component } from 'react'
import './Note.css'
import {Link} from 'react-router-dom'


class Note extends Component{

    render(){
        return(
            <div>
                <div className="noteContents">
                    <div>
                        <Link to={`/note/${this.props.id}`}>{this.props.name}</Link>
                        <div className="lastModified">Date Modified on {this.props.date}</div>
                    </div>
                    <button>Delete Note</button>
                </div>
            </div>
        )
    }
}

export default Note;