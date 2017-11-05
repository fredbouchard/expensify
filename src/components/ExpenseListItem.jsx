import React from 'react';

export default ({description, amount, createdAt}) => (
  <div>
    <h3>{description}</h3>
    <pre>{amount} - {createdAt}</pre>
  </div>
);