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

  mapShelves = newBooks => {
    newBooks.map(
      book =>
        book.id === this.state.books.id
          ? (book.id = this.state.books.id)
          : (book.id = 'none')
    );
  };

  updateQuery = query => {
    this.setState({ query });
    query === ''
      ? this.setState({ foundBooks: [] })
      : BooksAPI.search(query).then(foundBooks => {
          this.setState({ foundBooks: this.mapShelves(foundBooks) });
        });
  };

  render() {
    const { books, foundBooks, query } = this.state;
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
              books={foundBooks}
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
