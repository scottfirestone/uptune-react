import react from 'react';

export default React.createClass({
  componentDidMount() {
    setInitialState({
      songPosition :  null,
      votes : 1
    })
  },

  render() {
    let details = this.props.details;
    let buttonText = "Vote";
  }
  return (
    <div>
      <li>
        {details.song} by {details.artist} - {details.votes}
      </li>
      <button className="vote"   onClick={this.onButtonClick}>
        {buttonText}
      </button>
    </div>
  )
})
