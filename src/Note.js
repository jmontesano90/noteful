import React, { Component } from 'react';
import './Note.css';
import { Link } from 'react-router-dom';
import ApiContext from './ApiContext';
import PropTypes from 'prop-types';
import { API_ENDPOINT } from './config';

class Note extends Component {
  static contextType = ApiContext;

  handleClickDelete = (e) => {
    e.preventDefault();
    const noteId = this.props.id;
    console.log(noteId);
    console.log('hello?');

    fetch(`${API_ENDPOINT}/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        this.context.deleteNote(noteId);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    const dateInfo = this.props.date
      ? `Date modified on ${this.props.date}`
      : '';
    return (
      <div>
        <div className='noteContents'>
          <div>
            <Link to={`/note/${this.props.id}`}>{this.props.name}</Link>
            <div className='lastModified'>{dateInfo}</div>
          </div>
          <button onClick={this.handleClickDelete}>Delete Note</button>
        </div>
      </div>
    );
  }
}

export default Note;

Note.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string,
};
