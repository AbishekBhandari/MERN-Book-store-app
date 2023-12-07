import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineAim } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import React from 'react';
import BookSingleCard from './BookSingleCard';


const BooksCard = ( {books }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {books.map((book) => (
            <BookSingleCard key={book._id} book={book}/>

        ))}
    </div>
  )
}

export default BooksCard