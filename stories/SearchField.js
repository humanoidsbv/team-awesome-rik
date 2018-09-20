import React from 'react';

import { storiesOf } from '@storybook/react';
import SearchField from '../shared/components/search-field/SearchField';


storiesOf('SearchField', module)
  .add('with text', () => (
    <SearchField />
  ));
