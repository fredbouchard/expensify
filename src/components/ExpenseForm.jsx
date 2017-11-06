import React from 'react';

export default class ExpenseForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      description: '',
      note: '',
      amount: ''
    }
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onNoteChange = this.onNoteChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
  }

  onDescriptionChange(e) {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange(e) {
    e.persist()
    this.setState(() => ({ note: e.target.value }));
  }

  onAmountChange(e) {
    const amount = e.target.value;

    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }

  render () {
    return (
      <form>
        <input
          type="text"
          placeholder="Description"
          value={this.state.description}
          onChange={this.onDescriptionChange}
          autoFocus />
        <input
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}/>
        <textarea
          placeholder="Note (optional)"
          value={this.state.note}
          onChange={this.onNoteChange}>
        </textarea>
        <button>Add Expense</button>
      </form>
    )
  }
}

