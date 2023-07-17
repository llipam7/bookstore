import { BookType } from "../../services/bookService"
import { BookInCartActionType as BookInCartActionType } from "./types";


export const addToCartAction = (book: BookType): BookInCartActionType => {
    return {
        type: 'ADD_BOOK_TO_CART',
        payload: book
    }
}