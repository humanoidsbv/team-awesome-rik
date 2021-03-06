import React from 'react';
import PropTypes from 'prop-types';


import HeaderNavBar from './header-nav-bar/HeaderNavBar';
import './header.scss';

class Header extends React.Component {
  static propTypes = {
    toggleMenuOpen: PropTypes.func.isRequired,
    isMenuOpen: PropTypes.bool.isRequired
  }

  handleClick = () => {
    this.props.toggleMenuOpen();
  }

  render() {
    const { isMenuOpen, toggleMenuOpen } = this.props;

    return (
      <header className="header">
        <section className="header__title-bar">
          <a className="header__title" href="/">
            team awesome
          </a>
          <button
            className={`header__menu-toggle header__menu-toggle${isMenuOpen ? '--close' : '--open'}`}
            type="button"
            onClick={this.handleClick}
          >
            <img
              className="menu-toggle__item-hamburger"
              src="/static/icons/hamburger.svg"
              alt="burger"
            />
            <img
              className="menu-toggle__item-cross"
              src="/static/icons/close.svg"
              alt="cross"
            />
          </button>
        </section>
        <HeaderNavBar isMenuOpen={isMenuOpen} toggleMenuOpen={toggleMenuOpen} />
        <button className="profile" type="button">
          <img className="logo" src="/static/logo.jpg" alt="logo" />
          <img className="picture" src="/static/rik.jpg" alt="pic" />
          <img className="arrow-down" src="/static/icons/arrow-down.svg" alt="arrow" />
        </button>
      </header>
    );
  }
}

export default Header;
