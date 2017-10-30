import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
import { orderBy } from 'lodash';

// ADD_EXPENSE
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});
// EDIT_EXPENSE
const editExpense =  ({ id, updates = {} } = {}) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// Expenses Reducer
const expensesReducerDefaultState = [],
expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => ( id !== action.id));
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if ( expense.id === action.id ) {
          return {
            ...expense,
            ...action.updates
          };
        }

        return expense;
      
      });
    default:
      return state;
  }
};

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});
// SET_START_DATE
const setStartDate = ( startDate = undefined ) => ({
  type: 'SET_START_DATE',
  startDate
})
// SET_END_DATE
const setEndDate = ( endDate = undefined ) => ({
  type: 'SET_END_DATE',
  endDate
})
// SORT_BY_DATE
const sortByDate = (order = 'asc') => ({
  type: 'SORT_BY_DATE',
  sortBy: 'createdAt',
  order
});
// SORT_BY_AMOUNT
const sortByAmount = (order = 'asc') => ({
  type: 'SORT_BY_AMOUNT',
  sortBy: 'amount',
  order
});

// Filter Reducer
const filterReducerDefaultState = {
  text: '',
  sortBy: 'createdAt', // Date or Amount.
  startDate: undefined,
  endDate: undefined
},
filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: action.sortBy,
        order: action.order
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: action.sortBy,
        order: action.order
      }
    default:
      return state;
  }
};

// Get Visible expenses 
const getVisibleExpenses = (expenses, {text, sortBy, order, startDate, endDate}) => {
  let filteredExpenses = expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate,
    endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate,
    textMatch = expense.description.toLowerCase().search(text.toLowerCase()) >= 0;

    return startDateMatch && endDateMatch && textMatch;
  })

  return orderBy(filteredExpenses, sortBy, order);
};

// Store Creation
const store = createStore(
  combineReducers({ 
    expenses: expensesReducer,
    filters: filterReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

// store.dispatch(setStartDate(100));
// store.dispatch(setEndDate(1000));
// store.dispatch(setTextFilter('C'));


const expense1 = store.dispatch(addExpense({ 
  description: 'House',
  note: 'Downpayment on the house',
  amount: 1551.23,
  createdAt: 125
}));
const expense2 = store.dispatch(addExpense({ 
  description: 'Coffee',
  note: 'Coffee paid by Vince',
  amount: 2.50,
  createdAt: 100
}));
const expense3 = store.dispatch(addExpense({ 
  description: 'Car',
  note: 'Payment on the car',
  amount: 500.00,
  createdAt: 200
}));

// store.dispatch(sortByDate());

// store.dispatch(removeExpense({ id: expense1.expense.id }));
// store.dispatch(editExpense({id: expense2.expense.id, updates: { amount: 4.00}}));



// store.dispatch(sortByAmount());
store.dispatch(sortByDate('desc'));

