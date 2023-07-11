import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.scss'
import { useParams } from 'react-router-dom'
import { AppDispatch, AppState } from '../../store'
import React, { useEffect } from 'react'


export const SearchBooks = () => {
  const books = useSelector((state: AppState) => state.search.list)

  return (
    <>
      {
        books.map(book => (
          <div key={book.isbn13} className='postInSearch'>
              <div className='imageOfPost'>
                <img className={styles.image} src={book.image} />
              </div>
              <div className='postText'>
                <p className='date'>{book.title}</p>
                <h2 className='title'>{book.title}</h2>
              </div>
          </div>
        ))
      }
    </>
  )
}
