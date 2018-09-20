import React from 'react';

import { storiesOf } from '@storybook/react';
import SelectBox from '../shared/components/select-box/SelectBox';


storiesOf('SelectBox', module)
  .add('SelectBox', () => (
    <SelectBox
      name="selectClient"
      onChange={this.handleChange}
      options={['All Clients', 'Humanoids', 'Reinforcements']}
      optionValues={['', 'huma', 'rein']}
      value="filter"
    />
  ))
  .add('SelectBox in form', () => (
    <SelectBox
      name="selectTeamMember"
      onChange={this.handleChange}
      options={['Rik Frieling', 'Henk de Vries']}
      optionValues={['1', '2']}
      value="filter"
      type="form"
    />
  ));
