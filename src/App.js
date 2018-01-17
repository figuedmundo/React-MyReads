import React from 'react'
import { Link, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './components/Bookshelf'
import SearchBook from './components/SearchBook';

class BooksApp extends React.Component {
  state = {   
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

        <Route exact path="/" render={() => (
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
              <Link to="/search" >Add a book</Link>
            </div>
          </div>
        )}/>

        <Route path="/search" render={() => (

          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search" >Close</Link>

                <SearchBook  onUpdateBook={this.updateBook} books={this.state.myReads} />

            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>

        )} />        
        
      </div>
    )
  }
}

export default BooksApp
