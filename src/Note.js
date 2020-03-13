import React, { Component } from "react";
import "./Note.css";
import { Link } from "react-router-dom";
import ApiContext from "./ApiContext";

class Note extends Component {
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault();
    const noteId = this.props.id;
    console.log(noteId);
    console.log("hello?");

    fetch(`http://localhost:9090/notes/${noteId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) return res.json().then(e => Promise.reject(e));
        return res.json();
      })
      .then(() => {
        this.context.deleteNote(noteId);
        // allow parent to perform extra behaviour
      })
      .catch(error => {
        console.error({ error });
      });
  };

  render() {
    return (
      <div>
        <div className="noteContents">
          <div>
            <Link to={`/note/${this.props.id}`}>{this.props.name}</Link>
            <div className="lastModified">
              Date Modified on {this.props.date}
            </div>
          </div>
          <button onClick={this.handleClickDelete}>Delete Note</button>
        </div>
      </div>
    );
  }
}

export default Note;
