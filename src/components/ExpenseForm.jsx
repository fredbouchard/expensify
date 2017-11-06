import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      description: '',
      note: '',
      amount: '',
      createdAt: moment(),
      sdpFocused: false
    }

    // Define the biding methods
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onNoteChange = this.onNoteChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onSdpFocusChange = this.onSdpFocusChange.bind(this);
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

  onDateChange(createdAt) {
    this.setState(() => ({ createdAt }))
  };

  onSdpFocusChange({focused}) {
    this.setState(() => ({ sdpFocused: focused }))
  };

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
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.sdpFocused}
          onFocusChange={this.onSdpFocusChange}
          numberOfMonths={1} 
          isOutsideRange={() => (false)} />
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

