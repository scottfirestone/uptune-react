import React from 'react';
import Request from 'superagent';

import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import SearchResults from './SearchResults';

const INPUT_KLASS = "spotify-search"
const INPUT_PLACEHOLDER = "Search Spotify"

export default React.createClass({
  getInitialState() {
    return {
      playlistTracks : {},
      searchResults : [],
      hasSearchResults : false,
    }
  },

  handleSearch(e) {
    e.preventDefault();
    if (e.target.value) {
      let queryValue = e.target.value;
      this.searchSpotify(queryValue);
      this.setState({ hasSearchResults : true });
    } else {
      this.setState({ hasSearchResults : false });
    }
  },

  searchSpotify(query) {
    let self = this;
    let limit = "5"
    let type = "track"
    Request
      .get("https://api.spotify.com/v1/search")
      .query({ q : query })
      .query({ limit : limit })
      .query({ type : type })
      .end(function(err, res){
        if (err) { console.log(err, "err") }
        let tracks = res.body.tracks.items;
        self.setState({ searchResults : tracks })
      });
  },
  // addToPlaylist(track) {
  //   let timestamp =(new Date()).getTime();
  //   this.state.playlistTracks['playlistTrack-' + timestamp] = track;
  //   this.setState({ playlistTracks : this.state.playlistTracks })
  // },
  //

  render() {
    return (
      <div>
        <SearchBar klass={INPUT_KLASS}
                   placeholder={INPUT_PLACEHOLDER}
                   handleChange={this.handleSearch}
        />
      {this.state.hasSearchResults ? <SearchResults results={this.state.searchResults} /> : "Search for songs"}
      </div>
    )
  }
});
