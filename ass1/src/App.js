import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'
import Person from './Person/Person';

function App() {
  const [mystate, setMystate] = useState({
    username: 'yuanye'
  });
  function nameChangeHandler(event) {
    setMystate({username: event.target.value});
  }
  const [myshow, setMyshow] = useState({
    showOut : true
  });
  function toggleShowout() {
    setMyshow({showOut: !myshow.showOut})
  }

  const [persons, setPersons] = useState(
    {
      value: [
        {key: 1, name: "xiaohong", age: 100},
        {key: 2, name: "xiaolan", age: 200},
        {key: 3, name: "xiaolv", age: 300}
      ]
    });
    function handleNameChange(event, id) {
      const value = [...persons.value];
      const idx = value.findIndex((p) => p.key === id);
      value[idx].name = event.target.value;
      setPersons({value: value});
    }
    
  function removePerson(i) {;
    const person = [...persons.value];
    person.splice(i, 1);
    setPersons({value: person});
  }
  let content = null;
  if (myshow.showOut) {
    content = (
        persons.value.map((p,i) => {
          return <Person click={() => removePerson(i)} key={p.key} name={p.name} age={p.age} changed={(event) => handleNameChange(event, p.key)}/>;
        })
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <UserInput changed={nameChangeHandler} value={mystate.username}/>
        <button onClick={toggleShowout} />
        {content}
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
