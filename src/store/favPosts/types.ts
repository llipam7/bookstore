import { BookType } from '../../services/bookService'

export type CartStateType = {
  list: BookType[]
}

export type AddToCartActionType = {
  type: string
  payload: BookType // string - id поста
}