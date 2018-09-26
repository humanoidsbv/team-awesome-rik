import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import './header-nav-bar.scss';

class HeaderNavBar extends React.Component {
  static propTypes = {
    toggleMenuOpen: PropTypes.func.isRequired,
    isMenuOpen: PropTypes.bool.isRequired
  }

  state ={
    isItemActive: [false, false, false, false, false]
  }

  handleClick = () => {
    this.props.toggleMenuOpen();
  }

  handleNavClick = (navIndex) => {
    this.setState((prevState) => ({
      ...prevState,
      isItemActive: prevState.isItemActive.map((value, index) => (index === navIndex))
    }));
  }

  render() {
    const { isMenuOpen } = this.props;
    const { isItemActive } = this.state;
    return (
      <nav className={`main-nav ${isMenuOpen ? 'main-nav--open' : ' main-nav'}`}>
        <ul className="main-nav__nav-list">
          <li className={`main-nav__item main-nav__item${isItemActive[0] ? '--active' : '--inactive'}`}>
            <Link href="/time-entries">
              <a
                className="main-nav__link"
                onClick={() => this.handleNavClick(0)}
                onKeyDown={this.handleClick}
                role="button"
                tabIndex="0"
              >
                Timesheets
              </a>
            </Link>
          </li>
          <li className={`main-nav__item main-nav__item${isItemActive[1] ? '--active' : '--inactive'}`}>
            <Link href="/team-members">
              <a
                className="main-nav__link"
                onClick={() => this.handleNavClick(1)}
                onKeyDown={this.handleClick}
                role="button"
                tabIndex="0"
              >
                Team Members
              </a>
            </Link>
          </li>
          <li className={`main-nav__item main-nav__item${isItemActive[2] ? '--active' : '--inactive'}`}>
            Projects
          </li>
          <li className={`main-nav__item main-nav__item${isItemActive[3] ? '--active' : '--inactive'}`}>
            <Link href="/clients">
              <a
                className="main-nav__link"
                onClick={() => this.handleNavClick(3)}
                onKeyDown={this.handleClick}
                role="button"
                tabIndex="0"
              >
                Clients
              </a>
            </Link>
          </li>
          <li className={`main-nav__item main-nav__item${isItemActive[4] ? '--active' : '--inactive'}`}>
            Documents
          </li>
        </ul>
      </nav>
    );
  }
}

export default HeaderNavBar;
