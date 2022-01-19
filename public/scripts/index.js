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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDO0FBQ2pDLDRDQUE0QztBQUM1QyxFQUFFO0FBQ0YsMkNBQTJDO0FBQzNDLGlEQUFpRDtBQUNqRCxJQUFJO0FBQ0osRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxvREFBb0Q7QUFDcEQsSUFBSTtBQUNKLEVBQUU7QUFDRiwwREFBMEQ7QUFDMUQsK0RBQStEO0FBQy9ELEVBQUU7QUFDRiwyQ0FBMkM7QUFDM0MsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQixFQUFFO0FBQ0YscUJBQXFCO0FBQ3JCLDRFQUE0RTtBQUM1RSxFQUFFO0FBQ0YsMkNBQTJDO0FBQzNDLGdDQUFnQztBQUNoQywwQkFBMEI7QUFDMUIsRUFBRTtBQUNGLHlEQUF5RDtBQUN6RCxxQkFBcUI7QUFDckIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0YsK0VBQStFO0FBRS9FLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUIsa0NBQWtDO0FBQ2xDLCtCQUErQjtBQUMvQixJQUFJO0FBQ0osRUFBRTtBQUNGLGlFQUFpRTtBQUNqRSxvQkFBb0I7QUFFcEIseUJBQXlCO0FBQ3pCLG9CQUFvQjtBQUNwQixlQUFlO0FBQ2YsU0FBUztBQUNULE1BQU07QUFDTiwwQkFBMEI7QUFDMUIsMkJBQTJCO0FBQzNCLGtCQUFrQjtBQUNsQixNQUFNO0FBQ04sSUFBSTtBQUNKLDJCQUEyQjtBQUMzQix5REFBeUQ7QUFFekQsbUNBQW1DO0FBQ25DLDBDQUEwQztBQUMxQyx5Q0FBeUM7QUFDekMsRUFBRTtBQUNGLHlCQUF5QjtBQUN6QixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLDJEQUEyRDtBQUMzRCxJQUFJO0FBQ0osRUFBRTtBQUNGLDZCQUE2QjtBQUM3QixlQUFlO0FBQ2YsbUNBQW1DO0FBQ25DLDhDQUE4QztBQUM5QyxNQUFNO0FBQ04sSUFBSTtBQUNKLEVBQUU7QUFDRiw0QkFBNEI7QUFFNUIsbUNBQW1DO0FBQ25DLHFDQUFxQztBQUNyQyw4Q0FBOEM7QUFDOUMsRUFBRTtBQUNGLDREQUE0RDtBQUM1RCx3Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQge0Jvb2t9IGZyb20gJy4vYm9vay5qcydcbi8vIGltcG9ydCB7IHNob3dSYXRpbmcgfSBmcm9tICcuL2hlbHBlcnMuanMnXG4vL1xuLy8gY29uc3QgcHJpbnRZZXNCb29rID0gKHRleHQ6IHN0cmluZykgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhg0JrQvdC40LPQuCAnJHt0ZXh0fScg0L3QtdGCINCyINC/0YDQvtC00LDQttC1YClcbi8vIH1cbi8vXG4vLyBjb25zdCBwcmludE5vdEJvb2sgPSAodGV4dDpzdHJpbmcpID0+IHtcbi8vICAgY29uc29sZS5sb2coYNCS0Ysg0LzQvtC20LXRgtC1INC60YPQv9C40YLRjCDQutC90LjQs9GDICcke3RleHR9J2ApXG4vLyB9XG4vL1xuLy8gY29uc3QgYm9vayA9IG5ldyBCb29rKCdIYXJyeSBQb3R0ZXIgMScsICdmYW50YXN5JywgOTgwKVxuLy8gY29uc29sZS5sb2coYm9vay5nZW5yZS50b1VwcGVyQ2FzZSgpLCBib29rLnByaWNlLnRvRml4ZWQoMikpXG4vL1xuLy8gY29uc3QgYm9vazIgPSBuZXcgQm9vaygnSGFycnkgUG90dGVyIDInKVxuLy8gY29uc29sZS5sb2coJ2Jvb2syJylcbi8vIGNvbnNvbGUubG9nKGJvb2syKVxuLy9cbi8vIGJvb2syLnByaWNlID0gbnVsbFxuLy8gYm9vazIucHJpY2UgPT0gbnVsbCA/IHByaW50WWVzQm9vayhib29rMi5uYW1lKSA6IHByaW50Tm90Qm9vayhib29rMi5uYW1lKVxuLy9cbi8vIGNvbnNvbGUubG9nKCfQr9Cy0L3QsNGPINC4INC90LXRj9Cy0L3QsNGPINGC0LjQv9C40LfQsNGG0LjRjycpXG4vLyBsZXQgZ2VucmU6IHN0cmluZyA9ICdmYW50YXN5J1xuLy8gbGV0IHByaWNlOiBudW1iZXIgPSA5ODBcbi8vXG4vLyBjb25zdCBib29rMyA9IG5ldyBCb29rKCdIYXJyeSBQb3R0ZXIgMycsIGdlbnJlLCBwcmljZSlcbi8vIGNvbnNvbGUubG9nKGJvb2szKVxuLy9cbi8vIGNvbnN0IGNhbklCdXlUaGlzQm9vayA9IChib29rOiBCb29rKTpCb29sZWFuID0+IGJvb2sucHJpY2UgIT0gbnVsbFxuLy9cbi8vIGNhbklCdXlUaGlzQm9vayhib29rMykgPyBwcmludFllc0Jvb2soYm9vazMubmFtZSkgOiBwcmludE5vdEJvb2soYm9vazMubmFtZSlcblxuLy8gY29uc3QgcmV2aWV3czogc3RyaW5nW10gPSBbXG4vLyAgICdJdCBpcyBteSBmYXZvcml0ZSBib29rJyxcbi8vICAgJ0kgZXhwZWN0ZWQgbW9yZSBmcm9tIGl0IDooJyxcbi8vICAgJ1JlYWQgaXQgYWdhaW4gYW5kIGFnYWluISdcbi8vIF1cbi8vXG4vLyBjb25zdCBib29rID0gbmV3IEJvb2soJ0hhcnJ5IFBvdHRlcicsICdmYW50YXN5JywgOTgwLCByZXZpZXdzKVxuLy8gY29uc29sZS5sb2coYm9vaylcblxuLy8gY29uc3QgYm9vayA9IG5ldyBCb29rKFxuLy8gICAnSGFycnkgUG90dGVyJyxcbi8vICAgJ2ZhbnRhc3knLFxuLy8gICA5ODAsXG4vLyAgIHtcbi8vICAgICBmaXJzdE5hbWU6ICdKLiBLLicsXG4vLyAgICAgbGFzdE5hbWU6ICdSb3dsaW5nJyxcbi8vICAgICByYXRpbmc6IDQuNlxuLy8gICB9XG4vLyApXG4vLyBjb25zb2xlLmxvZyhib29rLmF1dGhvcilcbi8vIGNvbnNvbGUubG9nKHNob3dSYXRpbmcoYm9vay5hdXRob3IpLCBzaG93UmF0aW5nKGJvb2spKVxuXG4vLyBpbXBvcnQgeyBCb29rIH0gZnJvbSAnLi9ib29rLmpzJ1xuLy8gaW1wb3J0IHsgc2hvd0NhcnQgfSBmcm9tICcuL2hlbHBlcnMuanMnXG4vLyBpbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi9wcm9kdWN0LmpzJ1xuLy9cbi8vIGNvbnN0IGJvb2sgPSBuZXcgQm9vayhcbi8vICAgJ0hhcnJ5IFBvdHRlcicsXG4vLyAgICdmYW50YXN5JywgOTgwLFxuLy8gICB7Zmlyc3ROYW1lOiAnSi4gSy4nLCBsYXN0TmFtZTogJ1Jvd2xpbmcnLCByYXRpbmc6IDQuNn1cbi8vIClcbi8vXG4vLyBjb25zdCBub3RlcGFkOiBQcm9kdWN0ID0ge1xuLy8gICBwcmljZTogNDAsXG4vLyAgIGdldFByb2R1Y3REZXNjcmlwdGlvbjogKCkgPT4ge1xuLy8gICAgIHJldHVybiAnTm90ZXBhZCB3aXRoIFVuaWNvcm4sIDUwIHBhZ2VzJ1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gc2hvd0NhcnQoW2Jvb2ssIG5vdGVwYWRdKVxuXG4vLyBpbXBvcnQgeyBCb29rIH0gZnJvbSAnLi9ib29rLmpzJ1xuLy8gaW1wb3J0IHsgR2VucmUgfSBmcm9tICcuL3R5cGVzLmpzJ1xuLy8gaW1wb3J0IHsgZ2V0R2VucmVOYW1lIH0gZnJvbSAnLi9oZWxwZXJzLmpzJ1xuLy9cbi8vIGNvbnN0IGJvb2sgPSBuZXcgQm9vaygnSGFycnkgUG90dGVyJywgR2VucmUuRmFudGFzeSwgOTgwKVxuLy8gY29uc29sZS5sb2coZ2V0R2VucmVOYW1lKGJvb2suZ2VucmUpKVxuIl19