import React from 'react';
import { connect } from 'react-redux';
import ExpenstListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {
      props.expenses.map(
        (expense, index) => (
            <ExpenstListItem 
              {...expense}
              key={expense.id}/>
        )
      )
    }       
  </div>
);
  


const mapStateToProps = (state, ownProps) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  }
}

export default connect(mapStateToProps)(ExpenseList);