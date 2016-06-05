import React from 'react';

export default React.createClass({
  // getInitialState() {
  //   return { userAuthenticated: true }
  // },

  render() {
    // let button = this.state.userAuthenticated ? <
    return (
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle-collapsed" data-toggle="collapse" aria-exapanded="false">
              <span className="icon-bar"></span>
            </button>
            UpTune
          </div>
        </div>
      </div>
    )
  }
})
