import React, { Component } from 'react';

class BookListings extends Component {
  render() {
    return (
      <ol className="books-grid">
        {this.props.books.map(book => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                  }}
                />
              </div>
            </div>
          </li>
        ))}
      </ol>
    );
  }
}

export default BookListings;