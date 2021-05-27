import React, { Component } from 'react';
// import { getMovies } from '../services/fakeMovieService3';
import { getGenres } from '../services/fakeGenersServices';
import Pagination from './pagination';
import { Paginate } from './utilis/paginate';
import ListGroup from './common/listGroup';
import _ from 'lodash';
// import { filter } from 'lodash';
// import MovieTable from './movieTable';
import { Link } from 'react-router-dom';
import SearchBox from './common/searchBox';
import MovieCard from './movieCard';
import { getMovies } from './../services/fakeMovieService4';

// import UniqueId from 'react-html-id';
// import { genres } from './../services/fakeGenersServices';
class Movies extends Component {

    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        getGenresName: "",
        searchQuery:"",
        selectedGenre: null,
        sortColumn: { path: 'title', order: 'asc' }
    };
    componentDidMount() {
        const genres = [{ _id: "", name: "All Movies" }, ...getGenres()]
        this.setState({
            movies: getMovies(),
            genres
        })
    }


    // Delete Function
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({ movies })
    }

    // handleAdd = (movies, newMovies) => {
    //     // console.log(newMovies)
    //     movies = [...movies, newMovies]
    //     this.setState({ movies, slNo: this.state.slNo + 1 })
    // }

    handleLike = (movie) => {
        // console.log(movie)
        const movies = [...this.state.movies] //copy array element
        const index = movies.indexOf(movie) //search for index
        movies[index] = { ...movies[index] } //passsing movie object to the perticular index position
        movies[index].liked = !movies[index].liked //toggle like
        this.setState(
            { movies }
        )
    }

    // Pagination
    handlePageChange = (page) => {
        this.setState({
            currentPage: page,
        })
    }

    // handlenextOrPrevious = (page) => {
    //     console.log(page)
    //     // page++
    //     // this.setState({
    //     //     currentPage: page
    //     // })
    // }


    // Filter Genere
    handleGenerSelect = (genre) => {
        this.setState({
            selectedGenre: genre,
            currentPage: 1,
            searchQuery:""
        })
        genre.name === "All Movies"
            ? this.setState({
                getGenresName: " "
            })
            : this.setState({
                getGenresName: genre.name
            })
    }

    handleSearch = query => {
        this.setState({ searchQuery: query, selectedGenre: null, currentPage:1 });
    }
    handleSort = (sortColumn) => {
        this.setState({
            sortColumn
        })
        console.log(sortColumn)

    }

    getBadgeClass(onItemSelected) {
        onItemSelected = onItemSelected.length;
        let classes = "badge m-3 p-2 badge-";
        classes += onItemSelected === 0 ? "primary" : "warning";
        return classes;
    }

    formatCount(onItemSelected) {
        return onItemSelected === 0 ? "zero" : onItemSelected;
    }

    render() {
        let { pageSize, currentPage, movies: allMovies, genres, selectedGenre, genreCount, getGenresName, sortColumn, searchQuery } = this.state;
        // Count Length of Movies
        const count = this.state.movies.length;

        if (count === 0) {
            return <div className="container-fluid">
                <center><img className="mt-5" src="bg-movies.png" width="150px" height="150px" alt="Not-Available" /></center>
                <h2 className="NoMoviesHeading text-danger text-center">No Movies in Database</h2>
            </div>
        }

      const  getPagedData = () => {
            const {
                pageSize,
                currentPage,
                sortColumn,
                selectedGenre,
                searchQuery,
                movies: allMovies
            } = this.state;

        let filtered = allMovies;
        if (searchQuery)
            filtered = allMovies.filter(m =>
                m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
                );
        else if (selectedGenre && selectedGenre._id)
        filtered = allMovies.filter(m => m.genre.name === selectedGenre.name);

        // console.log(filtered)
        genreCount = filtered.length;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

        const movies = Paginate(sorted, currentPage, pageSize);
        return { totalCount : filtered.length, data: movies };

    }
const { totalCount, data: movies } = getPagedData();
        return (
            <div>
                {/* <h2>Showing {this.state.movies.length} movies in Database</h2> */}
                <div className="container-fluid ">

                    <div className="row">
                        <div className="col-md-3">
                            <img src="bg-movies.png" width="100px" height="100px" className="m-3" alt="Not-Available" />
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-3 col-4 d-flex align-items-end mb-3">
                                    <Link to="/movies/new"
                                    className="btn btn-primary">
                                        New Movie
                                    </Link>
                                </div>
                                <div className="col-md-9 col-8">
                                    <h2 className="text-primary my-5 text-center">Showing {count} Movies in Database</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <ListGroup
                                items={genres}
                                selectedItem={this.selectedGenre}
                                onItemSelected={this.handleGenerSelect}
                            />
                            <h4 className="text-primary my-5 text-center">{genreCount} {getGenresName} Movies</h4>

                        </div>


                        <div className="col-md-9">
                            <SearchBox
                            value={searchQuery} 
                            onChange={this.handleSearch}
                            />
 
                            {/* <MovieTable
                                movies={movies}
                                onLike={this.handleLike}
                                onDelete={this.handleDelete}
                                onAdd={this.handleAdd}
                                onSort={this.handleSort}
                                sortColumn={sortColumn}
                            /> */}

                            <MovieCard
                                movies={movies}
                                onLike={this.handleLike}
                                onDelete={this.handleDelete}
                            />

                            <Pagination
                                itemsCount={count}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onPageChange={this.handlePageChange}
                                nextOrPrevious={this.handlenextOrPrevious}
                            />

                        </div>
                    </div>



                </div>

            </div>
        );
    }
}

export default Movies;