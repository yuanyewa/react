import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

function App() {
  const [task1, setTask1] = useState({
    str: "",
    length: 0
  });
  function handleTask1(event) {
    setTask1({
      str: event.target.value,
      length: event.target.value.length
    });
  }
  function removeMe(i) {
    let str = task1.str.split('');
    str.splice(i, 1);
    setTask1({
      str: str.join(''),
      length: str.length
    });
  }
  let charList = task1.str.split("").map((c, i) => <Char char={c} click={() => removeMe(i)}/>);
  return (
    <div className="App">
      <input type="text" value={task1.str} onChange={(event) => handleTask1(event)} />
      {task1.length}
      {task1.str}
      <Validation str={task1.str}/>
      {charList}
    </div>
  );
}

export default App;
