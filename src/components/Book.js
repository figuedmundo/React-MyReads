import React from 'react'

class Book extends React.Component {

    state = {
        book: this.props.book
    }

    updateBook = (newShelve) => {
        let newBook = this.state.book
        newBook.shelf = newShelve
        this.props.onUpdateBook(newBook)
    }

    render(){
        return (

        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("' + this.state.book.imageLinks.thumbnail + '")' }}></div>
            <div className="book-shelf-changer">
                <select value={this.state.book.shelf}>
                    <option value="disabled" disabled>Move to...</option>
                    <option  onClick={() => this.updateBook("currentlyReading")} value="currentlyReading">Currently Reading</option>
                    <option  onClick={() => this.updateBook("wantToRead")}  value="wantToRead">Want to Read</option>
                    <option  onClick={() => this.updateBook("read")}  value="read">Read</option>
                    <option  onClick={() => this.updateBook("none")} value="none">None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{this.state.book.title}</div>
            <div className="book-authors">{this.state.book.authors[0]}</div>
        </div>
        )
    }
}

export default Book

