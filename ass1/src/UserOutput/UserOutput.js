import React from 'react';
import './UserOutput.css'

function UserOutput(props) {
  return (
      <div className="UserOutput">
          <p>This is Me</p>
          <p>This is Also Me</p>
          <p>My name is {props.username}</p>
      </div>
  );
}

export default UserOutput;