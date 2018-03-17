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

### Obligatory

1.  "print a message in the result that `no result found` if there are `empty` result, this will give appropriate feedback to user", "You should handle the case when there is error in API call"

* done+

### Suggestions

1.  "Currently, the result on the new shelf is reflected with some delay since it is updated when update API completes. What you can do is change the state of the books locally before making an API request to show an instant result."

* done, but this quick fix takes more lines than the final state change, and results in a render that is quickly followed by a book shuffle... So I don't think I'm doing it the best way. I could easily sort all sets in the same way to avoid the reshuffle, but am more concerned with execution efficiency. I would love to hear your thoughts on whether there is a more efficient means of changing one member of the state array?

2.  "If the component doesn't make use of state and lifecycle methods, they should be converted to stateless components. To read more about why you should do that refer to https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc"

* done for: BookListings, BookShelves

3.  "You can use placeholder image for books that don't have thumbnail in API response"

* done

4.  "You should also create a route to handle 404 page not found error"

* done

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

## Original code

I originally started this work in 2017. Then, due to a paid assignment that was taking around 70 hours per week, I had to postpone and shift to a later cohort. On 12 March I was transferred to the 22 February cohort. Seeing that my deadline was 18 March, I initially leaned heavily on my [previous work](https://github.com/Aqueum/UR-MyReadS) but retyped it all - unfortunately that work was undocumented, that will teach me... Please note that a github user is allowed only one fork, hence the starer code in this case had to be detached from the original repo.

# Contributing

This is an assessed project, so I'd probably get in trouble for accepting external input.

# Code Status

Can Udacity add a badge here..?

# License

This is an assessed project, based on the starter code referred to above, udacidy don't list their license, hence I can't either. Please assume all work is copyrighted with all rights resevred, but feel free to [contact me](http://www.aqueum.com/contact/)
if you have any questions.
