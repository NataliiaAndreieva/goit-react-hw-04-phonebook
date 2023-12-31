import React from "react";
import PropTypes from 'prop-types';

const Filter = ({value, onChange}) => (
    <label>
        Find contacts by name
        <input type='text' value={value} onChange={onChange} placeholder="Enter name" autoComplete="on"></input>
    </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;