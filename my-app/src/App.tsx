import React from 'react';

import './App.css';
import AppPropsByType from './components/AppProps';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <AppPropsByType message={"harikrishna"} />
       
      </header>
    </div>
  );
}

export default App;
