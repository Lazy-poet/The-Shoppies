import React, { Component } from 'react';
import axios from 'axios'
import SearchBar from '../../components/SearchBar/SearchBar';
import Nominations from '../../components/Nominations/Nominations'
import MovieResults from '../../components/MovieResults/MovieResults'
import classes from './Shoppies.module.css'
export default class Shoppies extends Component {
  state={
    input: '',
    displayedResults: [],
    loading: false,
    list:[]
  }
  fetchMovies = async () =>{
    this.setState({loading: true});
    let title= this.state.input
    const response = await axios.get(`https://www.omdbapi.com/?apikey=82e4f84e&s=${title}`);
    let results = response.data.Search
    this.setState({displayedResults: results, loading: false })
  console.log(this.state.displayedResults)
  }
  
  handleSearch=(e)=>{
    let target = e.target.value;
    this.setState({input: target}, ()=>this.fetchMovies());
    
  }

  handleMovieClick =(id, clickedMovie) =>{
    // const index = this.state.displayedResults.findIndex(result=>{
    //   return result.imdbID === id
    // })
    // console.log(index)
const newMovie = Object.assign({}, clickedMovie)
if(!this.state.list.some(movie=> movie.id === newMovie.id)){
    const list = [...this.state.list, newMovie]
    this.setState({
      list: list
    })
  }

    // console.log(this.state.list)
    // console.log(list)

    //this.handleNomination(id)
    //console.log(this.state.results)
  }
  render() {
    return (
      <div className={classes.Shoppies}>
        <h1>The Shoppies</h1>
        <div className={classes.TopBar}>
        <SearchBar value={this.state.input} changed={this.handleSearch}  click={this.fetchMovies}/>
        <Nominations list={this.state.list}/>
        </div>
        <MovieResults input={this.state.input} click={this.handleMovieClick} 
        list={this.state.list} displayedResults={this.state.displayedResults} />
      </div>
    )
  }
}