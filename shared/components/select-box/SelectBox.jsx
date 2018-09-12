import React from 'react';
import PropTypes from 'prop-types';

import './select-box.scss';

const SelectBox = ({
  optionValues, options, onChange, value
}) => (
  <div className="select-box">
    <select
      className="select-box__button"
      onChange={onChange}
      type="select"
      value={value}
    >
      {options.map((option, index) => (
        <option
          key={`${index + option}`}
          value={optionValues[index]}
        >{option}
        </option>
      ))}
    </select>
  </div>
);

SelectBox.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  optionValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default SelectBox;
