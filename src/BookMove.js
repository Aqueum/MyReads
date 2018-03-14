import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class BookMove extends Component {
  render() {
    const { book } = this.props;
    const shelf = book.shelf;
    return (
      <div className="book-shelf-changer">
        <select value={shelf} onChange={event => BooksAPI.update(book, shelf)}>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="Currently Reading">Currently Reading</option>
          <option value="Want to Read">Want to Read</option>
          <option value="Read">Read</option>
          <option value="None">None</option>
        </select>
      </div>
    );
  }
}

export default BookMove;
