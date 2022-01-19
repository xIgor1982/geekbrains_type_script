import {Author} from './author.js'
import {Ratingable} from './ratingable.js'
import {Product} from "./product"
import {Review, Genre} from './types.js'

const reviews: Review[] = [
  ['John', 5, 'It is my favorite book'],
  ['Mary', 3, 'I expected more from it :('],
  ['Clara', 5, 'Read it again and again!']
]

export class Book implements Ratingable, Product {
  name: string
  genre: Genre
  price: number
  author: Author
  reviews: [string, number, string][]
  rating: number

  constructor(
    name: string,
    genre: Genre,
    price: number,
    author: Author,
    reviews?: [string, number, string][]
  ) {
    this.name = name
    this.genre = genre
    this.price = price
    this.author = author

    if (reviews) {
      this.reviews = reviews
    } else {
      reviews = []
    }

    if (this.reviews.length > 0) {
      const reviewSum = this.reviews.reduce(
        (accumulator, currentValue) => {
          return accumulator + currentValue[1]
        },
        0
      )

      this.rating = reviewSum / this.reviews.length
    } else {
      this.rating = null
    }
  }

  getProductDescription(): string {
    return `Book "${this.name}" by ${this.author.firstName} ${this.author.lastName}`
  }
}
