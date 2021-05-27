import * as genresAPI from "./fakeGenersServices";

import Hours13 from './../image/13_hours.jpg'
import Tom_Jerry from './../image/Tom_Jerry.jpg'
import ww84 from './../image/ww84.jpg'
import zombieland from './../image/zombieland.jpg'
import joker from './../image/joker.jpg'
import monster_hunter from './../image/monster_hunter.jpg'
import dunkirk from './../image/dunkirk.jpg'
import wrong_turn from './../image/wrong_turn.jpg'
import witches from './../image/witches.jpg'
import BOP from './../image/BOP.jpg'
import airplane from './../image/airplane.jpg'

let movies = [
    {
        _id: "5b21ca3eeb7f6fbccd471815",
        title: "Tom & Jerry",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 6,
        dailyRentalRate: 2,
        img: Tom_Jerry
    },
    {
        _id: "5b21ca3eeb7f6fbccd471816",
        title: "Wonder Woman",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
        numberInStock: 5,
        dailyRentalRate: 2.5,
        img: ww84
    },

    {
        _id: "5b21ca3eeb7f6fbccd47181b",
        title: "Zombieland",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 3,
        img: zombieland
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181e",
        title: "Joker",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 7,
        dailyRentalRate: 4.5,
        img: joker
    },
    {
        _id: "5b21ca3eeb7f6fbccd471817",
        title: "Monster Hunter",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 8,
        dailyRentalRate: 3.5,
        img: monster_hunter
    },
    {
        _id: "5b21ca3eeb7f6fbccd47282f",
        title: "Dunkirk",
        genre: { _id: "5b21ca3eeb7f6fbccd471822", name: "Drama" },
        numberInStock: 8,
        dailyRentalRate: 3.4,
        img: dunkirk
    },
    {
        _id: "5b21ca3eeb7f6fbccd471819",
        title: "Wrong Turn",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
        img: wrong_turn
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181f",
        title: "The Witches",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 4,
        dailyRentalRate: 3.5,
        img: witches
    },
    {
        _id: "5b21ca3eeb7f6fbccd471821",
        title: "Birds of Pray",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
        img: BOP
    },
    {
        _id: "5b21ca3eeb7f6fbccd471822",
        title: "13 Hours",
        genre: { _id: "5b21ca3eeb7f6fbccd471819", name: "Action" },
        numberInStock: 7,
        dailyRentalRate: 4.1,
        img: Hours13
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181a",
        title: "Airplane",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
        img: airplane
    }
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