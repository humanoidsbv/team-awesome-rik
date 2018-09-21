import React from 'react';
import PropTypes from 'prop-types';
 
const AddButton = ({ buttonText, link }) => (
  <button
    className="add-button"
    type="button"
  >
    {
      link && <Link></Link>
    }
    <h3 className="add-button__text">
      {buttonText}
    </h3>
  </button>
);

AddButton.defaultProps = {
  link: ''
};

AddButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default AddButton;
