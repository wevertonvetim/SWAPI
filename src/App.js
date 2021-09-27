import React from 'react';

import Card from './components/Card';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="app">
      <header>
        <NavBar />
        <Card />
      </header>
    </div>
  );
}

export default App;
