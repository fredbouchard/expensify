// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SET_START_DATE
export const setStartDate = ( startDate = undefined ) => ({
  type: 'SET_START_DATE',
  startDate
})

// SET_END_DATE
export const setEndDate = ( endDate = undefined ) => ({
  type: 'SET_END_DATE',
  endDate
})

// SORT_BY_DATE
export const sortByDate = (order = 'asc') => ({
  type: 'SORT_BY_DATE',
  sortBy: 'createdAt',
  order
});

// SORT_BY_AMOUNT
export const sortByAmount = (order = 'asc') => ({
  type: 'SORT_BY_AMOUNT',
  sortBy: 'amount',
  order
});
