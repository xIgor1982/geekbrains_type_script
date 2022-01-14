class Book {
    constructor(name, genre, pageAmount) {
        this.name = name;
        this.genre = genre;
        this.pageAmount = pageAmount;
    }
}
const books = [
    new Book('Harry Potter', 'fantasy', 980),
    new Book('Lord of the Ring', 'fantasy', 1001),
    new Book('How to be productive', 'lifestyle', 500),
    new Book('Game of Thrones', 'fantasy', 999)
];
function findSuitableBook(genre, pagesLimit, multipleRecommendations = true) {
    const findAlgorithm = (book) => {
        return book.genre === genre && book.pageAmount <= pagesLimit;
    };
    if (multipleRecommendations) {
        return books.filter(findAlgorithm);
    }
    else {
        return books.find(findAlgorithm);
    }
}
const recommendedBook = findSuitableBook('fantasy', 1000);
if (recommendedBook instanceof Book) {
    console.log(recommendedBook.name);
}
else {
    console.log(recommendedBook[0].name);
}
