import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { isMenuOpenSelector, toggleMenuOpen } from '../../ducks/header';

import Header from './Header';


const HeaderContainer = (props) => (
  <Header {...props} />
);

const mapStateToProps = (state) => ({
  isMenuOpen: isMenuOpenSelector(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleMenuOpen
}, dispatch);

HeaderContainer.propTypes = Header.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
