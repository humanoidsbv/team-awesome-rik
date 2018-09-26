import React from 'react';
import PropTypes from 'prop-types';

import AddButton from '../add-button/AddButton';
import SelectBox from '../select-box/SelectBox';
import './component-header.scss';

const ComponentHeader = ({ text, addButtons, selectBoxes }) => (
  <section className="component-header">
    <h2 className="component-header__title">
      {text}
    </h2>
    <div className="component-header__buttons">
      {
        addButtons && addButtons.map(
          (addButton, index) => (
            <AddButton
              key={addButton.buttonText[index]}
              {...addButton}
            />
          )
        )
      }
      {
        selectBoxes && selectBoxes.map(
          (selectBox, index) => (
            <SelectBox
              key={selectBox.options[index]}
              {...selectBox}
            />
          )
        )
      }
    </div>
  </section>
);

ComponentHeader.defaultProps = {
  addButtons: [],
  selectBoxes: []
};

ComponentHeader.propTypes = {
  text: PropTypes.string.isRequired,
  addButtons: PropTypes.arrayOf(PropTypes.shape({
    buttonText: PropTypes.string,
    link: PropTypes.string
  })),
  selectBoxes: PropTypes.arrayOf(PropTypes.shape({
    optionvalues: PropTypes.arrayOf(PropTypes.string),
    options: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
    value: PropTypes.string
  }))
};

export default ComponentHeader;
