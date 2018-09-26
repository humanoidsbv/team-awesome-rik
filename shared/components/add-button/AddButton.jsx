import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import './add-button.scss';

const renderButton = (buttonText) => (
  <button
    className="add-button"
    type="button"
  >
    <h3 className="add-button__text">
      {buttonText}
    </h3>
  </button>
);


const AddButton = ({ buttonText, link }) => (
  link ? (
    <Link href={link}>
      {renderButton(buttonText)}
    </Link>
  )
    : renderButton(buttonText)
);

AddButton.defaultProps = {
  link: ''
};

AddButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default AddButton;
