import React, { Component } from 'react'
import './FolderList.css'
import dummy from './dummy-store'
import {Link} from 'react-router-dom'

export default function FolderList() {

        return(
            <div className='sideBar'>
                <ul>
                    {dummy.folders.map(folder =>
                        <li key={folder.id}>
                            <Link to={`/folder/${folder.id}`} >
                                {folder.name}
                            </Link>
                        </li>)}
                </ul>

            </div>
        )
}
