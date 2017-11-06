import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

let sortingOrder = 'asc';
const ExpenseListFilters = props => (
  <div>
    <input 
      type="text"
      value={props.filters.text}
      onChange={
        (e) => {
          props.dispatch(setTextFilter(e.target.value));
        }
      }
    />
    <fieldset>
      <legend>Filter by:</legend>
      <select 
        value={props.filters.sortBy}
        onChange={
          (e) => {
              switch(e.target.value) {
                case 'date':
                  props.dispatch(sortByDate(sortingOrder));
                  break;
                case 'amount':
                  props.dispatch(sortByAmount(sortingOrder));
                  break;
              }
          }
        }
      >
        <option value="date">Date</option>
        <option value="amount">Amout</option>
      </select>
      <select
        value={props.filters.order}
        onChange={
          (e) => {
            sortingOrder = e.target.value;
            switch(props.filters.sortBy){
              case 'createdAt':
                props.dispatch(sortByDate(sortingOrder));
                break;
              case 'amount':
                props.dispatch(sortByAmount(sortingOrder));
                break;
            }
          }
        }>
        <option value="asc">Asendent</option>
        <option value="desc">Descendent</option>
      </select>
    </fieldset>
  </div>
);


const mapStateToProps = (state, ownProps) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters);