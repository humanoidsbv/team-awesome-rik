import React from 'react';

import Client from '../client/Client';
import './clients.scss';


const Clients = ({ clients }) => (
  clients.map((client) => (
    <Client
      key={client.id}
      {...client}
    />
  ))
);

export default Clients;
