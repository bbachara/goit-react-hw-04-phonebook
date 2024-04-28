import React from 'react';
import PropTypes from 'prop-types';

function Filter({ filter, handleChange }) {
  return (
    <input
      className="search-input"
      type="text"
      name="filter"
      placeholder="Search by name"
      value={filter}
      onChange={handleChange}
    />
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
