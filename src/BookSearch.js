import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookListings from './BookListings';
import * as BooksAPI from './BooksAPI';

class BookSearch extends Component {
  state = {
    results: [{}],
    query: ''
  };

  updateQuery = query => {
    this.setState({ query: query });
    BooksAPI.search(this.state.query).then(results => {
      this.setState({ results });
    });
  };

  render() {
    const { query, results } = this.state;
    const { onChangeShelf } = this.props;

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
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {query !== '' && (
            <BookListings books={results} onChangeShelf={onChangeShelf} />
          )}
        </div>
      </div>
    );
  }
}

export default BookSearch;
