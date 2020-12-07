import React, { Component } from 'react'

export class Fave extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFave: false
    }
  }

  handleClick = event => {
    event.stopPropagation()
    this.setState({
      isFave: !this.state.isFave
    })
  }
  render() {
    const isFave = this.state.isFave ? "remove_from_queue" : "add_to_queue"
    return (
      <div className={`film-row-fave ${isFave}`} onClick={this.handleClick}>
        <p className="material-icons">{isFave}</p>
      </div>
    )
  }
}

export default Fave
