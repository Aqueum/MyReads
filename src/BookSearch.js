import React from 'react';
import { Link } from 'react-router-dom';
import BookListings from './BookListings';

/**
 * @description display a booksearch page, where books are shown
 * if they match the search term query
 * or an error message is shown if no results are found
 * @param {array} books - the set of found books to be displayed
 * @param {string} query - the search term
 * @param {function} onChangeShelf - function to change a book's shelf
 * @param {function} onUpdateQuery - function to search for books
 */
const BookSearch = ({ books, query, onChangeShelf, onUpdateQuery }) => {
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
        {typeof books !== 'object' ? (
          <div>
            <h2>No results found for '{books}'</h2>
            <p>Why not try:</p>
            <p>
              'Android', 'Art', 'Artificial Intelligence', 'Astronomy',
              'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography',
              'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics',
              'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design',
              'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas',
              'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First',
              'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer',
              'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri',
              'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage',
              'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting',
              'Philosophy', 'Photography', 'Poetry', 'Production',
              'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling',
              'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming',
              'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual
              Reality', 'Web Development', 'iOS'
            </p>
          </div>
        ) : (
          <BookListings books={books} onChangeShelf={onChangeShelf} />
        )}
      </div>
    </div>
  );
};

export default BookSearch;
