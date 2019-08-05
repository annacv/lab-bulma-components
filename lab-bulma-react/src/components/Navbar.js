import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
            </a>
          </div>

          <div class="navbar-start">
            <a class="navbar-item" href="https://bulma.io/">
              Home
              </a>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="button is-info" href="/">
                    <span>Login</span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-primary" href="/">
                    <span>Signup</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;