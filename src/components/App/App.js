import React from 'react';
import './App.scss';

import Header from '../Header'
import Gallery from '../Gallery'

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <main className="main-content">
        <Gallery />
      </main>
    </div>
  );
}

export default App;
