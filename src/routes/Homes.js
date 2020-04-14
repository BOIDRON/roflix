import React, {Component} from 'react';
import {HeaderImg, Searchbar, PosterList, LoadButton} from '../components';



class Homes extends Component {
    render(){
        const { mTitle, mDesc, image, movies, loading} =this.props;
        return(
<div>
    <HeaderImg
    title={mTitle}
    overview={mDesc}
    imgSrc={image} 
    />
    <Searchbar onSearchClick={this.props.onSearchClick} />
    <PosterList movies = {movies}/>
    <LoadButton onButtonClick={this.props.onButtonClick} loading={loading}/>
     </div>
        )
    }
}


export {Homes};