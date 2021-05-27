// import * as genresAPI from "./fakeGenreService";

let movies = [
    {
        _id: "5b21ca3eeb7f6fbccd471815",
        title: "Tom & Jerry",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 6,
        dailyRentalRate: 2,
        img: "../image/Tom_Jerry.jpg"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471816",
        title: "Wonder Woman",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
        numberInStock: 5,
        dailyRentalRate: 2.5,
        img: "../image/ww84.jpg"
    },

    {
        _id: "5b21ca3eeb7f6fbccd47181b",
        title: "Zombieland",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 3,
        img: "../image/zombieland.jpg"
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181e",
        title: "Joker",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 7,
        dailyRentalRate: 4.5,
        img: "../image/joker.jpg"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471817",
        title: "Monster Hunter",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 8,
        dailyRentalRate: 3.5,
        img: "../image/monster_hunter.jpg"
    },
    {
        _id: "5b21ca3eeb7f6fbccd47282f",
        title: "Dunkirk",
        genre: { _id: "5b21ca3eeb7f6fbccd471822", name: "Drama" },
        numberInStock: 8,
        dailyRentalRate: 3.4,
        img: "../image/dunkirk.jpg"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471819",
        title: "Wrong Turn",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
        img: "../image/wrong_turn.jpg"
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181f",
        title: "The Witches",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 4,
        dailyRentalRate: 3.5,
        img: "../image/witches.jpg"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471821",
        title: "Birds of Pray",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
        img: "../image/BOP.jpg"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471822",
        title: "13 Hours",
        genre: { _id: "5b21ca3eeb7f6fbccd471819", name: "Action" },
        numberInStock: 7,
        dailyRentalRate: 4.1,
        img: "../image/13_hours.jpg"
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181a",
        title: "Airplane",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
        img: "../image/airplane.jpg"
    }
];

export function getMovies() {
    return movies;
}