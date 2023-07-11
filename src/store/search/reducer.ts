import { BookType, ResponseType } from "../../services/bookService";
import { SearchActionType, SearchStateType } from "./types";

const initialValue: SearchStateType = {
  search: '',
  count: 0,
  list: []
}

export const SearchReducer = (state: SearchStateType = initialValue, action: SearchActionType): SearchStateType => {
  switch (action.type) {
    case "SET_SEARCH_VALUE": 
    return {
      ...state,       // паттерн debounce подгружает посты, только по окончанииввода поиска, а не постоянно по каждой букве
      search: action.payload as string
    }
    // case "LOAD_SEARCH_BOOKS":
    //   return {
    //     ...state,
    //     count: (action.payload as ResponseType).total,
    //     list: (action.payload as ResponseType).books
    //   }
    case "CLEAR_SEARCH":
      return {
        ...initialValue
      }
    default:
      return state
  }
}