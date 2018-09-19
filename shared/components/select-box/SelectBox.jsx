import React from 'react';
import PropTypes from 'prop-types';

import './select-box.scss';

const SelectBox = ({
  name, optionValues, options, onChange, type, value, ...props
}) => (
  <div className={`select-box select-box${type ? `--${type}` : '--default'} `}>
    <select
      className={`select-box__button select-box__button${type ? `--${type}` : '--default'} `}
      name={name}
      onChange={onChange}
      type="select"
      value={value}
      {...props}
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

SelectBox.defaultProps = {
  type: ''
};

SelectBox.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  optionValues: PropTypes.arrayOf(PropTypes.oneOfType(
    [PropTypes.string,
      PropTypes.number]
  )).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType(
    [PropTypes.string,
      PropTypes.number]
  ).isRequired
};

export default SelectBox;
