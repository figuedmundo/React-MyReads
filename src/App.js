import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './components/Bookshelf'
import SearchBook from './components/SearchBook';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    myReads: []
  }

  updateBook = (book) => {
    console.log(book);
    
    let books = this.state.myReads.filter((c) => c.id !== book.id)
    books.unshift(book)

    this.setState({
      myReads: books
    })

    BooksAPI
      .update(book, book.shelf)
      .then(result => {
        console.log(result);      
      })   
  }

  componentDidMount() {
    BooksAPI.getAll().then(myReads => {
      this.setState({ myReads })
    })
  }
  
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>

                <SearchBook  onUpdateBook={this.updateBook} />

            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>My Reads - Edmundo</h1>
            </div>

            <div className="list-books-content">
              <div>
                
              <Bookshelf onUpdateBook={this.updateBook} title={"Currently Reading"} books={this.state.myReads.filter( (book) => book.shelf === "currentlyReading")}/>
              <Bookshelf  onUpdateBook={this.updateBook} title={"Want to Read"} books={this.state.myReads.filter( (book) => book.shelf === "wantToRead")}/>
              <Bookshelf  onUpdateBook={this.updateBook} title={"Read"} books={this.state.myReads.filter( (book) => book.shelf === "read")}/>

              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
