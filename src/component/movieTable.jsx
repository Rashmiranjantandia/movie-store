import React, { Component } from 'react';
import LikeSymbol from './common/likesymbol';
import { Link } from 'react-router-dom';
import Table from './common/table';
class MovieTable extends Component {
    columns = [
        { path: "title", label: "Title",
        content: movie => <Link to = {`/Moviestore/${movie._id}`}>{movie.title}</Link>
         },
        { path: "genre.name", label: "Genre" },
        { path: "numberInStock", label: "Stock" },
        { path: "dailyRentalRate", label: "Rating" },
        {
            key: "like", content: (movie) => <LikeSymbol
                liked={movie.liked}
                onClick={() => this.props.onLike(movie)} />
        },
        { key: "delete", content: (movie) => <button 
        className="btn text-danger fa fa-trash-o" 
        onClick={() => this.props.onDelete(movie)}></button> }
    ]
    render() {
        const { movies, sortColumn, onSort } = this.props
        return <Table
        columns    = {this.columns}
        data       = {movies}
        onSort     = {onSort}
        sortColumn = {sortColumn}
        />
    }
}

export default MovieTable;