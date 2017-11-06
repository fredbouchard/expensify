import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
 
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
  console.log(state);
});

store.dispatch(addExpense({
  description: 'Water bill',
  note: 'due for next month',
  amount: 4823,
  createdAt: 1509994774000
}));

store.dispatch(addExpense({
  description: 'Gas bill',
  note: 'due this month',
  amount: 12423,
  createdAt: 1509994507400
}));

store.dispatch(addExpense({
  description: 'Rent',
  note: 'due this month',
  amount: 1575,
  createdAt: 1509996074000
}));


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, appRoot);