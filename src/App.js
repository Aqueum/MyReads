import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BookShelves from './BookShelves';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route exact path="/" render={() => <BookShelves books={books} />} />
      </div>
    );
  }
}

export default BooksApp;
