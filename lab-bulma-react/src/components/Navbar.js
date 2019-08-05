import React, { Component } from 'react'
import CoolButton from './CoolButton.js'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="https://bulma.io/">
              {this.props.text}
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <CoolButton className="button is-info" value="Login" />
                </p>
                <p className="control">
                  <CoolButton className="button is-primary" value="Signup" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar