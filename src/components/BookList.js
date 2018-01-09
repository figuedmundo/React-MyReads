import React from 'react'
import Book from './Book';

const BookList = (props) => (

<div className="bookshelf-books">
    <ol className="books-grid">  

        {props.books.map((book) => (
            <li key={book.id}>
                <Book book={book} />
            </li>
        ))}

    </ol>
</div>
 
);

export default BookList
