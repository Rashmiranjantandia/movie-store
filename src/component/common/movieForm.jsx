import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from '../../Router Component/commonRoute/form';
import { getMovie, saveMovie } from './../../services/fakeMovieService';
import { getGenres } from './../../services/fakeGenersServices';
class MovieForm extends Form {
    state = { 
        data: {
            title: "",
            genreId: "",
            numberInStock: "",
            dailyRentalRate: ""
        },
        genres: [],
        errors: {}
     };

     schema = {
         _id: Joi.string(),
         title: Joi.string()
                .max(30)
                .required()
                .label('Title'),
         genreId: Joi.string()
                .required()
                .label('Genre'),
         numberInStock: Joi.number()
                .min(0)
                .max(100)
                .required()
                .label('Number of Stock'),
         dailyRentalRate: Joi.number()
                .min(0)
                .max(30)
                .required()
                .label('Daily Rental Rate'),
     };

     componentDidMount() {
         const genres = getGenres();
         this.setState({ genres });

         const movieId = this.props.match.params.id;
         console.log(movieId);
         if(movieId === "new") return;
         
         const movie = getMovie(movieId);
         console.log(movie);
         if(!movie) return this.props.history.replace("/notFound");
         this.setState({ data: this.mapToViewModel(movie) });
     }

     
     mapToViewModel(movie) { 
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        };
    }

    doSubmit = () => {
        saveMovie(this.state.data);

        this.props.history.push("/movie");
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 mt-5">
                        <form onSubmit={ this.handleSubmit } >
                            <fieldset className="border rounded px-5 py-4">
                                <legend className="text-center">Movie Form</legend>
                                {this.renderInput("title","Title", "Enter Title. .")}
                                {this.renderSelect("genreId","Genre","Choose. .", this.state.genres)}
                                {this.renderInput("numberInStock","Number of Stock", "Enter Stock. .", "number")}
                                {this.renderInput("dailyRentalRate","Rating", "Enter Rating. .")}
                                {this.renderButton("Save")}
                            </fieldset>
                        </form>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        );
    }
}
 
export default MovieForm;