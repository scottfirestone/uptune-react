import React from 'react';

import LandingPage from './LandingPage';
import UserPage from './UserPage';
import PlaylistPage from './PlaylistPage';

export default React.createClass({
  getInitialState() {
    return { userAuthenicated: false }
  },

  render() {
    let Page = <PlaylistPage />;
    // this.state.userAuthenicated ? <UserPage /> : <LandingPage />;

    return (
      <div>
        {Page}
      </div>
    )
  }
});
