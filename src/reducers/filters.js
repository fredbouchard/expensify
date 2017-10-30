// Filter Reducer
const filterReducerDefaultState = {
  text: '',
  sortBy: 'createdAt', // Date or Amount.
  startDate: undefined,
  endDate: undefined
};

export default (state = filterReducerDefaultState, action) => {
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