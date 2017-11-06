import { addExpense, removeExpense, editExpense } from './expenses';

const id = 'object-id';
const mockExpense = {
  description: 'Water bill',
  note: 'due for next month',
  amount: 4823,
  createdAt: 1509994774000
};

describe('Action - Expenses',() => {
  it('should setup remove expense action object', () => {
    const action = removeExpense({ id });
    expect(action).toEqual(
      {
        type: 'REMOVE_EXPENSE',
        id: 'object-id'
      }
    );
  });

  it('should setup edit expense action object', () => {
    const action = editExpense({ id , updates: mockExpense});
    expect(action).toEqual(
      {
        type: 'EDIT_EXPENSE',
        id: 'object-id',
        updates: mockExpense
      }
    );
  });


  describe('addExpense', () => {

    it('should setup add expense action object with provided values', () => {
      const action = addExpense(mockExpense);
      
      expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          ...mockExpense,
          id: expect.any(String)
        }
      });
    });

    fit('should setup add expense action object with default values', () => {
      const action = addExpense();
      
      expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
      });
    });
  })
})
