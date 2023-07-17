import { BookType } from "../../services/bookService"

export type CartWithBooksStateType = {
    list: BookType[]
}

export type BookInCartActionType = {
    type: string,
    payload: BookType
}

//////////////////
// import { useState, useEffect } from 'react' 
// import { getBooks, BookType } from '../../service/postService' 
// import './posts.css' 
// import { useSelector } from 'react-redux'
// import { addingBook } from '../../store/favouritePotsts/selectors'
// import { useDispatch } from 'react-redux'
// import { addToCartAction } from '../../store/favouritePotsts/action'
 
// const Books = () => { 
//     const [books, setBooks] = useState<BookType[]>([]) 
//     const cartWithBook = useSelector(addingBook)
//     const dispatch = useDispatch()
 
//     useEffect(() => { 
//         getBooks().then(res => setBooks(res)) 
//     }, []) 
//     const setFavourite = (book: BookType) => {
//         dispatch(addingBook(cart))
//     }
 
//     return ( 
//         <> 
//             <div> 
//                 <h1>Posts</h1> 
//             </div> 
//             <div>
//                 ALL FAVOURITE POSTS:
//                 {
//                     cartWithBook.list
//                         .map(item => item.title)
//                         .join(', ')
//                 }
//             </div>
//             <div className='post-list'> 
//                 { 
//                     books.map(book => ( 
//                         <div key={book.isbn13} className='post'> 
//                             <h2>{book.title}</h2> 
//                             <img src={book.image} /> 
//                             <button onClick={() => setFavourite(book)}> 
//                                 Set favorite 
//                             </button> 
//                         </div>                        
//                     )) 
//                 } 
//             </div> 
//         </> 
//     ) 
// } 
 
// export default Books