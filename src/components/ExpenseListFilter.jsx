import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDatem, setStartDate, setEndDate } from '../actions/filters';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {
  constructor (props) {
    super(props);

    this.sortingOrder = 'asc';
    this.state = {
      calendarFocused: null
    }

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onDrpFocusChange = this.onDrpFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }

  onDrpFocusChange(calendarFocused) {
    this.setState(() => ({ calendarFocused }));
  }

  render() {  
    console.log(this.props)
    return (
      <fieldset>
        <input 
          type="text"
          value={this.props.filters.text}
          onChange={
            (e) => {
              this.props.dispatch(setTextFilter(e.target.value));
            }
          }
        />  
        <legend>Filter by:</legend>
        <select 
          value={this.props.filters.sortBy}
          onChange={
            (e) => {
                switch(e.target.value) {
                  case 'date':
                    this.props.dispatch(sortByDate(this.sortingOrder));
                    break;
                  case 'amount':
                    this.props.dispatch(sortByAmount(this.sortingOrder));
                    break;
                }
            }
          }
        >
          <option value="date">Date</option>
          <option value="amount">Amout</option>
        </select>
        <select
          value={this.props.filters.order}
          onChange={
            (e) => {
              this.sortingOrder = e.target.value;
              switch(this.props.filters.sortBy){
                case 'createdAt':
                  this.props.dispatch(sortByDate(this.sortingOrder));
                  break;
                case 'amount':
                  this.props.dispatch(sortByAmount(this.sortingOrder));
                  break;
              }
            }
          }>
          <option value="asc">Asendent</option>
          <option value="desc">Descendent</option>
        </select>
        <DateRangePicker 
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onDrpFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}/>
      </fieldset>
    )    
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters);