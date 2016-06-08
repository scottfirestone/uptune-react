import React from 'react';

export default React.createClass({
  render() {
    return(
      <div>
        <input className={this.props.klass}
               onChange={this.props.handleChange}
               placeholder={this.props.placeholder}
        />
      </div>
    )
  }
})
