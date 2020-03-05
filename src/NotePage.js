import React, { Component } from 'react'
import './Note.css'
import {Link} from 'react-router-dom'
import dummy from './dummy-store'


class NotePage extends Component{

  

    render(props){
    

        return(
            <div>
                <div className="noteContents">
                    <div>
                        <h2>{this.props.noteId}</h2>
                        <div className="lastModified">Date Modified on {this.props.noteInfo.name}</div>
                    </div>
                    <button>Delete Note</button>
                </div>
            </div>
        )
    }
}

export default NotePage;

