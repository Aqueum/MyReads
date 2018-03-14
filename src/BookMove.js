import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class BookMove extends Component {
  changeShelf = something => {
    console.log('hmm');
  };
  render() {
    const { book } = this.props;
    const shelf = book.shelf;
    return (
      <div className="book-shelf-changer">
        <select value={shelf} onChange={event => BooksAPI.update(book, shelf)}>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookMove;
