import React, { Component } from 'react';
import ApiContext from './ApiContext';
import './NewNote.css';
import ValidationError from './ValidationError';

class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: '',
        touched: false,
      },
      content: {
        value: '',
        touched: false,
      },
      folder: {
        value: '',
        touched: false,
      },
    };
  }

  static contextType = ApiContext;

  updateName(name) {
    this.setState({ name: { value: name, touched: true } });
  }

  updateContent(content) {
    this.setState({ content: { value: content, touched: true } });
  }

  updateFolder(folder) {
    this.setState({ folder: { value: folder, touched: true } });
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.name.value;
    console.log('Name: ', name);
    const content = this.state.content.value;
    console.log('Content: ', content);
    const folder = this.state.folder.value;
    console.log('Folder: ', folder);
    const note = {
      name: this.state.name.value,
      content: this.state.content.value,
      folderId: this.state.folder.value,
    };

    fetch('https://nameless-atoll-42362.herokuapp.com/api/notes', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ name: name, content: content, folderid: folder }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success: ', data);
        this.context.addNote(data);
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
    this.props.history.push('/');
  }

  validateName() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      console.log('Name is required');
      return 'Name is required';
    } else if (name.match('poop')) {
      return 'No potty humo(u)r';
    }
  }
  render() {
    return (
      <div className='noteContainer'>
        <form className='newNote' onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor='name' className='noteName'>
            Name of note?
          </label>
          <input
            type='text'
            name='name'
            id='name'
            onChange={(e) => this.updateName(e.target.value)}
          />
          {this.state.content.touched && (
            <ValidationError message={this.validateName()} />
          )}
          <label htmlFor='content' className='contentTitle'>
            Content of the note
          </label>
          <input
            type='text'
            name='content'
            id='content'
            className='contents'
            onChange={(e) => this.updateContent(e.target.value)}
          />
          <div className='folderSelectTitle'>
            Which folder do you want this note in?
          </div>
          <select
            id='folders'
            name='folders'
            onChange={(e) => this.updateFolder(e.target.value)}
          >
            {this.context.folders.map((folder) => (
              <option className='folderOptions' value={folder.id}>
                {folder.name}
              </option>
            ))}
          </select>
          <button type='submit' disabled={this.validateName()}>
            Submit your note mortal
          </button>
        </form>
      </div>
    );
  }
}

export default NewNote;
