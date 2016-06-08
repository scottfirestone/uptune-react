import React from 'react';
import SearchBar from './SearchBar';

const INPUT_KLASS = "spotify-search"
const INPUT_PLACEHOLDER = "Search Spotify"

export default React.createClass({
  getInitialState() {
    return {
      playlistTracks : {},
      searchResults : {}
    }
  },

  handleSearch() {
    console.log("stuff is happening!!")
  },

  render() {
    return (
      <div>
        <SearchBar klass={INPUT_KLASS} placeholder={INPUT_PLACEHOLDER} handleChange={this.handleSearch} />
      </div>
    )
  }
});
