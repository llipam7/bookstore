export type BookType = {
  title: string
  subtitle: string
  isbn13: number
  price: string
  image: string
  url: string
}

export type ResponseType = {
  total: number
  page?: number 
  books: BookType[] 
}

export const getBooks = (): Promise<BookType[]> => {
  return fetch(`https://api.itbook.store/1.0/new`)
    .then(response => response.json())
    .then((result: ResponseType) => {
      return result.books.map(item => item)
})}

// export const getSearchBooks = (): Promise<BookType[]> => {
//   return fetch(`https://api.itbook.store/1.0/search/search=${search}`)
//     .then(response => response.json())
//     .then((result: ResponseType) => {
//       return result.books.map(item => item)
// })}


export const getBook = (id: string): Promise<BookType> => {
  return fetch('https://api.itbook.store/1.0/books/' + id)
    .then(response => response.json())
    .then((result: BookType) => result)
}

