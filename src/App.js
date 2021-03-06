import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import BookShelves from './BookShelves';
import BookSearch from './BookSearch';
import * as BooksAPI from './BooksAPI';
import './App.css';

/**
 * @classdesc A book shelf single page web app
 * that allows users to search for books
 * and assign them to shelves depending on whether they
 * (1) are currently reading,
 * (2) want to read, or
 * (3) have already read the book
 * @author Martin Currie http://martin.aqueum.com
 * @borrows udacity starter code from
 * https://github.com/udacity/reactnd-project-myreads-starter
 * @copyright Martin Currie 2017-18 after udacity 2017
 * all rights reserved
 * @todo
 * 1. Add error handling
 * (a) for search terms not included in
 * https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
 * (b) to overcome issue where deleting search term
 *     too rapidly leaves some book results
 * 2. Add waiting indication, like a spinner
 * 3. Add book details when book clicked
 * 4. Add book rating capability
 * 5. Restyle
 */

class BooksApp extends Component {
  state = {
    books: [],
    foundBooks: [],
    query: ''
  };

  /**
   * @function when the component mounts download the books
   * from udacity's server and set them to books state
   */
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  /**
   * @function change the shelf of a book
   * @param {object} book - the book whose shelf is to be changed
   * @param {string} shelf - the shelf the book is to be moved to, options
   * 1 currentlyReading
   * 2 wantToRead
   * 3 read
   * 4 none
   */
  changeShelf = (book, shelf) => {
    // quickly refresh local state
    let newBooks = [];
    for (let vol of this.state.books) {
      let volb = vol;
      if (vol['id'] === book['id']) {
        volb['shelf'] = shelf;
      }
      newBooks.push(volb);
    }
    this.setState({ books: newBooks });
    // update database and refresh local state
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll()
        .then(books => this.setState({ books }))
        .then(foundbooks =>
          this.setState({ foundBooks: this.mapShelves(this.state.foundBooks) })
        );
    });
  };

  /**
   * @function adds the shelves of existing books to newly found books
   * assigns books not currently on a shelf to the 'none' "shelf"
   * @param {array} foundBooks - the set of newly found books
   */
  mapShelves = foundBooks => {
    let shelvedBooks = foundBooks.map(book => {
      let foundShelf = 'none';
      for (let gotBook of this.state.books) {
        if (gotBook['id'] === book['id']) {
          foundShelf = gotBook['shelf'];
        }
      }
      book['shelf'] = foundShelf;
      return book;
    });
    return shelvedBooks;
  };

  /**
   * @function searches for the query in the udacity server
   * sets the foundBooks to an empty array if no query,
   * sets the foundBooks to the query string (for later error handling)
   * if the result's length is 0 or undefined,
   * sets the foundBooks to the result array of books otherwise
   * @param {string} query - the search string
   * note that this only workds for search terms included in
   * https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
   */
  updateQuery = query => {
    this.setState({ query });
    query === ''
      ? this.setState({ foundBooks: [] })
      : BooksAPI.search(query).then(foundBooks => {
          if (foundBooks.length === undefined || 0) {
            this.setState({ foundBooks: query });
          } else {
            this.setState({ foundBooks: this.mapShelves(foundBooks) });
          }
        });
  };

  /**
   * @function show the BookShelves page if the URL is "/"
   * show the BookSearch page if the URL is "/search"
   */
  render() {
    const { books, foundBooks, query } = this.state;
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <BookShelves books={books} onChangeShelf={this.changeShelf} />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <BookSearch
                books={foundBooks}
                query={query}
                onChangeShelf={this.changeShelf}
                onUpdateQuery={this.updateQuery}
              />
            )}
          />
          <Route
            exact
            path="*" // inspired by https://stackoverflow.com/a/37491381
            render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1> 404: Page not found </h1>
                </div>
                <div className="bookshelf-books">
                  <p> come here often? </p>
                  <a href="http://www.aqueum.com/contact/">
                    let us know there's a problem
                  </a>
                </div>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
