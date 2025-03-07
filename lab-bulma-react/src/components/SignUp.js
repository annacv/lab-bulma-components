import React, { Component } from 'react'
import Navbar from './Navbar.js'
import FormField from './FormField.js'
import CoolButton from './CoolButton.js'


class SignUp extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="section">
          <div className="container">
            <div className="column is-half-tablet is-two-fifths-desktop is-offset-one-quarter-desktop">
              <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
              <FormField label="Email" type="email" placeholder="e.g alexsmith@gmail.com" />
            </div>
            <div className="column is-two-fifths is-offset-one-quarter-desktop">
              <CoolButton isSmall isDark className="is-rounded" children="Submit" />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default SignUp