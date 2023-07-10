import React from "react";
import './FilterExpense.css';
const FilterExpense = (props) => {
    const YearChangeHandler = (e) => {
        props.onChange(e.target.value);
    };
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.value} onChange={YearChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2023</option>
                </select>
            </div>
        </div>
    );
};
export default FilterExpense;