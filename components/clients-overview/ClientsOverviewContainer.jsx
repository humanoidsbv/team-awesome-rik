import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  changeSortDirection, requestClients,
  clientsSortBySelector, clientsSortDirectionSelector,
  sortClients, clientsSelector
} from '../../ducks/clients';
import ClientsOverview from './ClientsOverview';

const ClientsOverviewContainer = (props) => (
  <ClientsOverview {...props} />
);


const mapStateToProps = (state) => ({
  sortBy: clientsSortBySelector(state),
  sortDirection: clientsSortDirectionSelector(state),
  clients: clientsSelector(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeSortDirection,
  requestClients,
  sortClients,
  clientsSelector
}, dispatch);


ClientsOverviewContainer.propTypes = ClientsOverview.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ClientsOverviewContainer);
