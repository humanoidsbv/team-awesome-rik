import React from 'react';
import PropTypes from 'prop-types';

import './input-field.scss';

const InputField = ({
  name, isValid, onBlur, onChange, value, pattern
}) => (
  <input
    className={
      `input-field input-field${isValid ? '--valid' : '--invalid'}`}
    name={name}
    onBlur={onBlur}
    onChange={onChange}
    value={value}
    required
    pattern={pattern}
  />
);

InputField.defaultProps = {
  isValid: true,
  onBlur: () => '',
  pattern: ''
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  isValid: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  pattern: PropTypes.string,
  value: PropTypes.string.isRequired
};

export default InputField;
