import { getBooks, BookType } from '../../services/bookService' 
// import './styles.css' 
import { addingBook } from '../../store/favouritePotsts/selectors'
import { addToCartAction } from '../../store/favouritePotsts/action'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AppDispatch, AppState } from '../../store'
import { loadBooksAction } from '../../store/books/actions'
import './styles.css'
import { setBooksAction } from '../../store/books/actions'
import { selectBooks } from '../../store/books/selectors'

 
// const Cart = () => { 
    // const [books, setBooks] = useState<BookType[]>([]) 
    // const addedBooks = useSelector(addingBook)
    // const allBooks = useSelector(selectBooks)

    // const dispatch = useDispatch<AppDispatch>()
 
    // useEffect(() => { 
    //     getBooks()
    //         .then(res => 
    //             setBooks(res)
    //         ) 
    // }, []) 


    // useEffect(() => {
    //     getBooks().then(data => dispatch(setBooksAction(data)))
    //     dispatch(loadBooksAction())
    // }, [])
    


    // const setCart = (book: BookType) => {
    //     dispatch(addToCartAction(book))
    // }
    // const arrWithPrices = addedBooks.list
    //     .map(item => item.price)
    
//     // const totalPrice = 
//     //     arrWithPrices.reduce((total, price) => total + price)



const Cart = () => {
    // const [books, setBooks] = useState<BookType[]>([]) 

    const { page } = useParams()
    const addedBooks = useSelector(addingBook)
    const dispatch = useDispatch<AppDispatch>()
    const books = useSelector((state: AppState) => state.books.list)
    const setCart = (book: BookType) => {
        dispatch(addToCartAction(book))
    }

    const arrWithPrices = addedBooks.list
        .map(item => item.price)

    useEffect(() => {
        if (page) {
            dispatch(loadBooksAction())
        }
    }, [page, dispatch])


    return ( 
        <> 
            <div>
            CART:
                {
                    addedBooks.list
                        .map(item => item.title)
                        .join(', ')
                }
            COUNT:
                {
                    addedBooks.list.length
                }
            TOTAL: 
                {
                    // arrWithPrices.length
                    // // totalPrice
                }
            </div>
            <div className='book-list'> 
                { 
                    books.map(book => ( 
                        <div key={book.isbn13} className='book'> 
                            <img src={book.image} /> 
                            <Link to={`${book.isbn13}`}>{book.title}</Link>
                            <p>{book.price}</p>
                            <button onClick={() => setCart(book)}> 
                                Add To Cart
                            </button> 
                        </div>                        
                    )) 
                } 
            </div> 
        </>

    ) 
} 
 
export default Cart