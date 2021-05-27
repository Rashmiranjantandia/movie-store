import * as genresAPI from "./fakeGenersServices";
// import { getMovies } from './../../../Original/src-2/services/fakeMovieService3';

let movies = [
    {
        _id: "5b21ca3eeb7f6fbccd471815",
        title: "Terminator",
        genre: { _id: "5b21ca3eeb7f6fbccd471819", name: "Action" },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471816",
        title: "Die Hard",
        genre: { _id: "5b21ca3eeb7f6fbccd471819", name: "Action" },
        numberInStock: 5,
        dailyRentalRate: 2.5
    },
    {
        _id: "5b21ca3eeb7f6fbccd471817",
        title: "Get Out",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 8,
        dailyRentalRate: 3.5
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181q",
        title: "Trip to Italy",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181a",
        title: "Airplane",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181b",
        title: "Wedding Crashers",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5
    },
    {
        _id: "5b21ca3eeb7f6fbccd47282a",
        title: "Iron Man",
        genre: { _id: "5b21ca3eeb7f6fbccd471819", name: "Action" },
        numberInStock: 4,
        dailyRentalRate: 4.6
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181e",
        title: "Gone Girl",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 7,
        dailyRentalRate: 4.5
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181g",
        title: "The Sixth Sense",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 4,
        dailyRentalRate: 3.5
    },
    {
        _id: "5b21ca3eeb7f6fbccd471821",
        title: "The Avengers",
        genre: { _id: "5b21ca3eeb7f6fbccd471819", name: "Action" },
        numberInStock: 7,
        dailyRentalRate: 3.5
    },
    {
        _id: "5b21ca3eeb7f6fbccd471822",
        title: "13 Hours",
        genre: { _id: "5b21ca3eeb7f6fbccd471819", name: "Action" },
        numberInStock: 7,
        dailyRentalRate: 4.1
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181f",
        title: "Runaway Jury",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 5,
        dailyRentalRate: 3.8
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181z",
        title: "Nightcrawler",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 8,
        dailyRentalRate: 2.8
    },
    {
        _id: "5b21ca3eeb7f6fbccd47141g",
        title: "Parasite",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 1,
        dailyRentalRate: 4.8
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181c",
        title: "Shaun of the Dead",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 6,
        dailyRentalRate: 3.9
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181d",
        title: "Booksmart",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 4,
        dailyRentalRate: 2.5
    },
    {
        _id: "5b21ca3eeb7f6fbccd47189e",
        title: "The Dictator",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 2,
        dailyRentalRate: 3.7
    },
    {
        _id: "5b21ca3eeb7f6fbccd47282b",
        title: "Parasite",
        genre: { _id: "5b21ca3eeb7f6fbccd471822", name: "Drama" },
        numberInStock: 2,
        dailyRentalRate: 4.8
    },
    {
        _id: "5b21ca3eeb7f6fbccd47282c",
        title: "The Wolf of Wall Street",
        genre: { _id: "5b21ca3eeb7f6fbccd471822", name: "Drama" },
        numberInStock: 2,
        dailyRentalRate: 3.9
    },
    {
        _id: "5b21ca3eeb7f6fbccd47282d",
        title: "Joker",
        genre: { _id: "5b21ca3eeb7f6fbccd471822", name: "Drama" },
        numberInStock: 6,
        dailyRentalRate: 3.1
    },
    {
        _id: "5b21ca3eeb7f6fbccd47282e",
        title: "Interstellar",
        genre: { _id: "5b21ca3eeb7f6fbccd471822", name: "Drama" },
        numberInStock: 8,
        dailyRentalRate: 3.4
    },
    {
        _id: "5b21ca3eeb7f6fbccd47282f",
        title: "Dunkirk",
        genre: { _id: "5b21ca3eeb7f6fbccd471822", name: "Drama" },
        numberInStock: 8,
        dailyRentalRate: 3.4
    },
    {
        _id: "5b21ca3eeb7f6fbccd47282g",
        title: "The Martian",
        genre: { _id: "5b21ca3eeb7f6fbccd471822", name: "Drama" },
        numberInStock: 8,
        dailyRentalRate: 3.4
    },

];
export function getMovies(){
    return movies;
}

export function getMovie(id) {
    return movies.find(m => m._id === id);
  }
  
  export function saveMovie(movie) {
    let movieInDb = movies.find(m => m._id === movie._id) || {};
    movieInDb.title = movie.title;
    movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
    movieInDb.numberInStock = movie.numberInStock;
    movieInDb.dailyRentalRate = movie.dailyRentalRate;
  
    if (!movieInDb._id) {
      movieInDb._id = Date.now().toString();
      movies.push(movieInDb);
    }
  
    return movieInDb;
  }
  
  export function deleteMovie(id) {
    let movieInDb = movies.find(m => m._id === id);
    movies.splice(movies.indexOf(movieInDb), 1);
    return movieInDb;
  }