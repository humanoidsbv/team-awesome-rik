import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Clients from '../clients/Clients';
import SelectBox from '../../shared/components/select-box/SelectBox';
import './clients-overview.scss';

class ClientsOverview extends React.Component {
  static propTypes = {
    changeSortDirection: PropTypes.func.isRequired,
    requestClients: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired,
    sortDirection: PropTypes.string.isRequired,
    sortClients: PropTypes.func.isRequired,
    clients: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      kvk: PropTypes.number.isRequired,
      remarks: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      zipCode: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      site: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired
    })).isRequired
  }

  componentDidMount() {
    this.props.requestClients();
  }

  handleChangeSortBy = ({ target }) => {
    this.props.sortClients(target.value);
  }

  handleChangeSortDirection = ({ target }) => {
    this.props.changeSortDirection(target.value);
  }

  render() {
    const { clients, sortBy, sortDirection } = this.props;
    return (
      <div className="container">
        <div className="clients-overview">
          <div className="clients-overview__header">
            <span className="clients-overview__text">
              All Clients
            </span>
            <span className="clients-overview__header-buttons">
              <Link href="add-client">
                <button
                  className="clients-overview__button-new"
                  type="button"
                >
                    New Client
                </button>
              </Link>
              <SelectBox
                options={['Company Name', 'City']}
                optionValues={['name', 'city']}
                onChange={this.handleChangeSortBy}
                value={sortBy}
              />
              <SelectBox
                options={['Ascending', 'Descending']}
                optionValues={['ascending', 'descending']}
                onChange={this.handleChangeSortDirection}
                value={sortDirection}
              />
            </span>
          </div>
          <Clients clients={clients} />
        </div>
      </div>
    );
  }
}
export default ClientsOverview;
