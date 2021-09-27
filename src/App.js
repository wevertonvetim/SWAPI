import React from 'react';

import './components/Card/Card';
import './css/App.css';
import './css/index.css';

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

/* import { Button } from '@material-ui/core';
const buttonClick = () => {
  console.log('click');
};
<Button variant="contained" color="primary" onClick={buttonClick}>
Click-me
</Button> */
