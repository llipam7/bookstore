import { BookType } from "../../services/bookService";
import { BooksActionType, BooksStateType } from "./types";

const initialValue: BooksStateType = {                  // необходимо, чтобы состояние не проверять на null и undeffined
  list: []
}

export const BooksReducer = ( state: BooksStateType = initialValue, action: BooksActionType): BooksStateType => {
  switch ( action.type ) {
    case 'LOAD_BOOKS':
      return {
        list: action.payload as BookType[]
      }
  
    default:
      return state
  }
}