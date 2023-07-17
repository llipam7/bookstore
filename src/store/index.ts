import { configureStore, Action } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { CartReducer } from './cart/reducer'
import { reducer } from './theme/reducer'
import { BooksReducer } from './books/reducer'
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import { SearchReducer } from './search/reducer'

const rootReducer = combineReducers({
  theme: reducer,
  cart: CartReducer,
  books: BooksReducer,
  search: SearchReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(thunkMiddleware)
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>