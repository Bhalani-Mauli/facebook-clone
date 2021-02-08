import React from 'react';
import './App.css';
import Header from './Header/Header';
import Sidebar from './Body/Sidebar';
import Feed from './Body/Feed';

function App() {
  return (
    <div className="app">
      <Header/>

      <div className="app_body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
