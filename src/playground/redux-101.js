import { createStore } from 'redux';

// Equivalent of below with object destructuring
// const incrementCount = (payload = {}) => ({ 
//   type:  'INCREMENT',
//   incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

// ACTION GENERATORS - functions that return action object
const incrementCount = ({ incrementBy = 1 } = {}) => ({ 
  type:  'INCREMENT',
  incrementBy
}),
decrementCount = ({ decrementBy = 1 } = {}) => ({ 
  type:  'DECREMENT',
  decrementBy
}),
setCount = ({count}) => ({
  type: 'SET',
  count
}),
resetCount = () => ({
  type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action
const countReducer = (state = { count: 0 }, action) => {
  console.log('running', action);
  switch (action.type) {
    case 'INCREMENT': 
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT': 
      return {
        count: state.count - action.decrementBy
      }
    case 'SET': 
      return {
        count: action.count
      }
    case 'RESET': 
      return {
        count: 0
      }
    default:
      return state;
  }
};


const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount());

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(resetCount());

store.dispatch(setCount({count: 101}));

// Unsubsribe to a subcribe store
unsubscribe();
