import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
const API_KEY = require('../config/keys').key;


//Create  a new component. This component should produce some HTML
const App = () => {
  return (
  <div>
    <SearchBar /> 
  </div>
  )

}



//Take this component's generated HTML and put it
//on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container')); //when you render I want you to insert the html in this element