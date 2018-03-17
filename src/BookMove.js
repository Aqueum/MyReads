import React from 'react';

/**
 * @classdesc display a dropdown list of shelves
 * clicking on a shelf name moves the book to that shelf
 * @param {object} book - the books that the dropdown relates to
 * @param {function} onChangeShelf - function to change a book's shelf
 */
const BookMove = ({ book, onChangeShelf }) => {
  return (
    <div className="book-shelf-changer">
      <select
        value={book.shelf}
        onChange={event => onChangeShelf(book, event.target.value)}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookMove;
