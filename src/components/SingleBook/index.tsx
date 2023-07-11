import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BookType, getBook } from '../../services/bookService'
import styles from './styles.module.scss'

export const BookItem = () => {
  const { bookId } = useParams()
  const [book, setBook] = useState<BookType>({} as BookType)

  useEffect(() => {
    bookId && getBook(bookId).then(res => setBook(res))
  }, [bookId])

  return (
    <div className={styles.book}>
      <h2>{book.title}</h2>
      <img src={book.image} alt={book.title} />
      <p>{book.price}</p>
    </div>
  )
}