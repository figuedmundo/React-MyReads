import React from 'react'

class Book extends React.Component {

    state = {
        book: this.props.book
    }

    changeShelve = (newShelve) => {
        this.setState((newShelve) => ({
            book: this.state.book.shelf = newShelve
        }))
    }

    render(){
        return (

        <div className="book">
            <div className="book-top">
            {/* <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div> */}
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("' + this.props.book.imageLinks.thumbnail + '")' }}></div>
            <div className="book-shelf-changer">
                <select>
                <option value="none" disabled>Move to...</option>
                <option onClick={() => this.changeShelve("currentlyReading")} value="currentlyReading">Currently Reading</option>
                <option  value="wantToRead">Want to Read</option>
                <option  value="read">Read</option>
                <option value="none">None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">{this.props.book.authors[0]}</div>
        </div>
        )
    }
}

export default Book
