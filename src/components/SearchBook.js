import React from 'react'
import * as BooksAPI from './../BooksAPI'
import BookList from './BookList';

class SearchBook extends React.Component {

  state = {
    searchTerm: "",
    searchBooks: []
  }

  handleSearch = (event) => {
    console.log(event.target.value);
    
    this.setState({ searchBooks: [] })
    
    this.setState({
      searchTerm: event.target.value
    })

    if (event.target.value !== "") {
    
      BooksAPI.search(this.state.searchTerm).then(res => {
        console.log(res);
        
        if (res !== undefined) {
          // change the shelf value if the book is already in the bookshelf
          res.forEach(element => {
            let book = this.props.books.filter( (b) => b.id === element.id )
            element.shelf = book[0] !== undefined ? book[0].shelf : "none"
          });

          this.setState({ searchBooks: res })
        }               
        
        
      })
    }    
  }

  render(){
    return(
      <div className="search-books-input-wrapper">
      {/*
        NOTES: The search from BooksAPI is limited to a particular set of search terms.
        You can find these search terms here:
        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
        you don't find a specific author or title. Every search is limited by search terms.
      */}

        <input onChange={this.handleSearch} value={this.state.searchTerm} type="text" placeholder="Search by title or author"/>

        <BookList updateBook={this.props.onUpdateBook} books={this.state.searchBooks} />

      </div>
    )
  }
}

export default SearchBook