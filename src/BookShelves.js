import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookListings from './BookListings';

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
class BookShelves extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  };
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
      </div>
    );
  }
}

export default BookShelves;
