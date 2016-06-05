import React from 'react';

import LandingPage from './LandingPage';
import UserPage from './UserPage';

export default React.createClass({
  getInitialState() {
    return { userAuthenicated: true }
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
