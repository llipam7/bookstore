import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BookType, SingleBookType, getBook } from '../../services/bookService'
import  './styles.css'

export const BookItem = () => {
  const { bookId } = useParams()
  const [book, setBook] = useState<SingleBookType>({} as SingleBookType)
  // const title = book.title.toUpperCase()

  useEffect(() => {
    bookId && getBook(bookId).then(res => setBook(res))
  }, [bookId])

  return (
    <div className='singleBook'>
      <h1>{
        book.title
      }</h1>
      <div className='aboutBook'>
        <div className='image'>
          <img src={book.image} alt={book.title} />
        </div>
        <div className='properties'>
          <div className='priceAndRating'>
            <h2>{book.price}</h2>
            <div>
              {book.rating}
            </div>
          </div>
          <p>{`Author: ${book.authors}`}</p>
          <p>{`Publisher: ${book.publisher}`}</p>
          <p>{`Year: ${book.year}`}</p>
          <button>ADD TO CART</button>
        </div>
      </div>
      <h5>{`Description ${book.desc}`}</h5>
    </div>
  )
}