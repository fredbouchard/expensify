import selectExpenses from './expenses';

const mockExpense1 = {
  description: 'Gas bill',
  note: 'due for next month',
  amount: 444,
  createdAt: 1509994774000
};

const mockExpense2 = {
  description: 'Water bill',
  note: 'due for next month',
  amount: 566,
  createdAt: 1509994730000
};

const mockExpenses = [mockExpense1, mockExpense2];

it('should filter by text value', () => {
  const filters = {
    text: 'Gas',
    sortBy: '',
    order: '',
    startDate: '',
    endDate: ''
  }
  const result = selectExpenses(mockExpenses, filters);
 

  expect(result).toEqual([mockExpense1]);
});