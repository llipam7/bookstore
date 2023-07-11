import { BookType, ResponseType } from "../../services/bookService"

export type SearchStateType = {
  search: string
  count: number
  list: BookType[]
}

export type SearchActionType = {
  type: string
  payload?: BookType[] | string
}