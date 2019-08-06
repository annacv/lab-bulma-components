import React, { Component } from 'react'

class Message extends Component {
  render() {
    return (
      <article className={this.props.className}>
        <div className="message-header">
          <p>{this.props.title}</p>
          <button class="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          {this.props.text}
          <strong>{this.props.highlighted}</strong>
        </div>
      </article>
    )
  }
}

export default Message