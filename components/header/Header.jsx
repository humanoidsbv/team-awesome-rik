import React from 'react';
import './header.scss';


class Header extends React.Component {
  state = { isMenuOpen: false };

  handleClick = () => {
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
  };

  render() {
    const { isMenuOpen } = this.state;
    return (
      <header className="header">
        <div className="title-bar">
          <a href="/">
            team awesome
          </a>
          <button className={`menu-toggle ${isMenuOpen ? 'menu-toggle--close' : 'menu-toggle--open'}`} type="button" onClick={this.handleClick}>
            <img
              className="menu-toggle__item menu-toggle__item--close"
              src="/static/icons/hamburger.svg"
              alt="burger"
            />
            <img
              className="menu-toggle__item menu-toggle__item--open"
              src="/static/icons/close.svg"
              alt="cross"
            />
          </button>
        </div>
        <nav className={`main-nav ${isMenuOpen ? 'main-nav--open' : ' main-nav'}`}>
          <ul className="main-nav__nav-list">
            <li className="main-nav__item main-nav__item--active">
              Timesheets
            </li>
            <li className="main-nav__item">
              Team members
            </li>
            <li className="main-nav__item">
              Projects
            </li>
            <li className="main-nav__item">
              Clients
            </li>
            <li className="main-nav__item">
              Documents
            </li>
          </ul>
        </nav>
        <button className="profile" type="button">
          <img className="logo" src="/static/logo.jpg" alt="logo" />
          <img className="picture" src="/static/rik.jpg" alt="pic" />
        </button>
        <img className="arrow-down" src="/static/icons/arrow-down.svg" alt="arrow" />
      </header>
    );
  }
}

export default Header;
