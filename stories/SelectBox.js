import React from 'react';

import { storiesOf } from '@storybook/react';
import SelectBox from '../shared/components/select-box/SelectBox';


storiesOf('SelectBox', module)
  .add('with text', () => (
    <SelectBox
      name='box'
      onChange={this.handleChange}
      options={['All Clients']}
      optionValues={['']}
      value='filter'
    />
  ));
