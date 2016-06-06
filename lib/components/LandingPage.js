import React from 'react';

import Brand from './Brand';
import Instructions from './Instructions';
import Button from './Button';

const BUTTON_TEXT = "Login with Spotify";
const BUTTON_KLASS = "spotify-button";

export default React.createClass({
  handleLogInWithSpotify() {
    console.log('log in with spotify');
  },

  render() {
    return (
      <div>
        <Brand />
        <Instructions />
        <Button klass={BUTTON_KLASS} text={BUTTON_TEXT} handleClick={this.handleLogInWithSpotify} />
      </div>
    )
  }
});
