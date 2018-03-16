import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookListings from './BookListings';

/**
 * @classdesc display a booksearch page, where books are shown
 * if they match the search term query
 * @param {array} books - the set of found books to be displayed
 * @param {string} query - the search term
 * @param {function} onChangeShelf - function to change a book's shelf
 * @param {function} onUpdateQuery - function to search for books
 */
class BookSearch extends Component {
  render() {
    const { books, query, onChangeShelf, onUpdateQuery } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={event => onUpdateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookListings books={books} onChangeShelf={onChangeShelf} />
        </div>
      </div>
    );
  }
}

export default BookSearch;
