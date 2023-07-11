import { AppThunk } from '..'
import { BookType, getBooks } from '../../services/bookService'
import { BooksActionType } from './types'

export const setBooks = ( posts: BookType[] ): BooksActionType => {
  return {
    type: 'LOAD_POSTS',
    payload: posts
  }
}

export const loadBooks = () :AppThunk => {
  return (dispatch, getState) => {
    getBooks().then(res => dispatch(setBooks(res)))
  }
}