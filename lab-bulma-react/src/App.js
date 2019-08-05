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
      <CoolButton />
    </div>
  );
}

export default App;
