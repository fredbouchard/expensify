import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpense = (props) =>  {
	return (	
		<div>	
			<ExpenseForm
				action='Save'
				expense={props.expense}
				onSubmit={(expense) => {
					props.dispatch(editExpense({id: props.expense.id, updates: expense}));
					props.history.push('/');
				}} />
				<button
					type="button" 
					className="Button Button-danger"
					onClick={
						() => {
							props.dispatch(removeExpense({id: props.expense.id}));
							props.history.push('/');
						}
					}>Remove</button>
				</div>
	)
};

const mapStateToProps = (state, ownProps) => {
	return {
		expense: state.expenses.find((expense) => ( expense.id === ownProps.match.params.id ))
	}
}

export default connect(mapStateToProps)(EditExpense);