import React from 'react';
import Navbar from './components/Navbar.js';
import FormField from './components/FormField.js';
import CoolButton from './components/CoolButton.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="container">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g alexsmith@gmail.com" />
      </div>
      <CoolButton className="button is-rounded my-class is-danger is-small" value="Button 1" />
      <CoolButton className="button is-small is-success" value="Button 2" />
    </div>
  );
}

export default App;
