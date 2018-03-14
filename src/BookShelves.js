import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookListings from './BookListings';

const shelfNames = [
  { name: 'Currently Reading' },
  { name: 'Want to Read' },
  { name: 'Read' }
];
class BookShelves extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  };
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelfNames.map(shelfName => (
            <div className="bookshelf" key={shelfName.name}>
              <h2 className="bookshelf-title">{shelfName.name}</h2>
              <div className="bookshelf-books">
                <BookListings
                  books={this.props.books}
                  shelf={shelfNames.name}
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
