import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const appRoot = document.getElementById('app');
const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(state, visibleExpenses);
});

store.dispatch(addExpense({
  description: 'Water bill',
  note: 'due for next month',
  amount: 48.23,
  createdAt: 100
}));

store.dispatch(addExpense({
  description: 'Gas bill',
  note: 'due this month',
  amount: 124.23,
  createdAt: 125
}));

store.dispatch(setTextFilter('Bill'));
store.dispatch(setTextFilter('Water'));



ReactDOM.render(<AppRouter />, appRoot);