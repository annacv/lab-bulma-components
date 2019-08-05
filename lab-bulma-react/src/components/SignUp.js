import React, { Component } from 'react'
import Navbar from './Navbar.js'
import FormField from './FormField.js'
import CoolButton from './CoolButton.js'


class SignUp extends Component {
  render() {
    return (
      <div className="container">
        <Navbar text="Signup!" />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g alexsmith@gmail.com" />
        <CoolButton className="button is-rounded is-small is-success" value="Submit" />
      </div>
    )
  }
}

export default SignUp