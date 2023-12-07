import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineAim } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
const BooksTable = ({books}) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
            <thead>
                <tr>
                    <th className='border border-slate-600 rounded-md'>No</th>
                    <th className='border border-slate-600 rounded-md'>Title</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>Operations</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book, index) => (
                    <tr key={book._id} className='h-8'>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {index + 1}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {book.title}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{book.author}</td>
                        <td className='border border-slate-700 rounded-md text-center max-md-hidden'>
                            {book.publishYear}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center '>
                            <Link to={`/books/details/${book._id}`}>
                                <BsInfoCircle className='text-2l text-green-800'/>
                            </Link>
                            <Link to={`/books/edit/${book._id}`}>
                                <AiOutlineAim className='text-2xl text-yellow-600' />
                            </Link>
                            <Link to={`/books/delete/${book._id}`}>
                                <MdOutlineDelete className='text-2xl text-red-600' />
                            </Link>
                        </td>
                    </tr>
                ))}

            </tbody>

        </table>
  )
}

export default BooksTable