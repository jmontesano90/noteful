import React, { Component } from "react";

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
      headers: new Headers(),
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
      </form>
    );
  }
}

export default NewFolder;
