import React from 'react';

import PlaylistPage from './PlaylistPage';
import Instructions from './Instructions';
import Button from './Button';
import Brand from './Brand';

const BUTTON_TEXT = "Start a New Playlist";
const BUTTON_KLASS = "spotify-button";

export default React.createClass({
  handleCreatePlaylist() {
    console.log('create a playlist');
  },

  render() {
    return (
      <div>
        <Brand />
        <Instructions />
        <Button klass={BUTTON_KLASS} text={BUTTON_TEXT} handleClick={this.handleCreatePlaylist} />
      </div>
    )
  }
});
