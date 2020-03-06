import React, { Component } from 'react'
import './FolderSelected.css'
import dummy from './dummy-store'
import {Link} from 'react-router-dom'

class FolderSelected extends Component {

        render(props){

            if (!this.props.folder){return "Loading"}
        return(
            <div className='sideBar2'>
                    <h3>{this.props.folder.name}</h3>
                    <br />
                    <div><Link to="/">Go Back</Link>
                </div>
            </div>
        )
}
}

export default FolderSelected;

