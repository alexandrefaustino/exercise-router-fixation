// arquivo Users.js
import React from 'react';

const Users = (props) => {
  const { id } = props.match.params;
  const { greetingMessage } = props
  return (
    <div>            
      <h2> Users </h2>
      <p> {greetingMessage}, this is my awesome Users component. Code number: {id}</p>
    </div>
  )
};

export default Users;
