import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
 
const ExpenseListItem = ({id, description, amount, createdAt, dispatch}) => (
  <div>
    <h3>{description}</h3>
    <pre>{amount} - {createdAt}</pre>
    <button onClick={() => {
       dispatch(removeExpense({id}));
    }}>X</button>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    expenses: state.expenses
  }
}

export default connect(mapStateToProps)(ExpenseListItem);