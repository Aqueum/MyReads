import React, { Component } from 'react';
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
    return <div className="app" />;
  }
}

export default BooksApp;
