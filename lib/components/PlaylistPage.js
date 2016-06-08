import React from 'react';
import SearchBar from './SearchBar';

const INPUT_KLASS = "spotify-search"
const INPUT_PLACEHOLDER = "Search Spotify"

export default React.createClass({
  getInitialState() {
    return {
      playlistTracks : {},
      searchResults : {},
      query : ""
    }
  },

  handleSearch(e) {
    let queryValue = e.target.value;
    this.setState({query: queryValue});
    this.searchSpotify(queryValue);
  },

  searchSpotify(queryValue) {
    console.log(queryValue);
  },

  render() {
    return (
      <div>
        <SearchBar klass={INPUT_KLASS}
                  placeholder={INPUT_PLACEHOLDER} handleChange={this.handleSearch}
        />
      </div>
    )
  }
});
