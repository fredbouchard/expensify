// Higher Order Component (HOC) - A component that renders another component
// Reuse code
// Render hijacking
// Props manipulaiotn
// Abstract state.

import React from 'react';
import ReactDOM from 'react-dom';

const appRoot = document.getElementById('app');

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

// Passing props into the childs components
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is a private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};


const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>You need to be authenticated to see this information</p>
      )}
    </div>
  );
}

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, appRoot);
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, appRoot);