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
    console.log(this.state.searchTerm);
    
    this.setState({ searchBooks: [] })
    
    
    this.setState({
      searchTerm: event.target.value
    })

    BooksAPI.search(this.state.searchTerm).then(searchBooks => {

      searchBooks.forEach(element => {
        element.shelf = "none"
      });      

      this.setState({ searchBooks })
    })    
  }

  // updateBook = (book) => {
  //   console.log(book.shelf);
    
  //   BooksAPI.update(book, book.shelf).then(result => {
  //     console.log(result);      
  //   })
  // }

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

// const SearchBook = (props) => (
// );

export default SearchBook