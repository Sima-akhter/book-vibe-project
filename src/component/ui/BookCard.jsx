import React from 'react'
import { FaStarOfDavid } from 'react-icons/fa';
const BookCard = ({book}) => {
  return (
    <div>
        <div className="card bg-base-100  shadow-sm">
  <figure className='p-6'>
    <img
      src={book.image}
      alt={book.bookName}  className='rounded-xl h-[250px]'/>
  </figure>
  <div className="card-body">
   
     
      <div className='flex items-center gap-2'>
        {book.tags.map((tag, ind) =>(
<div key={ind} className="badge text-green-500 bg-green-100 font-bold text-lg">{tag}</div>
      )) }
      </div>
   
     <h2 className='card-title text-2xl'>{book.bookName}</h2>
    <p className='font-semibold text-lg'>{book.author}</p>
    <p></p>
    <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4">
      <div className="badge badge-outline">{book.category}</div>
      <div className="badge badge-outline">{book.rating} <FaStarOfDavid /></div>
    </div>
  </div>
</div>
    </div>
  )
}

export default BookCard