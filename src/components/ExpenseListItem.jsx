import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
 
const ExpenseListItem = (
    {
      id,
      description,
      note,
      amount,
      createdAt
    }
  ) => (
  <div>
    <h3>{description}</h3> - <Link to={`/edit/${id}`}>Edit</Link>
    <p>{`$${(amount / 100).toFixed(2).toString()}`} - {moment(createdAt).format('MMM Do, YYYY')}</p>
    {note && <pre>{note}</pre>}
  </div>
);

export default ExpenseListItem;