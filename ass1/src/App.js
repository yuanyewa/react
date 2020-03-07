import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

function App() {
  const [mystate, setMystate] = useState({
    username: 'yuanye'
  });
  function nameChangeHandler(event) {
    setMystate({username: event.target.value});
  }
  return (
    <div className="App">
      <header className="App-header">
        <UserInput changed={nameChangeHandler} value={mystate.username}/>
        <UserOutput username={mystate.username}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
