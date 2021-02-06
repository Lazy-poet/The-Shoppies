import React, { Component } from 'react';
import axios from 'axios'
import SearchBar from '../../components/SearchBar/SearchBar';
import Nominations from '../../components/Nominations/Nominations'
import MovieResults from '../../components/MovieResults/MovieResults'
import classes from './Shoppies.module.css'
import {Navbar} from 'reactstrap'

export default class Shoppies extends Component {
  state = {
    input: '',
    displayedResults: [],
    loading: false,
    list: []
  }
  
  fetchMovies = async () => {
    this.setState({ loading: true });
    let title = this.state.input
    const response = await axios.get(`https://www.omdbapi.com/?apikey=82e4f84e&s=${title}`);
    let results = response.data.Search
    this.setState({ displayedResults: results, loading: false })
    console.log(this.state.displayedResults)
  }

  handleSearch = (e) => {
    let target = e.target.value;
    this.setState({ input: target }, () => this.fetchMovies());

  }

  handleMovieClick = (id, clickedMovie) => {
    // const index = this.state.displayedResults.findIndex(result=>{
    //   return result.imdbID === id
    // })
    // console.log(index)

    const newMovie = Object.assign({}, clickedMovie)
    const index = this.state.list.findIndex(result => {
      return result.imdbID === id
    })

    if (index === -1) {
      const list = [...this.state.list, newMovie]

      this.setState({
        list: list
      })
    }
    console.log(this.state.list)
    console.log(newMovie)

    //this.handleNomination(id)
    //console.log(this.state.results)
  }
  removeMovieHandler = (id) =>{
    this.setState(state=>({
      list: state.list.filter(item=> item.imdbID !== id)
    }))
  }
  render() {
    return (
      <div className={classes.Shoppies}>
        <div className={classes.Nav}>
          <h1>The Shoppies</h1>
          <Navbar className={classes.TopBar} sticky="top">
            <SearchBar value={this.state.input} changed={this.handleSearch} click={this.fetchMovies} />
            <Nominations list={this.state.list} removeMovie= {this.removeMovieHandler}/>
          </Navbar>
        </div>
        <MovieResults input={this.state.input} click={this.handleMovieClick}
          list={this.state.list} displayedResults={this.state.displayedResults} />
      </div>
    )
  }
}