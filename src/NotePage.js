import React, { Component } from 'react'
import './Note.css'
import {Link} from 'react-router-dom'
import dummy from './dummy-store'


class NotePage extends Component{

  

    render(props){
 
        if (!this.props.noteInfo){return "Loading"}
        return(
            <div>
                <div className="noteContents">
                    <div>
                        <h2>{this.props.noteInfo.name}</h2>
                        <div className="lastModified">Date Modified on {this.props.noteInfo.modified}</div>
                    </div>
                    <button>Delete Note</button>
                </div>
                <h3>{this.props.noteInfo.content}</h3>
            </div>
        )
    }
}

export default NotePage;

