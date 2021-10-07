import React, { useState } from 'react';

import NavBar from './components/NavBar';

function App() {
  const [card, setCard] = useState([]);
  const fazFetch = (url) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setCard(data);
        console.log(card);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="app">
      <header>
        <NavBar fazFetch={fazFetch} />
      </header>
    </div>
  );
}

export default App;
