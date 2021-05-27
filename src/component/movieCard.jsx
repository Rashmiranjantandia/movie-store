import React, { Component } from 'react';
import StarRating from './common/starRating';
import LikeSymbol from './common/likesymbol';
class MovieCard extends Component {
    render() {
        const {movies, onLike, onDelete} = this.props
        return (
            <div className="container-fluid row">
                {movies.map(movie => (
                    <div className="card mr-0 mt-2 col-md-3 bg-dark" key={movie._id}>
                        <img src={movie.img} className="card-img-top rounded mt-2" height="280px" alt={movie.img} />
                        <div className="card-body">
                            <p className="text-uppercase font-weight-bold">{movie.title}</p>
                            <p>{movie.genre.name}</p>
                            <StarRating
                                ratingValue = {movie.dailyRentalRate}
                            />
                            {/* <p>{movie.dailyRentalRate}</p> */}
                            <LikeSymbol
                                liked={movie.liked}
                                onClick={() => onLike(movie)} 
                            />
                            <button
                                className="btn text-danger float-right mt-1 fa fa-trash-o"
                                onClick={() => onDelete(movie)}>
                            </button>
                        </div>
                    </div>
                ))}

                {/* <Link to="/" className="btn btn-primary">Delete</Link> */}
            </div>
        );
    }
}

export default MovieCard;