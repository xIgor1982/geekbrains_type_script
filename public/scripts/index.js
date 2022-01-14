import { Book } from './book.js';
import { books } from './book-collection.js';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQUNoQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUE7QUFFNUMsU0FBUyxnQkFBZ0IsQ0FDdkIsS0FBYSxFQUNiLFVBQWtCLEVBQ2xCLHVCQUF1QixHQUFHLElBQUk7SUFFOUIsTUFBTSxhQUFhLEdBQUcsQ0FBQyxJQUFVLEVBQUUsRUFBRTtRQUNuQyxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFBO0lBQzlELENBQUMsQ0FBQTtJQUVELElBQUksdUJBQXVCLEVBQUU7UUFDM0IsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0tBQ25DO1NBQU07UUFDTCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7S0FDakM7QUFDSCxDQUFDO0FBRUQsTUFBTSxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO0FBRXpELElBQUksZUFBZSxZQUFZLElBQUksRUFBRTtJQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtDQUNsQztLQUFNO0lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7Q0FDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb29rIH0gZnJvbSAnLi9ib29rLmpzJ1xuaW1wb3J0IHsgYm9va3MgfSBmcm9tICcuL2Jvb2stY29sbGVjdGlvbi5qcydcblxuZnVuY3Rpb24gZmluZFN1aXRhYmxlQm9vayAoXG4gIGdlbnJlOiBzdHJpbmcsXG4gIHBhZ2VzTGltaXQ6IG51bWJlcixcbiAgbXVsdGlwbGVSZWNvbW1lbmRhdGlvbnMgPSB0cnVlXG4pOiBCb29rIHwgQm9va1tdIHtcbiAgY29uc3QgZmluZEFsZ29yaXRobSA9IChib29rOiBCb29rKSA9PiB7XG4gICAgcmV0dXJuIGJvb2suZ2VucmUgPT09IGdlbnJlICYmIGJvb2sucGFnZUFtb3VudCA8PSBwYWdlc0xpbWl0XG4gIH1cblxuICBpZiAobXVsdGlwbGVSZWNvbW1lbmRhdGlvbnMpIHtcbiAgICByZXR1cm4gYm9va3MuZmlsdGVyKGZpbmRBbGdvcml0aG0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJvb2tzLmZpbmQoZmluZEFsZ29yaXRobSlcbiAgfVxufVxuXG5jb25zdCByZWNvbW1lbmRlZEJvb2sgPSBmaW5kU3VpdGFibGVCb29rKCdmYW50YXN5JywgMTAwMClcblxuaWYgKHJlY29tbWVuZGVkQm9vayBpbnN0YW5jZW9mIEJvb2spIHtcbiAgY29uc29sZS5sb2cocmVjb21tZW5kZWRCb29rLm5hbWUpXG59IGVsc2Uge1xuICBjb25zb2xlLmxvZyhyZWNvbW1lbmRlZEJvb2tbMF0ubmFtZSlcbn1cbiJdfQ==