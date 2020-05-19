import React, { Component } from 'react';
import ValidationError from './ValidationError';
import './NewFolder.css';
import ApiContext from './ApiContext';
import { API_ENDPOINT } from './config';

class NewFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folderName: {
        value: '',
        touched: false,
      },
    };
  }

  static contextType = ApiContext;
  updateName(name) {
    this.setState({ folderName: { value: name, touched: true } });
  }

  handleSubmit(event) {
    event.preventDefault();
    const folderName = this.state.folderName.value;
    console.log('Folder name: ', folderName);

    fetch(`${API_ENDPOINT}/folders`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ name: folderName }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success: ', data);
        this.context.addFolder(data);
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
    this.props.history.push('/');
  }

  validateFolderName() {
    const name = this.state.folderName.value.trim();
    if (name.length === 0) {
      console.log('Name is required');
      return 'Name is required';
    } else if (name.match('poop')) {
      return 'No potty humo(u)r';
    }
  }

  render() {
    return (
      <div className='folderContainer'>
        <form className='newFolder' onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor='folderName' className='folderName'>
            Name of the new Folder?
          </label>
          <input
            type='text'
            className='folderInput'
            name='folderName'
            id='folderName'
            onChange={(e) => this.updateName(e.target.value)}
          />
          {this.state.folderName.touched && (
            <ValidationError
              className='errorMessage'
              message={this.validateFolderName()}
            />
          )}
          <button
            className='submitButton'
            type='submit'
            disabled={this.validateFolderName()}
          >
            Submit your note mortal
          </button>
        </form>
      </div>
    );
  }
}

export default NewFolder;
