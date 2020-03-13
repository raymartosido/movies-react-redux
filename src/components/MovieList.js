import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { readMovies } from '../actions';

class MovieList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        this.props.readMovies();
    }

    renderMovies() {
        const movieItems = this.props.movies.map(({id, title, poster_path, release_date, vote_average}) => {
            return (
                <div key={id} className="movieCard">
                    <div className="movieImg">
                        <img alt={title} src={`https://image.tmdb.org/t/p/w500/${poster_path}`}/>
                    </div>
                    <div className="info">
                        <Link to={`/movie/${id}`}>{title}</Link>
                        <p>{release_date} <span>|</span> {vote_average}</p>
                    </div>
                </div>   
            );
        });
        return movieItems;
    }

    render() {
        return (
            <div className="movies container">
                <h2>Movies</h2>
                
                <div className="movieList">{ this.renderMovies() }</div>
            </div>
        );
    }
}

const mapStatetoProps = ({ movie }) => {
    const { movies, error, employeeInfo } = movie;

    return {
        movies, error, employeeInfo
    }
}

export default connect(mapStatetoProps, { readMovies })(MovieList);