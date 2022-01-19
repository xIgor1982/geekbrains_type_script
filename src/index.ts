// import {Book} from './book.js'
// import { showRating } from './helpers.js'
//
// const printYesBook = (text: string) => {
//   console.log(`Книги '${text}' нет в продаже`)
// }
//
// const printNotBook = (text:string) => {
//   console.log(`Вы можете купить книгу '${text}'`)
// }
//
// const book = new Book('Harry Potter 1', 'fantasy', 980)
// console.log(book.genre.toUpperCase(), book.price.toFixed(2))
//
// const book2 = new Book('Harry Potter 2')
// console.log('book2')
// console.log(book2)
//
// book2.price = null
// book2.price == null ? printYesBook(book2.name) : printNotBook(book2.name)
//
// console.log('Явная и неявная типизация')
// let genre: string = 'fantasy'
// let price: number = 980
//
// const book3 = new Book('Harry Potter 3', genre, price)
// console.log(book3)
//
// const canIBuyThisBook = (book: Book):Boolean => book.price != null
//
// canIBuyThisBook(book3) ? printYesBook(book3.name) : printNotBook(book3.name)

// const reviews: string[] = [
//   'It is my favorite book',
//   'I expected more from it :(',
//   'Read it again and again!'
// ]
//
// const book = new Book('Harry Potter', 'fantasy', 980, reviews)
// console.log(book)

// const book = new Book(
//   'Harry Potter',
//   'fantasy',
//   980,
//   {
//     firstName: 'J. K.',
//     lastName: 'Rowling',
//     rating: 4.6
//   }
// )
// console.log(book.author)
// console.log(showRating(book.author), showRating(book))

// import { Book } from './book.js'
// import { showCart } from './helpers.js'
// import { Product } from './product.js'
//
// const book = new Book(
//   'Harry Potter',
//   'fantasy', 980,
//   {firstName: 'J. K.', lastName: 'Rowling', rating: 4.6}
// )
//
// const notepad: Product = {
//   price: 40,
//   getProductDescription: () => {
//     return 'Notepad with Unicorn, 50 pages'
//   }
// }
//
// showCart([book, notepad])

// import { Book } from './book.js'
// import { Genre } from './types.js'
// import { getGenreName } from './helpers.js'
//
// const book = new Book('Harry Potter', Genre.Fantasy, 980)
// console.log(getGenreName(book.genre))
