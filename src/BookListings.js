import React from 'react';
import BookMove from './BookMove';

/**
 * @description display a graphical list of books
 * with book cover image, title & author
 * optionally filtered by shelf
 * @param {array} books - the set of books to be displayed
 * @param {string} shelf - optionaly which shelf's books
 * are to be displayed
 * @param {function} onChangeShelf - function to change a book's shelf
 */
const BookListings = ({ books, shelf, onChangeShelf }) => {
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
                        : `http://via.placeholder.com/128x193/000000/ffffff?text=${encodeURIComponent(
                            book.title
                          )}` // concept via https://udacity-react.slack.com/team/U8Y5SFRDK from https://udacity-react.slack.com/archives/C5T90A6TS/p1519415232000062?thread_ts=1519409599.000218&cid=C5T90A6TS
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
};

export default BookListings;
