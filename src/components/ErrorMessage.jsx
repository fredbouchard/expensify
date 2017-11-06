import React from 'react';

const ErrorMessage = props => (
  <div className={`ErrorMessage ${props.type && `ErrorMessage--${props.type}`}`}>
    {props.message && <p>{props.message}</p>}
  </div>
)

export default ErrorMessage;