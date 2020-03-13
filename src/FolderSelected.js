import React, { Component } from "react";
import "./FolderSelected.css";
import { Link } from "react-router-dom";
import { findNote, findFolder } from "./notes-helpers";
import ApiContext from "./ApiContext";

class FolderSelected extends Component {
  static contextType = ApiContext;
  render(props) {
    const noteInfo = findNote(
      this.context.notes,
      this.props.match.params.noteId
    );
    const folder = noteInfo
      ? findFolder(this.context.folders, noteInfo.folderId)
      : {};

    return noteInfo ? (
      <div className="sideBar2">
        <h3>{folder.name}</h3>
        <div>
          <Link to="/">Go Back</Link>
        </div>
      </div>
    ) : (
      "Loading"
    );
  }
}

export default FolderSelected;
