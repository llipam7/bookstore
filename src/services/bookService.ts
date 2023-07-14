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

export const getBooks = (search?: string): Promise<BookType[]> => {
  return fetch(`https://api.itbook.store/1.0/new${search ? '&search=' + search : ''}`)
    .then(response => response.json())
    .then((result: ResponseType) => {
      return result.books.map(item => {
        return {
          ...item
        }
      })
    })
}

export const getSearchBooks = (search:string): Promise<BookType[]> => {
  return fetch(`https://api.itbook.store/1.0/search/${search}`)
    .then(response => response.json())
    .then((result: ResponseType) => {
      return result.books.map(item => item)
})}


export const getBook = (isbn13: string): Promise<BookType> => {
  return fetch('https://api.itbook.store/1.0/books/' + isbn13)
    .then(response => response.json())
    .then((result: BookType) => result)
}

