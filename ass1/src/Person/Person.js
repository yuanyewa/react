import React from 'react';

function Person(props) {
    return (
        <div>
            <p onClick={props.click}>My name is: {props.name}</p>
            <p>My age is: {props.age}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default Person;