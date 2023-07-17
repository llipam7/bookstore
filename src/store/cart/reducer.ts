import { AddToCartActionType, CartStateType } from "./types";

const initialValue: CartStateType = {
  list: []
}

export const CartReducer = (state: CartStateType = initialValue, action: AddToCartActionType): CartStateType => {
  switch (action.type) {
    case 'SET_CART':
      return {
        list: [...state.list, action.payload]
      }
    default:
      return state
  }
}