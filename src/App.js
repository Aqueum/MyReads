import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BookShelves from './BookShelves';
import BookSearch from './BookSearch';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends Component {
  state = {
    books: [],
    foundBooks: [],
    resultBooks: [],
    query: ''
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then(books => this.setState({ books }));
    });
  };

  mapShelves = foundBooks => {
    foundBooks.map(book => {
      let foundShelf = 'none';
      for (var gotBook of this.state.books) {
        if (gotBook['id'] === book['id']) {
          foundShelf = gotBook['shelf'];
        }
      }
      book['shelf'] = foundShelf;
      return book;
    });
    return foundBooks;
  };

  updateQuery = query => {
    this.setState({ query });
    query === ''
      ? this.setState({ resultBooks: [] })
      : BooksAPI.search(query).then(foundBooks => {
          this.setState({ resultBooks: this.mapShelves(foundBooks) });
        });
  };

  render() {
    const { books, resultBooks, query } = this.state;
    return (
      <div className="app">
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
              books={resultBooks}
              query={query}
              onChangeShelf={this.changeShelf}
              onUpdateQuery={this.updateQuery}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
