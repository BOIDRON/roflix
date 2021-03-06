import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {getNumber} from '../actions/movie';

import '../css/Header.css';

//Définir notre composant header
class HeaderComponent extends Component {
    componentDidMount(){
        this.props.getNumber();
    }
    render() {
        return (
            <div className="header">
                <Link to={{ pathname: "/" }}>
                    <FontAwesome className="header--movie" name="film" size="5x" />
                </Link>
                <h3>RoFlix</h3>
                <Link to={{pathname: 'player'}}>
                <FontAwesome className='header--herat' name="heart" size='5x' />
                </Link>
                <div className='header--badge'>{this.props.badge}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        badge: state.movies.number
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getNumber: () => dispatch(getNumber())
    }
}

const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);


export { Header };