import { 
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByDate,
  sortByAmount,
} from './filters';
import moment from 'moment';


it('should generate set start date action object', () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

it('should generate set end date action object', () => {
  const action = setEndDate(moment(0));

  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

describe('set text filter', () => {
  it('should set a text filter based on value', () => {
    const action = setTextFilter('test');
  
    expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: 'test'
    });
  });

  it('should set a default text filter', () => {
    const action = setTextFilter();
  
    expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: ''
    });
  });
});

it('should sort by date asc', () => {
  const action = sortByDate();

  expect(action).toEqual({
    type: 'SORT_BY_DATE',
    sortBy: 'createdAt',
    order: 'asc'
  });
});

it('should sort by date desc', () => {
  const action = sortByDate('desc');

  expect(action).toEqual({
    type: 'SORT_BY_DATE',
    sortBy: 'createdAt',
    order: 'desc'
  });
});

it('should sort by amount asc', () => {
  const action = sortByAmount();

  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount',
    order: 'asc'
  });
});

it('should sort by amount desc', () => {
  const action = sortByAmount('desc');

  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount',
    order: 'desc'
  });
});



