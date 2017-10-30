import { orderBy } from 'lodash';

// Get Visible expenses 
export default (expenses, {text, sortBy, order, startDate, endDate}) => {
  let filteredExpenses = expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate,
    endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate,
    textMatch = expense.description.toLowerCase().search(text.toLowerCase()) >= 0;

    return startDateMatch && endDateMatch && textMatch;
  })

  return orderBy(filteredExpenses, sortBy, order);
};