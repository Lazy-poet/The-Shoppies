import React, { Component } from 'react';
import MovieResult from './MovieResult/MovieResult';
import classes from './MovieResults.module.css'

class MovieResults extends Component {
  state={
    results: this.props.displayedResults,
    list: [],
    nominiated: false
  }
  
  showMovieHandler = (movie)=>{
    return <MovieResult 
    title = {movie.Title}
    year={movie.Year}
    movie={movie}
    src= {movie.Poster}
    id={movie.imdbID}
    clicked={this.props.clicked}
    results={this.props.displayedResults}
    click={this.props.click}
    nominated={this.state.nominated}
    list={this.props.list}
    disabled={movie.disabled}
    />
  }
  render(){
    
    let displayedResults= <td>Start typing in the search bar to display movies...</td>
    if (this.props.displayedResults && this.props.input !== ''){
      displayedResults = this.props.displayedResults.map(movie=>{
        movie.disabled = false;
        return this.showMovieHandler(movie)
      })
    
    }
    else if( this.props.input !== '') displayedResults = <td>No match found</td>
  return (

      <div className={classes.Body}>
      {displayedResults}
      </div>

  );
  }
};

export default MovieResults;