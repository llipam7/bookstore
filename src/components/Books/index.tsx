import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import { useSelector } from 'react-redux'
import { selectBooks } from '../../store/books/selectors'
import { useDispatch } from 'react-redux'
import { loadBooksAction, setBooksAction } from '../../store/books/actions'
import { AppDispatch } from '../../store'
import { BookType } from '../../services/bookService'
import { addToCartAction } from '../../store/favouritePotsts/action'

export const AllBooks = () => {
  const books = useSelector(selectBooks)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    // getBooks().then(res => dispatch(setBooks(res)))
    dispatch(loadBooksAction())
  }, [])

  const setCart = (book: BookType) => {
    dispatch(addToCartAction(book))
}

  return (
    <div className='list'>
      {
        books.list.map(book => (
          <div key={book.isbn13} className='book'>
            <Link to={`/books/${book.isbn13}`}>
            <img src={book.image} alt={`THERE SHOULD HAVE BEEN THE BOOK "${book.title}"`} />
            <h2>
              {book.title.toUpperCase()}
            </h2>
            </Link>
            <div className='price'>
              <p>{book.price}</p>
              <button onClick={() => setCart(book)}> 
                ADD TO CART
              </button> 
            </div>
          </div>
        ))
      }
    </div>
  )
}