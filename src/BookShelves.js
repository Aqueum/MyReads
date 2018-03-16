import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookListings from './BookListings';

/**
 * @constant a set of shelf name pairs
 * name - human readable
 * id - machine readable
 */
const shelfNames = [
  {
    name: 'Currently Reading',
    id: 'currentlyReading'
  },
  {
    name: 'Want to Read',
    id: 'wantToRead'
  },
  {
    name: 'Read',
    id: 'read'
  }
];

/**
 * @classdesc displays a set of three bookshelves containing books
 * that the user is reading, wanting to read, or has read
 * @param {array} books - the set of books to be displayed
 * @param {function} onChangeShelf - function to change a book's shelf
 */
class BookShelves extends Component {
  render() {
    const { books, onChangeShelf } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelfNames.map(shelfName => (
            <div className="bookshelf" key={shelfName.id}>
              <h2 className="bookshelf-title">{shelfName.name}</h2>
              <div className="bookshelf-books">
                <BookListings
                  books={books}
                  shelf={shelfName.id}
                  onChangeShelf={onChangeShelf}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BookShelves;
