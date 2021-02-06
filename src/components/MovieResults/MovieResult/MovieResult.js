import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import classes from './MovieResult.module.css';

class MovieResult extends Component{
  state={
    results: this.props.results,
   nominated: false,
   list: []
  }
  handleNomination = (id) =>{
//     const index = this.state.results.findIndex(result=>{
//       return result.imdbID === id
//     })
//     console.log(index)
// const user = Object.assign({}, this.state.results[index])
// const list = [...this.state.list, user]
// this.setState({
//   list: list
// })

// console.log(this.state.list)
// console.log(user)
//   return(
//     <NominationList year={user.Year} title={user.Title}/>
  // )
    // const list = [...this.state.list, id]
    // this.setState({
    //   list: list
    // })
    // console.log(this.state.list)
    // console.log(list)
    // console.log(id)
  }
  handleClick =(id, movie) =>{
    
     this.setState({nominated: true},
      )
      this.props.click(id, movie)
      this.disableButton()
  }
  //   console.log(this.state.list)
  //   console.log(list)
  //   console.log(id)
  //   //this.handleNomination(id)
  //   //console.log(this.state.results)
  // }
 disableButton=()=>{
   if(this.props.list.length >= 5){
     this.setState({
       disabled: true
     })
   }
 }
render(){

  const nominated= this.props.list.some(item=> this.props.results.includes(item));
  console.log(nominated)
 const disabled = {}
 if (this.props.list.length >= 5){
   disabled.disabled = true
 }
 else{
   disabled.disabled = false
 }
  return(
<Card className={classes.Card}>
        <CardImg top  width="250px" src={this.props.src} alt="Image unavailable" />
        <CardBody>
          <CardTitle tag="h5">{this.props.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{this.props.year}</CardSubtitle>
        <Button 
        {...disabled}
        onClick={()=>this.handleClick(this.props.id, this.props.movie)}
        color={this.state.nominated ? "success" : "success"}
       // color={nominated ? "danger" : "success"}
        >
         {this.state.nominated ? 'Nominated' : 'Nominate'}
          </Button>
        </CardBody>
      </Card> 
      )
}
}

export default MovieResult;