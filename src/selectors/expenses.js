import { orderBy } from 'lodash';
import moment from 'moment';

// Get Visible expenses 
export default (expenses, {text, sortBy, order, startDate, endDate}) => {
  let filteredExpenses = expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt),
    startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true,
    endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true,
    textMatch = expense.description.toLowerCase().search(text.toLowerCase()) >= 0;

    return startDateMatch && endDateMatch && textMatch;
  })

  return orderBy(filteredExpenses, sortBy, order);
};