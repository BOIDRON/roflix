import React, { Component } from 'react';
import { connect } from 'react-redux';

import { HeaderImg, Searchbar, PosterList, LoadButton } from '../components';
import { getMovies } from '../actions/movie';




class HomesComponent extends Component {
    componentDidMount() {
        this.props.getMovies();

    }
    render() {
        const { mTitle, mDesc, image, movies, loading } = this.props;
        return (
            <div>
                <HeaderImg
                    title={mTitle}
                    overview={mDesc}
                    imgSrc={image}
                />
                <Searchbar onSearchClick={this.props.onSearchClick} />
                <PosterList movies={movies} localMovies = {this.props.localMovies} />
                <LoadButton onButtonClick={this.props.onButtonClick} loading={loading} />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        localMovies: state.movies.movies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMovies: () => dispatch(getMovies())
    }
}
const Homes = connect(mapStateToProps, mapDispatchToProps)(HomesComponent);

export { Homes };