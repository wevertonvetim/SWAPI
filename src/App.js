import React from 'react';
import { fetch } from 'node-fetch';
import NavBar from './components/NavBar';

function App() {
  const fetchInfo = async (url) => {
    try {
      const result = await fetch(url);
      const response = await result.json();
      console.log(result);
      console.log(response);
    } catch (error) {
      console.log(`failed to fetch: ${error}`);
    }
  };

  return (
    <div className="app">
      <header>
        <NavBar fazFetch={fetchInfo} />
      </header>
    </div>
  );
}

export default App;
