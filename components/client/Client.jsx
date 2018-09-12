import React from 'react';
import PropTypes from 'prop-types';

import './client.scss';

class Client extends React.Component {
  state = { showDetails: false }


  handleClick = () => {
    this.setState(({ showDetails }) => ({
      showDetails: !showDetails
    }));
  }

  render() {
    const {
      name, city, phone,
      email, site, logo
    } = this.props;
    const { showDetails } = this.state;
    return (
      <div
        className="client"
        onClick={this.handleClick}
        onKeyDown={this.handleClick}
        role="button"
        tabIndex="0"
      >
        <div className="client__top-row">
          <div className="client-summary">
            <img
              className="client__logo"
              src={logo}
              alt={`${name}`}
            />
            <div className="name-city">
              <div className="client-name">
                {`${name}`}
              </div>
              <div className="city">
                { city }
              </div>
            </div>
          </div>
          <div className="client__container">
            <div className="client__details-desktop">
              <div className="client__phone">
                {phone}
                <div className="client__phone-text">
                  Phone number
                </div>
              </div>
              <div className="client__email-desktop">
                {email}
                <div className="client__email-desktop-text">
                  Email
                </div>
              </div>
              <div className="client__website">
                {site}
                <div className="client__website-desktop-text">
                  Website
                </div>
              </div>
            </div>
            <span
              className={`client__arrow-expand
                client__arrow-expand${showDetails ? '--opened' : '--closed'}
              `}
            />
          </div>
        </div>
        <div className={`client__client-details-mobile${showDetails ? '--expanded' : '--collapsed'}`}>
          <div className="detail-header">
            <div className="detail-header__text">
              Detailed information about
              {' '}
              {name}
            </div>
          </div>
          <div className="email">
            <div>
              {email}
            </div>
            <div className="email__text">
              Email
            </div>
          </div>
          <div className="phone">
            {phone}
            <div className="phone__text">
              Phone number
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Client.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired
};

export default Client;
