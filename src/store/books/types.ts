import { BookType } from '../../services/bookService'

export type BooksStateType = {
  list: BookType[]
}

export type BooksActionType = {
  type: string
  payload: BookType[] | string
}