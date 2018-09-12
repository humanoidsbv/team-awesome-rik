import React from 'react';
import PropTypes from 'prop-types';

import SearchField from '../search-field/SearchField';
import SelectBox from '../select-box/SelectBox';
import './page-header.scss';

const PageHeader = (
  {
    text, summation, summationText,
    selectBoxes, displaySearchField
  }
) => (
  <header className="page-header">
    <section className="page-header__section">
      <h1 className="page-header__title">
        {text}
      </h1>
      <div className="page-header__divider" />
      <h2 className="page-header__summation">
        {summation}
      </h2>
      <h2 className="page-header__summation-text">
        {summationText}
      </h2>
    </section>
    <section className="page-header__section">
      {
        !selectBoxes || selectBoxes.map(
          (selectBox, index) => (
            <SelectBox
              key={`${index + selectBox.value}`}
              optionValues={selectBox.optionValues}
              options={selectBox.options}
              onChange={selectBox.onChange}
              value={selectBox.value}
            />
          )
        )
      }
      { !displaySearchField || <SearchField /> }
    </section>
  </header>
);


PageHeader.defaultProps = {
  selectBoxes: '',
  displaySearchField: false
};

PageHeader.propTypes = {
  text: PropTypes.string.isRequired,
  summation: PropTypes.number.isRequired,
  summationText: PropTypes.string.isRequired,
  selectBoxes: PropTypes.arrayOf(PropTypes.shape({
    optionvalues: PropTypes.arrayOf(PropTypes.string),
    options: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
    value: PropTypes.string
  })),
  displaySearchField: PropTypes.bool
};

export default PageHeader;
