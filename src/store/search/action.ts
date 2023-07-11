import React from "react"
import { AppThunk } from ".."
import { BookType, ResponseType, getBooks } from '../../services/bookService'
import { SearchActionType } from "./types"

export const clearSearchAction = () : SearchActionType => {
  return {
    type: "CLEAR_SEARCH"
  }
}

const setBooks = (books: BookType[]) : SearchActionType => {
  return {
    type: "LOAD_SEARCH_POSTS",
    payload: books
  }
}

export const loadSearchBooksAction = (): AppThunk => {
  return (dispatch, getState) => {
    const search = getState().search.search
    getBooks()
      .then(books => dispatch(setBooks(books)))
  }
}

export const setSearchValueAction = (search: string) : AppThunk => {
  return (dispatch) => {
    dispatch ({
      type: "SET_SEARCH_VALUE",
      payload: search
    })
    if (search) {
      dispatch(loadSearchBooksAction())     // запись идентична строкам 37-38
    } else {
      dispatch(clearSearchAction())
    }
  }  
}
