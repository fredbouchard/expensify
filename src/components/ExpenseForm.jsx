import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import ErrorMessage from './ErrorMessage';

export default class ExpenseForm extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      sdpFocused: false,
      error: {}
    }

    // Define the biding methods
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onNoteChange = this.onNoteChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onSdpFocusChange = this.onSdpFocusChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }

  onDateChange(createdAt) {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }  
  };

  onSdpFocusChange({focused}) {
    this.setState(() => ({ sdpFocused: focused }))
  };

  onSubmit(e) {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => (
          { 
            error: {
              type: 'error',
              message: 'Please you need at least to give the description and the amount'
            }          
          }
        )
      ) 
    } else {
      this.setState(() => ({ error: {} }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }

  render () {
    return (
      <div className="main">
        {Object.keys(this.state.error).length !== 0 && 
          <ErrorMessage
          type={this.state.error.type}
          message={this.state.error.message} />
        }
        <form 
          className="ExpenseForm"
          onSubmit={this.onSubmit}>
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
          <button 
            className="Button Button-primary"
            type="submit">{`${this.props.action} Expense`}</button>
        </form>
      </div>
    )
  }
}

