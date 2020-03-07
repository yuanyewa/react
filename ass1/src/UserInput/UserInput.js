import React from 'react';

function UserInput(props) {
    const style = {
        border: '2px solid red'
    };
    return (
        <input style = {style} type="text" onChange={props.changed} value={props.value}/>
    );
}

export default UserInput;