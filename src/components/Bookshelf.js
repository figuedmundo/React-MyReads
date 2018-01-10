import React from 'react'
import BookList from './BookList';



const Bookshelf = (props) => (

    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <BookList updateBook={props.onUpdateBook} books={props.books} />
    </div>
 
);

export default Bookshelf
