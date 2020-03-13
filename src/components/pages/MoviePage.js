import React, { Component } from 'react';
import Moment from 'react-moment';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { fetchMovie } from '../../actions';

class MoviePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieInfo: []
        }
    }

    componentDidMount = () => {
        this.props.fetchMovie(this.props.match.params.id);
    }

    renderMovie() {
        const movie = this.props.movieInfo;
        return (
            <div className="movieCard">
                <img alt={movie.title} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                <div className="info">
                    <Link className="title" to={`/movie/${movie.id}`}><h2>{movie.title}</h2></Link>
                    <p className="more"><Moment format="D MMM YYYY" withTitle>{movie.release_date}</Moment> <span>|</span> <span className={ movie.vote_average < 5 ? "txt-warning" : "txt-success"  }>{ movie.vote_average }</span></p>

                    <p className="overview">{ movie.overview }</p>

                    <Link className="d-block" to={'/'}>{ 'Back to home' }</Link>
                </div>
            </div>
        );
    }

    render() {
        return (
        <div className="movie container">
            <div className="movieSingle">{ this.renderMovie() }</div>
        </div>
        );
    }

}

const mapStatetoProps = ({ movie }) => {
    const { movieInfo, error } = movie;

    return {
        movieInfo, error
    }
}

export default connect(mapStatetoProps, { fetchMovie })(MoviePage);