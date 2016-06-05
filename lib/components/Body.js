import React from 'react';

import LandingPage from './LandingPage';
import UserPage from './UserPage';

export default React.createClass({
  getInitialState() {
    return { userAuthenicated: false }
  },

  render() {
    let Page = this.state.userAuthenicated ? <UserPage /> : <LandingPage />;

    return (
      <div>
        {Page}
      </div>
    )
  }
});
