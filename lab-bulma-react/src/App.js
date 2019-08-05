import React from 'react';
import Navbar from './components/Navbar.js';
import FormField from './components/FormField.js';
import CoolButton from './components/CoolButton.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FormField />
      <CoolButton className="button is-rounded my-class is-danger is-small" value="Button 1" />
      <CoolButton className="button is-small is-success" value="Button 2" />
    </div>
  );
}

export default App;
