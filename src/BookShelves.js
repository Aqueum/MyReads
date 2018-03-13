import React, { Component } from 'react';

const shelfNames = [
  { name: 'Currently Reading' },
  { name: 'Want to Read' },
  { name: 'Read' }
];
class BookShelves extends Component {
  render() {
    return (
      <div>
        <h1>MyReads</h1>
        {shelfNames.map(shelfName => (
          <div className="bookshelf" key={shelfName.name}>
            <h2 className="bookshelf-title">{shelfName.name}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default BookShelves;
