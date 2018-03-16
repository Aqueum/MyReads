import React, { Component } from 'react';
import BookMove from './BookMove';

class BookListings extends Component {
  render() {
    const { books, shelf, onChangeShelf } = this.props;

    let showingBooks;
    if (shelf) {
      showingBooks = books.filter(book => book.shelf === shelf);
    } else {
      showingBooks = books;
    }

    return (
      <ol className="books-grid">
        {showingBooks !== undefined &&
          showingBooks.map(book => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    alt={book.title + ' book cover art'}
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${
                        book.imageLinks !== undefined
                          ? book.imageLinks.smallThumbnail
                          : ''
                      })`
                    }}
                  />
                  <BookMove book={book} onChangeShelf={onChangeShelf} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
          ))}
      </ol>
    );
  }
}

export default BookListings;
