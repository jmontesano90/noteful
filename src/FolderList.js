import React, { Component } from 'react'
import './FolderList.css'
import {Link} from 'react-router-dom'
import ApiContext from './ApiContext'

class FolderList extends Component{


    //class NoteList extends Component
    static contextType = ApiContext;
render(){
        return(
            <div className='sideBar'>
                <ul>
                    {this.context.folders.map(folder =>
                        <li key={folder.id}  >
                            <Link to={`/folder/${folder.id}`} >
                                {folder.name}
                            </Link>
                        </li>)}
                </ul>

            </div>
        )
}
}

export default FolderList
//style={{backgroundColor: this.props.folderSelected === folder.id ? "gray" : "white"}}