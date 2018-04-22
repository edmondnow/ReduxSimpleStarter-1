import React, { Component } from 'react';


class SearchBar extends Component {
  render(){
    return <input onChange ={this.onInputChange} />; 
  }

  onInputChange(){
    console.log(event.target.value);
  } 
}

export default SearchBar;
