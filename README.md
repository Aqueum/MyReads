# MyReads

* Udacity React - MyReads Project
* [Udacity React Nanodegree](https://eu.udacity.com/course/react-nanodegree--nd019)
* Martin Currie ([Aqueum](http://martin.aqueum.com)) - 16 March 2018

# Purpose & design

A book shelf single page web app using the React javascript library.

It allows users to search for books and assign them to shelves depending on whether they:

1.  are currently reading,
2.  want to read, or
3.  have already read
    the book.

# Getting Started

1.  fork, clone or download the project from [here](https://github.com/Aqueum/MyReads)
2.  navigate to the created MyReads folder
3.  `npm install`
4.  `npm install --save react-router-dom`
5.  `npm start`
6.  then play with webpage that should open at http://localhost:3000/

# Known issues

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## To do

1.  Add error handling for search terms not included in the above.
2.  Resolve issue where deleting search term too rapidly leaves some book results
3.  Please see App.cs @todo for the other items that I'd like to improve.
    Given time contraints due to an impending paid assignment, my intention is to pass all projects before returning for extra credit.

## Review suggestions

awaiting review

# Files

## Starter code

Lots of files from [udacity starter code](https://github.com/udacity/reactnd-project-myreads-starter)

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## App.js

The main app

## BookListings.js

see @classdesc in file for details

## BookMove.js

see @classdesc in file for details

## BookSearch.js

see @classdesc in file for details

## BookShelves.js

see @classdesc in file for details

## Index.js

the index file, to which I added a react router wrapper

# Contributing

This is an assessed project, so I'd probably get in trouble for accepting external input.

# Code Status

Can Udacity add a badge here..?

# License

This is an assessed project, based on the starter code referred to above, udacidy don't list their license, hence I can't either. Please assume all work is copyrighted with all rights resevred, but feel free to [contact me](http://www.aqueum.com/contact/)
if you have any questions.
