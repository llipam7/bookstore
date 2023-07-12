import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.css'
import { useSelector } from 'react-redux'
import { selectBooks } from '../../store/books/selectors'
import { useDispatch } from 'react-redux'
import { loadBooks, setBooks } from '../../store/books/actions'
import { AppDispatch } from '../../store'

export const AllBooks = () => {
  const books = useSelector(selectBooks)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    // getBooks().then(res => dispatch(setBooks(res)))
    dispatch(loadBooks())
  }, [])

  return (
    <div className='.list'>
      {
        books.list.map(book => (
          <div key={book.isbn13} className={styles.book}>
            <h2>
              <Link to={`/books/${book.isbn13}`}>{book.title}</Link>
            </h2>
            <img src={book.image} alt={`THERE SHOULD HAVE BEEN THE BOOK "${book.title}"`} />
            <p>{book.price}</p>
          </div>
        ))
      }
    </div>
  )
}