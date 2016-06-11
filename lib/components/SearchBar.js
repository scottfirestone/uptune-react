import React from 'react';

export default React.createClass({
  render() {
    return(
      <div>
        <input className={this.props.klass}
               onKeyUp={this.props.handleChange}
               placeholder={this.props.placeholder}
        />
      </div>
    )
  }
})
