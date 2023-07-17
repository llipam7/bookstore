import { AppThunk } from '..'
import { BookType, getBooks } from '../../services/bookService'
import { BooksActionType } from './types'

export const setBooksAction = ( books: BookType[] ): BooksActionType => {
  return {
    type: 'LOAD_BOOKS',
    payload: books
  }
}

export const loadBooksAction = () :AppThunk => {
  return (dispatch, getState) => {
    getBooks()
      .then(books => dispatch(setBooksAction(books)))
  }
}