import React from 'react';
import PropTypes from 'prop-types';

import SelectBox from '../select-box/SelectBox';

const ComponentHeader = ({ text, selectBoxes }) => (
  <section className="component-header">
    <h2 className="component-header__title">
      {text}
    </h2>
    <div className="component-header__buttons">
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
  selectBoxes: ''
};

ComponentHeader.propTypes = {
  text: PropTypes.string.isRequired,
  selectBoxes: PropTypes.arrayOf(PropTypes.shape({
    optionvalues: PropTypes.arrayOf(PropTypes.string),
    options: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
    value: PropTypes.string
  }))
};

export default ComponentHeader;
