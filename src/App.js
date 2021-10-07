import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ListCard from './components/ListCard';

function App() {
  const [swInfo, setSwInfo] = useState(undefined);

  const fetchInfo = async (url) => {
    let response = [];
    try {
      const result = await fetch(url);
      response = await result.json();
    } catch (error) {
      console.log(`failed to fetch: ${error}`);
    }
    setSwInfo(response.results);
  };

  return (
    <div className="app">
      <header>
        <NavBar fazFetch={fetchInfo} />
        <ListCard swInfo={swInfo} />
      </header>
    </div>
  );
}

export default App;
