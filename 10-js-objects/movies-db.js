// create an array of movie objects. Each movie should have a title, rating, and hasWatched properties. Iterate through the array and print a summary

class Movie {
  constructor(title, rating, hasWatched) {
    Object.assign(this, { title, rating, hasWatched });
  }
}
let movie1 = new Movie('In Bruges', 5, true);
let movie2 = new Movie('Frozen', 4.5, false);
let movie3 = new Movie('Mad Max', 5, true);
let movie4 = new Movie('Les Miserables', 3.5, false);

let movies = [movie1, movie2, movie3, movie4];
movies.forEach(movie => {
  if (movie.hasWatched) {
    console.log(`You have seen "${movie.title}" - ${movie.rating} stars`);
  } else {
    console.log(`You have not seen "${movie.title}" - ${movie.rating} stars`);
  }
});
