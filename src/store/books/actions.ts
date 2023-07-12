import { AppThunk } from '..'
import { BookType, getBooks } from '../../services/bookService'
import { BooksActionType } from './types'

export const setBooks = ( books: BookType[] ): BooksActionType => {
  return {
    type: 'LOAD_BOOKS',
    payload: books
  }
}

export const loadBooks = () :AppThunk => {
  return (dispatch, getState) => {
    getBooks().then(books => dispatch(setBooks(books)))
  }
}