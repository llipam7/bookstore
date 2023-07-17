import { BookType } from '../../services/bookService'
import { AddToCartActionType } from './types'

export const AddToCartAction = (book: BookType): AddToCartActionType => {
  return {
    type: 'ADD_TO_CART',
    payload: book
  }
}