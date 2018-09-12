import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  addClient, clientsSelector
} from '../../ducks/clients';
import ClientForm from './ClientForm';

const ClientFormContainer = (props) => (
  <ClientForm {...props} />
);


const mapStateToProps = (state) => ({
  clients: clientsSelector(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addClient,
  clientsSelector
}, dispatch);


ClientFormContainer.propTypes = ClientForm.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ClientFormContainer);
