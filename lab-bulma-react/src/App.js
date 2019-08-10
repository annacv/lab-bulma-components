import React from 'react';
import Navbar from './components/Navbar.js';
import FormField from './components/FormField.js';
import CoolButton from './components/CoolButton.js';
import SignUp from './components/SignUp.js';
import Message from './components/Message.js'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar text="Home" />
      <section className="section">
        <div className="container">
          <div className="column is-half-tablet is-two-fifths-desktop is-offset-one-quarter-desktop">
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g alexsmith@gmail.com" />
          </div>
          <div className="column is-two-fifths is-offset-one-quarter-desktop">
            <CoolButton isSmall isDanger className="is-rounded" children="Button 1" />
            <CoolButton isSmall isSuccess children="Button 2" />
          </div>
        </div>
      </section>
      <SignUp />
      <section className="section">
        <div className="container">
          <Message className="message is-info" title="Hello World" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " highlighted="Pellentesque risus mi" />
        </div>
      </section>
    </div>
  );
}

export default App;
