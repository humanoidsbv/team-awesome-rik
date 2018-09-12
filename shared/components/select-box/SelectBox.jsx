import React from 'react';
import PropTypes from 'prop-types';

import './select-box.scss';

const SelectBox = ({
  optionsValues, options, onChange, value
}) => {
  const optionsList = options.map((option, index) => (
    <option
      key={`${index + option}`}
      value={optionsValues[index]}
    >{option}
    </option>
  ));

  return (
    <div className="select-box__wrapper">
      <select
        className="select-box"
        onChange={onChange}
        type="select"
        value={value}
      >
        {optionsList}
      </select>
    </div>
  );
};

SelectBox.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  optionsValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default SelectBox;
