import React, { Component } from 'react';
import axios from 'axios';
import { Homes } from './routes';
import { Header } from './components';
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE } from './config';
import './App.css';



class App extends Component {
  state = {
    loading: false,
    movies: [
      {
        backdrop_path: "./images/joker-large.jpeg",
        id: 475557,
        overview:
          "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
        poster_path: "./images/Fast_small.jpg",
        title: "Joker"
      },

      {
        backdrop_path: "./images/joker-large.jpeg",
        id: 475558,
        overview:
          "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
        poster_path: "./images/Fast_small.jpg",
        title: "Joker"
      },

      {
        backdrop_path: "./images/joker-large.jpeg",
        id: 475559,
        overview:
          "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
        poster_path: "./images/Fast_small.jpg",
        title: "Joker"
      },

      {
        backdrop_path: "./images/joker-large.jpeg",
        id: 475554,
        overview:
          "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
        poster_path: "./images/Fast_small.jpg",
        title: "Joker"
      }],

    badge: 0,
    image: "./images/joker-large.jpeg",
    mTitle: "Joker",
    mDesc: "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
    activePage: 0,
    totalPages: 0,
    searchText: ""
  }
  async componentDidMount() {
    try {
      const { data: { results, page, total_pages } } = await this.loadMovies();
      console.log('res', results);
      this.setState({
        movies: results,
        loading: false,
        activePage: page,
        totalPages: total_pages,
        image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
        mTitle: results[0].title,
        mDesc: results[0].overview,
      })
    } catch (e) {
      console.log('e', e);
    }
  }
  loadMovies = () => {
    const page = this.state.activePage + 1;
    const url = `${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}&language=fr`;
    return axios.get(url);
  }
  searchMovies = () => {
    const url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${this.state.searchText}&language=fr`;
    return axios.get(url);
  }

  handleSearch = value => {
    //lancer la recherche ici
    try {
      this.setState({ loading: true, searchText: value, image: null }, async () => {
        const { data: { results, page, total_pages } } = await this.searchMovies();
        console.log('res', results);
        this.setState({
          movies: results,
          loading: false,
          activePage: page,
          totalPages: total_pages,
          image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
          mTitle: results[0].title,
          mDesc: results[0].overview,
        })
      })
    } catch (e) {
      console.log('e', e);
    }
    console.log('handleSearch', value);
  }
  loadMore = async () => {

    try {
      this.setState({ loading: true });
      const { data: { results, page, total_pages } } = await this.loadMovies();
      console.log('res', results);
      this.setState({
        movies: [...this.state.movies, ...results],
        loading: false,
        activePage: page,
        totalPages: total_pages,
        image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
        mTitle: results[0].title,
        mDesc: results[0].overview,
      })
    } catch (e) {
      console.log('error load more', e)
    }
    //lancer la recherche ici
    console.log('load more');
  }
  render() {
    return (
      <div className="App">
        <Header badge={this.state.badge} />
        <Homes
          {...this.state}
          onSearchClick={this.handleSearch}
          onButtonClick={this.loadMore}
        />
      </div>
    );
  }
}
export default App;
