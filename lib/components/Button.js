import React from 'react';

export default React.createClass({
  render() {
    return(
      <button className={this.props.klass}
              onClick={this.props.handleClick}>
        {this.props.text}
      </button>
    )
  }
});
