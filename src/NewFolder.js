import React, { Component } from "react";
import ValidationError from "./ValidationError";

class NewFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folderName: {
        value: "",
        touched: false
      }
    };
  }

  updateName(name) {
    this.setState({ folderName: { value: name, touched: true } });
  }

  handleSubmit(event) {
    event.preventDefault();
    const folderName = this.state.folderName.value;
    console.log("Folder name: ", folderName);

    fetch("http://localhost:9090/folders", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ name: folderName })
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success: ", data);
      })
      .catch(error => {
        console.error("Error: ", error);
      });
  }

  validateFolderName() {
    const name = this.state.folderName.value.trim();
    if (name.length === 0) {
      console.log("Name is required");
      return "Name is required";
    } else if (name.match("poop")) {
      return "No potty humo(u)r";
    }
  }

  render() {
    return (
      <form className="newFolder" onSubmit={e => this.handleSubmit(e)}>
        <label htmlFor="folderName">Name of the new Folder?</label>
        <input
          type="text"
          className="folderInput"
          name="folderName"
          id="folderName"
          onChange={e => this.updateName(e.target.value)}
        />
        {this.state.folderName.touched && (
          <ValidationError message={this.validateFolderName()} />
        )}
        <button type="submit" disabled={this.validateFolderName()}>
          Submit your note mortal
        </button>
      </form>
    );
  }
}

export default NewFolder;
