import React from 'react';
import './App.css';
import Header from './Header/Header';
import Sidebar from './Body/Sidebar';
import Feed from './Body/Feed';
import Widgets from './Body/Widgets';
import Login from './Login/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [user, dispatch] = useStateValue();
console.log("LLLLL:::",user)
  return (
    <div className="app">
      {!user ? (
        <Login />
        ) : (
        <>
        <Header/>

      <div className="app_body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      </>
      )}
    </div>
  );
}

export default App;
