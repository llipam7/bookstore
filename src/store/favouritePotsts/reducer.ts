import { BookInCartActionType, CartWithBooksStateType } from "./types";

const initialValue: CartWithBooksStateType = {
    list: []
}

export const AddBookReduser = (state: CartWithBooksStateType = initialValue, action: BookInCartActionType): CartWithBooksStateType => {
    switch (action.type) {
        case 'ADD_BOOK_TO_CART':
            return {
                list: [...state.list, action.payload]
            }
        default:
            return state;
    }
}