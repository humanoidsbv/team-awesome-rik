import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import './header-nav-bar.scss';

class HeaderNavBar extends React.Component {
  static propTypes = {
    toggleMenuOpen: PropTypes.func.isRequired,
    isMenuOpen: PropTypes.bool.isRequired
  }

  handleClick = () => {
    this.props.toggleMenuOpen();
  }

  render() {
    const { isMenuOpen } = this.props;
    return (
      <nav className={`main-nav ${isMenuOpen ? 'main-nav--open' : ' main-nav'}`}>
        <ul className="main-nav__nav-list">
          <li className="main-nav__item main-nav__item--active">
            <Link href="/time-entries">
              <a>
                Timesheets
              </a>
            </Link>
          </li>
          <li className="main-nav__item">
            <Link href="/team-members">
              <a>
              Team Members
              </a>
            </Link>
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
    );
  }
}

export default HeaderNavBar;
