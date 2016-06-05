import React from 'react';

import PlaylistPage from './PlaylistPage';
import Instructions from './Instructions';
import Button from './Button';

const BUTTON_TEXT = "Start a New Playlist";
const BUTTON_KLASS = "spotify-button";

export default React.createClass({
  handleCreatePlaylist() {
    console.log('in create playlist')
  },

  render() {
    return (
      <div>
        <Instructions />
        <Button klass={BUTTON_KLASS} text={BUTTON_TEXT} handleClick={this.handleCreatePlaylist} />
      </div>
    )
  }
});
