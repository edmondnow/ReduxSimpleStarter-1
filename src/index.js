import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
import _ from 'lodash';

const API_KEY = require('../config/keys').key;



//Create  a new component. This component should produce some HTML
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards')
  }

  videoSearch(term){
      YTSearch({key: API_KEY, term: term}, (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      //ES6 this.setState({ videos: videos });
      });
  }


  render(){
    const videoSearch = _.debounce((term)=> {this.videoSearch(term)}, 300)
    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    )
  }
} 



//Take this component's generated HTML and put it
//on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container')); //when you render I want you to insert the html in this element