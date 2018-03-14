import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookMove extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  };
  render() {
    const { book, onChangeShelf } = this.props;
    const shelf = book.shelf;
    return (
      <div className="book-shelf-changer">
        <select
          value={shelf}
          onChange={event => onChangeShelf({ book }, { shelf })}
        >
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookMove;
